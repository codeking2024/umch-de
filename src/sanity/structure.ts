import type { StructureResolver } from "sanity/structure";
import {
  LayoutDashboardIcon,
  UniversityIcon,
  Settings2Icon,
} from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Main")
    .items([
      // Content Section
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("news").title("News"),
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),

      // Author Section
      S.documentTypeListItem("author").title("Authors"),
      S.listItem()
        .title("People")
        .icon(UniversityIcon)
        .child(
          S.list()
            .title("People")
            .items([
              S.documentTypeListItem("colleagues").title("Colleagues"),
              S.documentTypeListItem("teachers").title("Teachers"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Pages")
        .icon(LayoutDashboardIcon)
        .child(
          S.list()
            .title("Home and Pages")
            .items([
              S.documentTypeListItem("homePage").title("Home"),
              S.documentTypeListItem("page").title("Pages"),
            ])
        ),
      S.divider(),

      S.listItem()
        .title("Settings")
        .icon(Settings2Icon)
        .child(
          S.list()
            .title("Settings Documents")
            .items([
              S.documentTypeListItem("addressSchema"),
              S.documentTypeListItem("siteSettings"),
              S.documentTypeListItem("navigation"),
              S.documentTypeListItem("navigationItem"),
            ])
        ),
    ]);
