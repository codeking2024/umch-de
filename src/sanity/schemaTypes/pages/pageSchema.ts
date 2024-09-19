// schemas/page.ts
import { defineType, defineField } from 'sanity';
import {LayoutDashboardIcon} from "lucide-react";

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    icon:LayoutDashboardIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        // other fields
    ]
});
