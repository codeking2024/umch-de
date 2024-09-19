import {defineField, defineType} from 'sanity'
import {descriptionField, titleField} from "../fields/generalField";

import {TagIcon} from 'lucide-react'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField(titleField),
    defineField(descriptionField),
  ],
})
