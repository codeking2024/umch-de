export  const categories = {
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [{type: 'reference', to: {type: 'category'}}],
}