"use client";

import { Keystatic } from "@keystatic/core/ui";
import keystaticConfig from "@/keystatic.config";

// Keystatic's <Keystatic> config prop is invariant over the config's collection
// keys, which trips strict TypeScript. The runtime contract is correct, so we
// widen the type here in this single glue component.
const config = keystaticConfig as Parameters<typeof Keystatic>[0]["config"];

export default function KeystaticApp() {
  return <Keystatic config={config} />;
}
