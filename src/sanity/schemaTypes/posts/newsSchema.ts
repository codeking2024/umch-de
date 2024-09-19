// schemas/news.ts
import { defineType, defineField } from "sanity";
import { MailIcon } from "lucide-react";
import {
  languageField,
  mainImageField,
  titleField,
} from "../fields/generalField";
import { contentField } from "../fields/postField";
import { createdAtField } from "../fields/createdAtField";

export default defineType({
  name: "news",
  type: "document",
  title: "News",
  icon: MailIcon,
  fields: [
    defineField(languageField),
    defineField(titleField),
    defineField(mainImageField),
    defineField(contentField),
    defineField(createdAtField),
  ],
});
