import { z } from "zod";
import { BEVORY_CITIES } from "../src/lib/locations.js";
import { normalizeIndianMobile } from "../src/lib/indianMobile.js";

const cities = new Map(BEVORY_CITIES.map(({ name }) => [name.toLowerCase(), name]));

export const marketingLeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
  mobile: z.string().max(32).transform(normalizeIndianMobile)
    .refine((value) => /^[6-9]\d{9}$/.test(value), "Enter a valid Indian mobile number"),
  city: z.string().trim().max(80).transform((value, context) => {
    const city = cities.get(value.toLowerCase());
    if (!city) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: "Choose a listed city" });
      return z.NEVER;
    }
    return city;
  }),
  adult: z.literal(true),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
}).strict();
