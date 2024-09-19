"use client";
// Constants
export const DRAFT_MODE_ROUTE = "/api/draft";
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\dashboard\studio\[[...tool]]\page.tsx` route
 */
import { debugSecrets } from "@sanity/preview-url-secret/sanity-plugin-debug-secrets";
import { visionTool } from "@sanity/vision";
import { defineConfig, defineField } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { presentationTool } from "sanity/presentation";
import { recurringDates } from "sanity-plugin-recurring-dates";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { documentInternationalization } from "@sanity/document-internationalization";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/dashboard/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    documentInternationalization({
      // Required
      // Either: an array of supported languages...
      supportedLanguages: [
        { id: "de", title: "Deutsche" },
        { id: "en", title: "English" },
      ],
      // ...or a function that takes the client and returns a promise of an array of supported languages
      // MUST return an "id" and "title" as strings
      // supportedLanguages: (client) => client.fetch(`*[_type == "language"]{id, title}`),

      // Required
      // Translations UI will only appear on these schema types
      schemaTypes: [
        "post",
        "event",
        "page",
        "homePage",
        "siteSettings",
        "navigationItem",
        "navigation",
      ],

      // Optional
      // Customizes the name of the language field
      languageField: `language`, // defaults to "language"

      // Optional
      // Keep translation.metadata references weak
      weakReferences: true, // defaults to false

      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      bulkPublish: true, // defaults to false

      // Optional
      // Adds additional fields to the metadata document
      metadataFields: [defineField({ name: "slug", type: "slug" })],
    }),
    recurringDates(),
    structureTool({ structure }),
    presentationTool({ previewUrl: {} }),
    unsplashImageAsset(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    debugSecrets(),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "de", title: "Deutsch" },
      ],
      defaultLanguages: ["de"],
      fieldTypes: [],
    }),
  ],
  tools: (prev, { currentUser }) => {
    const isAdmin = currentUser?.roles.some(
      (role) => role.name === "administrator"
    );
    // Return all tools for admins, otherwise exclude the vision tool
    return isAdmin ? prev : prev.filter((tool) => tool.name !== "vision");
  },
  scheduledPublishing: {
    enabled: true,
    inputDateTimeFormat: "MM/dd/yyyy h:mm a",
  },
});
