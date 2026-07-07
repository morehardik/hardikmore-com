import { config, fields, collection, singleton } from "@keystatic/core";

const tagOptions = [
  { label: "developer", value: "developer" },
  { label: "consumer", value: "consumer" },
  { label: "agentic", value: "agentic" },
  { label: "b2b", value: "b2b" },
  { label: "investing", value: "investing" },
  { label: "essay", value: "essay" },
] as const;

// Optional frontmatter keys that lib/markdown.ts reads. Modeled here so Keystatic
// preserves them on save instead of dropping unknown keys.
const optionalMeta = {
  section: fields.text({ label: "Section", validation: { isRequired: false } }),
  imageWidth: fields.text({ label: "Image width", validation: { isRequired: false } }),
  externalUrl: fields.text({ label: "External URL", validation: { isRequired: false } }),
};

export default config({
  storage: { kind: "local" },
  collections: {
    work: collection({
      label: "Work",
      slugField: "title",
      path: "content/work/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date" }),
        tag: fields.select({ label: "Tag", options: tagOptions, defaultValue: "developer" }),
        description: fields.text({ label: "Description", multiline: true }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        ...optionalMeta,
        content: fields.markdoc({ label: "Body", extension: "md" }),
      },
    }),
    writing: collection({
      label: "Writing",
      slugField: "title",
      path: "content/writing/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date" }),
        tag: fields.select({ label: "Tag", options: tagOptions, defaultValue: "essay" }),
        description: fields.text({ label: "Description", multiline: true }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        canonical: fields.url({ label: "Canonical URL" }),
        ...optionalMeta,
        content: fields.markdoc({ label: "Body", extension: "md" }),
      },
    }),
  },
  singletons: {
    now: singleton({
      label: "Now",
      path: "content/now",
      format: { contentField: "content" },
      schema: {
        updated: fields.date({ label: "Updated" }),
        location: fields.text({ label: "Location", validation: { isRequired: false } }),
        content: fields.markdoc({ label: "Body", extension: "md" }),
      },
    }),
  },
});
