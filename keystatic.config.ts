import { config, collection, fields } from '@keystatic/core';

export default config({
    storage: {
        kind: 'github',
        repo: 'hhhug000/blog',
    },
    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            entryLayout: 'content',
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
                pubDate: fields.date({
                    label: 'Published Date',
                    defaultValue: { kind: 'today' },
                }),
                updatedDate: fields.date({
                    label: 'Updated Date',
                }),
                heroImage: fields.image({
                    label: 'Hero Image',
                    directory: 'src/assets/images/blog',
                    publicPath: '@assets/images/blog/',
                }),
                author: fields.text({
                    label: 'Author',
                    defaultValue: 'Hugo',
                }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (props) => props.value,
                }),
                content: fields.markdoc({
                    label: 'Content',
                }),
            },
        }),
    },
});