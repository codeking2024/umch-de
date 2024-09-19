
export const nameField = {
    name: 'name',
    title: 'Name',
    type: 'string',
}

export const bioField = {
    name: 'bio',
    title: 'Bio',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
        },
    ]
}

export const authorField = {
    name: 'author',
    title: 'Author',
    type: 'reference',
    to: {type: 'author'},
}