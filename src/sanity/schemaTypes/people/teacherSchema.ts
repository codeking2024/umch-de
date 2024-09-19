import {defineType, defineField} from 'sanity'
import {Users2Icon} from 'lucide-react'

export default defineType({
    title: 'Teachers',
    name: 'teachers',
    type: 'document',
    icon: Users2Icon,
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