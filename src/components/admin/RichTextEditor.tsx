import { useState, useRef, useCallback, useEffect } from "react";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link,
  Image,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Table,
  Plus,
  Minus,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormField from "./FormField";
import ImageUpload from "./ImageUpload";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const EDITOR_ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "ul", "ol", "li", "strong", "em",
  "b", "i", "u", "blockquote", "img", "code", "pre", "br", "hr", "div", "span", "table",
  "thead", "tbody", "tr", "th", "td",
];
const EDITOR_ALLOWED_ATTR = [
  "href", "src", "srcset", "alt", "title", "class", "target", "rel", "style", "loading",
  "colspan", "rowspan",
];

const isFirstPartyEditorImageUrl = (value: string) => {
  const candidate = value.trim();
  if (!candidate || candidate.startsWith("//") || candidate.includes("\\")) return false;
  try {
    const url = new URL(candidate, window.location.origin);
    return ["http:", "https:"].includes(url.protocol)
      && url.origin === window.location.origin
      && !url.username
      && !url.password;
  } catch {
    return false;
  }
};

const normalizeCssForUrlScan = (value: string) => value
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(
    /\\(?:([\da-f]{1,6})(?:\r\n|[\t\n\f\r ])?|([^\r\n\f])|(?:\r\n|[\n\f\r]))/gi,
    (_escape, hexadecimal: string | undefined, escapedCharacter: string | undefined) => {
      if (hexadecimal) {
        const codePoint = Number.parseInt(hexadecimal, 16);
        return codePoint > 0 && codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : "�";
      }
      return escapedCharacter ?? "";
    },
  );

