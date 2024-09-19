

export const languageField = {
    // should match 'languageField' plugin configuration setting, if customized
    name: 'language',
    type: 'string',
    readOnly: true,
    hidden: true,
}

export const titleField = {
    name: 'title',
    title: 'Title',
    type: 'string',
    options: {
        documentInternationalization: {
            exclude: true,
        },
    },
}

export const descriptionField = {
    name: 'description',
    title: 'Description',
    type: 'text',
    options: {
        documentInternationalization: {
            exclude: true,
        },
    },
}

export const slugField ={
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value: any, context: any) => context.defaultIsUnique(value, context),
        documentInternationalization: {
            exclude: true,
        },
    },
    validation: (rule: any) => rule.required(),
}

export const mainImageField= {
    name: 'mainImage',
    title: 'Main Image',
    type: 'image',
    options: {
        hotspot: true,
        documentInternationalization: {
            exclude: true,
        },
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        }
    ]
}

export const logoImageField= {
    name: 'logoImage',
    title: 'Logo Image',
    type: 'image',
    options: {
        hotspot: true,
        documentInternationalization: {
            exclude: true,
        },
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        }
    ]
}

export const urlField ={
    name: 'link',
    title: 'Link',
    type: 'url',
}

export const sortField ={
    name: 'sort',
    title: 'Sort',
    type: 'number',
}