// schemas/homePage.ts
import { defineType, defineField } from 'sanity';
import {HomeIcon} from 'lucide-react'

export default defineType({
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    icon: HomeIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        // other fields
    ]
});
