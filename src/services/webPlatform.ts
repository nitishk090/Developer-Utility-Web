export interface HttpRequestInput {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
}

export interface HttpResponseResult {
  ok: boolean;
  status: number;
  statusText: string;
  headers: string[];
  body: string;
  error?: string;
}

interface WebDeveloperUtilityApi {
  clipboard: {
    copy(text: string): Promise<boolean>;
    read(): Promise<string>;
  };
  files: {
    open(): Promise<string | null>;
    save(content: string, extension: string): Promise<boolean>;
  };
  http: {
    request(input: HttpRequestInput): Promise<HttpResponseResult>;
  };
}

declare global {
  interface Window {
    developerUtility: WebDeveloperUtilityApi;
  }
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Continue with the selection-based fallback for browsers without clipboard permission.
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  try {
    field.select();
    return document.execCommand("copy");
  } finally {
    field.remove();
  }
}

async function readText(): Promise<string> {
  if (!navigator.clipboard?.readText) {
    throw new Error("Clipboard reading is not available in this browser context.");
  }
  return navigator.clipboard.readText();
}

function openTextFile(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".curl,.http,.txt,text/plain,application/json";
    input.addEventListener(
      "change",
      () => {
        const file = input.files?.[0];
        if (!file) {
          resolve(null);
          return;
        }
        void file.text().then(resolve, reject);
      },
      { once: true },
    );
    input.addEventListener("cancel", () => resolve(null), { once: true });
    input.click();
  });
}

async function saveTextFile(content: string, extension: string): Promise<boolean> {
  const suffix = extension.replace(/^\.+/, "").replace(/[^a-z0-9_-]/gi, "");
  if (!suffix) throw new Error("A valid file extension is required.");
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = `developer-utility-request.${suffix}`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  return true;
}

async function request(input: HttpRequestInput): Promise<HttpResponseResult> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 30_000);
  try {
    const response = await fetch(input.url, {
      method: input.method,
      headers: input.headers,
      body: ["GET", "HEAD"].includes(input.method.toUpperCase())
        ? undefined
        : input.body,
      mode: "cors",
      signal: controller.signal,
    });
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      headers: [...response.headers].map(([key, value]) => `${key}: ${value}`),
      body: await response.text(),
    };
  } catch (error) {
    const detail =
      error instanceof DOMException && error.name === "AbortError"
        ? "The request timed out after 30 seconds."
        : "Browser fetch failed. The target may block this cross-origin request (CORS), or a network policy may have prevented access.";
    return {
      ok: false,
      status: 0,
      statusText: "",
      headers: [],
      body: "",
      error: detail,
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

window.developerUtility = {
  clipboard: { copy: copyText, read: readText },
  files: { open: openTextFile, save: saveTextFile },
  http: { request },
};
