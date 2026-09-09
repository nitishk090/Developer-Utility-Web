import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Cable,
  ClipboardCheck,
  FileJson,
  Gauge,
  Globe2,
  Terminal,
  WandSparkles,
} from "lucide-react";

export type Tool = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const tools: Tool[] = [
  {
    name: "cURL Maker",
    description: "Build and export requests without hand-writing flags.",
    icon: Terminal,
  },
  {
    name: "HTTP Request Tools",
    description: "Compose API requests in a focused desktop workspace.",
    icon: Globe2,
  },
  {
    name: "JSON Utilities",
    description: "Format and work with structured data quickly.",
    icon: FileJson,
  },
  {
    name: "Encoding & decoding",
    description: "Handle everyday data transformations close at hand.",
    icon: Braces,
  },
  {
    name: "Validation & formatting",
    description: "Keep utility work consistent and easy to inspect.",
    icon: ClipboardCheck,
  },
];

export const featureCards = [
  {
    eyebrow: "01 / Requests",
    title: "Build requests faster",
    description:
      "A dedicated place to shape HTTP requests and generate cURL output for the next step in your workflow.",
    icon: Cable,
    accent: "blue",
  },
  {
    eyebrow: "02 / Inspection",
    title: "See what is happening",
    description:
      "Keep request details and live HTTP work in view instead of scattering the investigation across browser tabs.",
    icon: Gauge,
    accent: "mint",
  },
  {
    eyebrow: "03 / Utilities",
    title: "Small tools, close by",
    description:
      "Format, validate, encode, decode, and work with JSON from one developer-focused desktop surface.",
    icon: WandSparkles,
    accent: "orange",
  },
];

export const faqs = [
  [
    "What is Developer Utility?",
    "Developer Utility is a desktop toolkit for everyday development utilities, including HTTP request work, cURL generation, JSON and data utilities, and formatting or validation helpers.",
  ],
  [
    "Is Developer Utility free?",
    "Pricing and distribution details are not defined in the current project materials. Check the project releases for the latest availability.",
  ],
  [
    "Which platforms are supported?",
    "The project brief identifies Windows as a target for a production installer. macOS availability depends on whether a macOS release URL is configured.",
  ],
  [
    "Does it require Python?",
    "The current project materials do not establish a Python runtime requirement. The website therefore makes no dependency claim.",
  ],
  [
    "Where can I download it?",
    "Configured installer links appear in the download section.",
  ],
  [
    "What utilities are included?",
    "The toolkit includes HTTP request tools, cURL generation, JSON utilities, validation, formatting, encoding, and decoding helpers.",
  ],
];
