import { defineField, defineType } from 'sanity';

export const testimonials = defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),
        defineField({
            name: 'imageUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
              }
        }),
        defineField({
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }),
    ],
})