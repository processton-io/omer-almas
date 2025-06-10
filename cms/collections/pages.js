import seo from '../fields/seo';
import { ID } from '../fields';
import Blocks from '../blocks';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'pages',
  label: 'Pages',
  description: 'Pages for your website',
  folder: 'content/pages/',
  extension: 'json',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    ID,
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    PermalinkField(),
    Blocks,
    seo,
  ],
};

export default collection;
