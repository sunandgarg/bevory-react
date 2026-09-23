const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_MODEL = "gemini-2.5-flash-lite";
const FALLBACK_MODEL = "gemini-3.1-flash-lite";
const REQUEST_TIMEOUT_MS = 15_000;

type GeminiPart = { text?: string };
type GeminiResponse = {
  candidates?: Array<{ content?: { parts?: GeminiPart[] } }>;
  error?: { message?: string };
};

export const geminiConfigured = () => Boolean(process.env.GEMINI_API_KEY?.trim());

export const configuredGeminiModels = () => {
  const configured = process.env.GEMINI_MODEL?.trim();
  return [...new Set([configured || DEFAULT_MODEL, FALLBACK_MODEL])];
};

const responseText = (payload: GeminiResponse) => payload.candidates?.[0]?.content?.parts
  ?.map((part) => part.text || "")
  .join("")
  .trim() || "";

const requestGemini = async (
  prompt: string,
  options: {
    responseMimeType?: "text/plain" | "application/json";
    responseSchema?: Record<string, unknown>;
    maxOutputTokens?: number;
    temperature?: number;
  } = {},
) => {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) throw new Error("Gemini is not configured");

  let lastError = "Gemini request failed";
  for (const model of configuredGeminiModels()) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(`${GEMINI_ENDPOINT}/${encodeURIComponent(model)}:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: options.temperature ?? 0.2,
            maxOutputTokens: options.maxOutputTokens ?? 500,
            responseMimeType: options.responseMimeType ?? "text/plain",
            ...(options.responseSchema ? { responseSchema: options.responseSchema } : {}),
          },
        }),
        signal: controller.signal,
      });
      const payload = await response.json().catch(() => ({})) as GeminiResponse;
      if (!response.ok) {
        lastError = payload.error?.message || `Gemini returned ${response.status}`;
        if (response.status === 404 || response.status === 400) continue;
        throw new Error(lastError);
      }
      const text = responseText(payload);
      if (!text) throw new Error("Gemini returned an empty response");
      return { text, model };
    } catch (error) {
      lastError = error instanceof Error && error.name === "AbortError"
        ? "Gemini request timed out"
        : error instanceof Error ? error.message : lastError;
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(lastError);
};

export const generateGeminiText = async (prompt: string) => requestGemini(prompt, {
  responseMimeType: "text/plain",
  maxOutputTokens: 350,
  temperature: 0.25,
});

export const generateGeminiJson = async <T>(
  prompt: string,
  responseSchema: Record<string, unknown>,
): Promise<{ data: T; model: string }> => {
  const response = await requestGemini(prompt, {
    responseMimeType: "application/json",
    responseSchema,
    maxOutputTokens: 1_200,
    temperature: 0.15,
  });
  try {
    return { data: JSON.parse(response.text) as T, model: response.model };
  } catch {
    throw new Error("Gemini returned invalid structured data");
  }
};

