import { Title, Content, VariantField, Description } from '../fields';


const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero Slider',
      name: 'hero_slider',
      widget: 'object',
      allow_add: true,
      collapsed: true,
      fields: [
        {
          label: 'Group',
          name: 'group',
          widget: 'string',
          required: true,
          default: 'homepage'
        }
      ]
    },
    {
      label: 'Services Grid',
      name: 'services_grid',
      widget: 'object',
      fields: [
        Title,
        Description
      ],
    },
    {
      label: 'Contact Form',
      name: 'contact_form',
      widget: 'object',
      fields: [
        Title,
        {
          label: 'Address',
          name: 'address',
          widget: 'text',
          required: true,
        },
        {
          label: 'Contact Number',
          name: 'contact_number',
          widget: 'text',
          required: true,
        },
        {
          label: 'Email address',
          name: 'email_address',
          widget: 'text',
          required: true,
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'text',
          required: true,
        }
      ],
    },
    // {
    //   label: 'Heading',
    //   name: 'heading',
    //   widget: 'object',
    //   summary: '{{fields.content}}',
    //   fields: [
    //     VariantField('h1', ['h1','h2','h3','h4','h5','h6']),
    //     Content
    //   ],
    // },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      summary: 'Content {{fields.content}}',
      fields: [
        VariantField('left-hand', ['left-hand','right-hand','centered']),
        Content,
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Content,
          ],
        }
      ],
    },
  ],
};

export default Config;
