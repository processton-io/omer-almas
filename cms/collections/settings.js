import navigationField from '../fields/navigation-field';
import {SocialField} from '../fields/social-field';
import { Title, Description, ImageField } from '../fields';

const collection = {
  name: 'settings',
  label: 'Settings',
  description: 'Settings for theme',
  files: [
    {
      label: 'General',
      name: 'general',
      file: 'src/settings/main.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        ImageField()],
    },
    {
      label: 'Header Settings',
      name: 'header',
      file: 'src/settings/header.json',
      editor: {
        preview: false,
      },
      fields: [
        navigationField(),
      ],
    },
    {
      label: 'Footer Settings',
      name: 'footer',
      file: 'src/settings/footer.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        Description,
        ImageField(),
        {
          label: 'Section 1 Title',
          name: 'section_1_title',
          widget: 'string',
          required: false,
        },
        navigationField('Section 1 Links', 'section_1_links'),
        {
          label: 'Section 2 Title',
          name: 'section_2_title',
          widget: 'string',
          required: false,
        },
        navigationField('Section 2 Links', 'section_2_links'),
        {
          label: 'Section 3 Title',
          name: 'section_3_title',
          widget: 'string',
          required: false,
        },
        navigationField('Section 3 Links', 'section_3_links'),
        {
          label: 'Enable Social Links',
          name: 'show_social_links',
          widget: 'boolean',
          required: false,
        },
        SocialField('Social Links','social_links'),
        {
          label: 'Copyright text',
          name: 'copyright',
          widget: 'text',
          required: false,
        },
      ],
    },
    {
      label: 'Site Metadata & SEO Settings',
      name: 'seo',
      file: 'src/settings/seo.json',
      summary: 'Change basic SEO configuration and site meta like URL',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Base title',
          name: 'baseTitle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Separator',
          name: 'separator',
          widget: 'string',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Language Code',
          name: 'lang',
          widget: 'string',
          required: false,
        },
        {
          label: 'Keywords',
          name: 'keyword',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Twitter Handle',
          name: 'twitterHandle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Theme Color',
          name: 'themeColor',
          widget: 'color',
          required: false,
        },
      ],
    },
  ],
};

export default collection;