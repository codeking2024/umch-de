export const publishedAtField = {
    name: 'publishedAt',
    title: 'Published at',
    type: 'datetime',
    initialValue: () => new Date().toISOString()
}

export const contentField = {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
        { type: 'block' },
        {
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Image caption',
                    description: 'Caption displayed below the image.',
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                },
            ],
        },
    ],
}

export const coverImageField= {
    name: 'coverImage',
    title: 'Cover Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        }
    ]
}


export const excerptField = {
    name: 'excerpt',
    title: 'Excerpt',
    type: 'text',
}