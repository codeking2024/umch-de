import {defineField, defineType} from 'sanity'
import {nameField, bioField} from "../fields/autherField";
import {mainImageField, slugField} from "../fields/generalField";

import {UserPlusIcon} from "lucide-react"

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserPlusIcon,
  fields: [
    defineField(nameField),
    defineField(slugField),
    defineField(mainImageField),
    defineField(bioField),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