const sanitizeEditorHtml = (value: string) => {
  const clean = DOMPurify.sanitize(value, {
    ALLOWED_TAGS: EDITOR_ALLOWED_TAGS,
    ALLOWED_ATTR: EDITOR_ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
  });
  const template = document.createElement("template");
  template.innerHTML = clean;

  for (const image of template.content.querySelectorAll("img")) {
    const source = image.getAttribute("src") ?? "";
    if (!isFirstPartyEditorImageUrl(source)) {
      image.remove();
      continue;
    }
    const sourceSet = image.getAttribute("srcset");
    if (sourceSet && sourceSet.split(",").some((candidate) => (
      !isFirstPartyEditorImageUrl(candidate.trim().split(/\s+/)[0] ?? "")
    ))) image.removeAttribute("srcset");
  }

  for (const element of template.content.querySelectorAll<HTMLElement>("[style]")) {
    const style = element.getAttribute("style") ?? "";
    const normalizedStyle = normalizeCssForUrlScan(style);
    if (/(?:^|[^\w-])(?:-webkit-)?image-set\s*\(/i.test(normalizedStyle)) {
      element.removeAttribute("style");
      continue;
    }
    const cssUrls = [...normalizedStyle
      .matchAll(/\burl\(\s*(?:"([^"]*)"|'([^']*)'|([^\s"')]+))\s*\)/gi)]
      .map((match) => match[1] ?? match[2] ?? match[3] ?? "");
    if (cssUrls.some((url) => !isFirstPartyEditorImageUrl(url))) element.removeAttribute("style");
  }

  return template.innerHTML;
};

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [history, setHistory] = useState<string[]>([value]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Sync editor content with value prop
  useEffect(() => {
    const sanitized = sanitizeEditorHtml(value || "");
    if (editorRef.current && editorRef.current.innerHTML !== sanitized) {
      editorRef.current.innerHTML = sanitized;
    }
    if (sanitized !== value) onChange(sanitized);
  }, [onChange, value]);

  const saveHistory = useCallback((newValue: string) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newValue);
    setHistory(newHistory.slice(-50));
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const handleInput = () => {
    if (editorRef.current) {
      const newValue = sanitizeEditorHtml(editorRef.current.innerHTML);
      if (editorRef.current.innerHTML !== newValue) editorRef.current.innerHTML = newValue;
      onChange(newValue);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const clipboardHtml = event.clipboardData.getData("text/html");
    const clipboardText = event.clipboardData.getData("text/plain");
    document.execCommand(
      clipboardHtml ? "insertHTML" : "insertText",
      false,
      clipboardHtml ? sanitizeEditorHtml(clipboardHtml) : clipboardText,
    );
    handleInput();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const droppedHtml = event.dataTransfer.getData("text/html");
    if (!droppedHtml && !event.dataTransfer.files.length) return;
    event.preventDefault();
    if (droppedHtml) document.execCommand("insertHTML", false, sanitizeEditorHtml(droppedHtml));
    handleInput();
  };

  const handleBlur = () => {
    if (editorRef.current) {
      saveHistory(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      if (editorRef.current) {
        const sanitized = sanitizeEditorHtml(history[newIndex]);
        editorRef.current.innerHTML = sanitized;
        onChange(sanitized);
      }
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      if (editorRef.current) {
        const sanitized = sanitizeEditorHtml(history[newIndex]);
        editorRef.current.innerHTML = sanitized;
        onChange(sanitized);
      }
    }
  };

  const insertLink = () => {
    editorRef.current?.focus();
    
    // Get the current selection
    const selection = window.getSelection();
    const selectedText = selection?.toString() || "";
    
    // Use selected text if no link text provided
    const displayText = linkText || selectedText || linkUrl;
    const anchor = document.createElement("a");
    anchor.href = linkUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.color = "hsl(var(--primary))";
    anchor.style.textDecoration = "underline";
    anchor.textContent = displayText;
    const html = DOMPurify.sanitize(anchor.outerHTML, {
      ALLOWED_TAGS: ["a"],
      ALLOWED_ATTR: ["href", "target", "rel", "style"],
    });
    if (!html.includes("href=")) return;
    
    document.execCommand("insertHTML", false, html);
    handleInput();
    setShowLinkDialog(false);
    setLinkUrl("");
    setLinkText("");
  };

  const insertImage = () => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = imageAlt;
    image.loading = "lazy";
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    const html = DOMPurify.sanitize(image.outerHTML, {
      ALLOWED_TAGS: ["img"],
      ALLOWED_ATTR: ["src", "alt", "loading", "style"],
    });
    if (!html.includes("src=")) return;
    document.execCommand("insertHTML", false, html);
    editorRef.current?.focus();
    handleInput();
    setShowImageDialog(false);
    setImageUrl("");
    setImageAlt("");
  };

  const insertTable = () => {
    let tableHtml = '<table style="width:100%; border-collapse:collapse; margin:1rem 0;">';
    for (let i = 0; i < tableRows; i++) {
      tableHtml += '<tr>';
      for (let j = 0; j < tableCols; j++) {
        const cellTag = i === 0 ? 'th' : 'td';
        const style = 'border:1px solid #ddd; padding:8px; text-align:left;';
        const bgStyle = i === 0 ? 'background-color:#f5f5f5; font-weight:bold;' : '';
        tableHtml += `<${cellTag} style="${style}${bgStyle}">${i === 0 ? `Header ${j + 1}` : `Cell ${i},${j + 1}`}</${cellTag}>`;
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table><p><br></p>';
    
    document.execCommand("insertHTML", false, tableHtml);
    editorRef.current?.focus();
    handleInput();
  };

  const toolbarButtons = [
    { icon: Undo, action: handleUndo, tooltip: "Undo", disabled: historyIndex === 0 },
    { icon: Redo, action: handleRedo, tooltip: "Redo", disabled: historyIndex >= history.length - 1 },
    { divider: true },
    { icon: Bold, action: () => execCommand("bold"), tooltip: "Bold (Ctrl+B)" },
    { icon: Italic, action: () => execCommand("italic"), tooltip: "Italic (Ctrl+I)" },
    { icon: Underline, action: () => execCommand("underline"), tooltip: "Underline (Ctrl+U)" },
    { divider: true },
    { icon: Heading2, action: () => execCommand("formatBlock", "h2"), tooltip: "Heading 2" },
    { icon: Heading3, action: () => execCommand("formatBlock", "h3"), tooltip: "Heading 3" },
    { divider: true },
    { icon: List, action: () => execCommand("insertUnorderedList"), tooltip: "Bullet List" },
    { icon: ListOrdered, action: () => execCommand("insertOrderedList"), tooltip: "Numbered List" },
    { icon: Quote, action: () => execCommand("formatBlock", "blockquote"), tooltip: "Quote" },
    { divider: true },
    { icon: AlignLeft, action: () => execCommand("justifyLeft"), tooltip: "Align Left" },
    { icon: AlignCenter, action: () => execCommand("justifyCenter"), tooltip: "Align Center" },
    { icon: AlignRight, action: () => execCommand("justifyRight"), tooltip: "Align Right" },
    { divider: true },
    { icon: Link, action: () => setShowLinkDialog(true), tooltip: "Insert Link" },
    { icon: Image, action: () => setShowImageDialog(true), tooltip: "Insert Image" },
  ];

  return (
    <TooltipProvider>
      <div className="border rounded-lg overflow-hidden bg-card">
        {/* Toolbar */}
        <div className="flex items-center gap-0.5 p-2 border-b bg-secondary/30 flex-wrap">
          {toolbarButtons.map((btn, idx) =>
            btn.divider ? (
              <div key={idx} className="w-px h-6 bg-border mx-1" />
            ) : (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={btn.action}
                    disabled={btn.disabled}
                  >
                    {btn.icon && <btn.icon className="w-4 h-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  {btn.tooltip}
                </TooltipContent>
              </Tooltip>
            )
          )}
          
          {/* Table Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Table className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Insert Table</h4>
                <div className="flex items-center gap-2">
                  <Label className="text-xs w-12">Rows:</Label>
                  <div className="flex items-center gap-1">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="h-7 w-7 p-0"
                      onClick={() => setTableRows(Math.max(1, tableRows - 1))}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{tableRows}</span>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="h-7 w-7 p-0"
                      onClick={() => setTableRows(Math.min(20, tableRows + 1))}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-xs w-12">Cols:</Label>
                  <div className="flex items-center gap-1">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="h-7 w-7 p-0"
                      onClick={() => setTableCols(Math.max(1, tableCols - 1))}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{tableCols}</span>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="h-7 w-7 p-0"
                      onClick={() => setTableCols(Math.min(10, tableCols + 1))}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <Button type="button" size="sm" className="w-full" onClick={insertTable}>
                  Insert Table
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* WYSIWYG Editor */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onPaste={handlePaste}
          onDrop={handleDrop}
          onBlur={handleBlur}
          className="min-h-[300px] p-4 outline-none prose prose-sm max-w-none dark:prose-invert focus:ring-2 focus:ring-ring focus:ring-inset"
          style={{ 
            wordBreak: 'break-word',
          }}
          data-placeholder={placeholder || "Start writing your content..."}
          suppressContentEditableWarning
        />

        {/* SEO Tips */}
        <div className="p-3 border-t bg-secondary/20 text-xs text-muted-foreground">
          <span className="font-medium">✨ SEO Tips:</span> Use H2 for main sections, H3 for subsections. Add descriptive alt text to images. Keep paragraphs short.
        </div>
      </div>

      {/* Link Dialog */}
      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Link</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <FormField label="URL" required>
              <Input
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </FormField>
            <FormField label="Link Text">
              <Input
                placeholder="Click here"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
              />
            </FormField>
            <Button type="button" className="w-full" onClick={insertLink} disabled={!linkUrl}>
              Insert Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <ImageUpload
              value={imageUrl || null}
              onChange={(url) => setImageUrl(url ?? "")}
              folder="rich-text"
              recommendedSize="3840 px longest edge"
              aspectRatio="original aspect ratio"
            />
            <FormField label="Alt Text (SEO Important!)" hint="Describe the image for SEO and accessibility">
              <Input
                placeholder="Descriptive text for the image"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
              />
            </FormField>
            <Button type="button" className="w-full" onClick={insertImage} disabled={!imageUrl}>
              Insert Image
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: hsl(var(--muted-foreground));
          pointer-events: none;
        }
        [contenteditable] table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        [contenteditable] th,
        [contenteditable] td {
          border: 1px solid hsl(var(--border));
          padding: 8px;
          text-align: left;
        }
        [contenteditable] th {
          background-color: hsl(var(--secondary));
          font-weight: bold;
        }
        [contenteditable] blockquote {
          border-left: 3px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
        }
      `}</style>
    </TooltipProvider>
  );
};

export default RichTextEditor;
