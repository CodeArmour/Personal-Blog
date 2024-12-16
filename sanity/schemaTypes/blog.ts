import { title } from "process";

export default {
    name:'blog',
    type:'document',
    title:'Blog',
    fields: [
        {
            name:'title',
            type: 'string',
            title: 'Title of blog artical'
        },
        {
            name:'slug',
            type: 'slug',
            title: 'Slug of your blog artical',
            options: 
                {
                    source:'title'
                }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        {
            name: 'shortDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of: [
                {
                    type:'block'
                }
            ]
        }
    ]
}