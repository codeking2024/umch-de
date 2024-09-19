import {defineType, defineField} from 'sanity'

export default defineType({
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
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