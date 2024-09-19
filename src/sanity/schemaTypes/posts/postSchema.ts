import {defineField, defineType} from 'sanity'
import {languageField, slugField, titleField} from "../fields/generalField";
import {authorField} from "../fields/autherField";
import {categories} from "../fields/categoryField";
import { contentField, coverImageField, excerptField, publishedAtField} from "../fields/postField";

import {NotebookPenIcon} from "lucide-react"

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: NotebookPenIcon,
  fields: [
      defineField(languageField),
      defineField(titleField),
      defineField(slugField),
      defineField(excerptField),
      defineField(coverImageField),
      defineField(contentField),
      defineField(categories),
      defineField(publishedAtField),
      defineField(authorField)
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
