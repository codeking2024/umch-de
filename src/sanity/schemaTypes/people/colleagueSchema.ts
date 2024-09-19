import {defineType, defineField} from 'sanity'
import {UsersIcon} from 'lucide-react'
export default defineType({
    title: 'Colleagues',
    name: 'colleagues',
    type: 'document',
    icon: UsersIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Site Description',
            type: 'text'
        })
    ]
})