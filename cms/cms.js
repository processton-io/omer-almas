import CMS from 'decap-cms-app';
import { Widget as UuidWidget } from 'netlify-cms-widget-id';
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink';

import pages from './collections/pages';
import PagePreview from './previews/Page';
import settings from './collections/settings';

window.CMS_MANUAL_INIT = true;

const config = {
  config: {
    load_config_file: true,
    display_url: process.env.GATSBY_APP_URL,
    local_backend: false,
    backend: {
      name: 'git-gateway',
      branch: 'main',
      local_backend: true
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/images',
    public_folder: '/images',
    collections: [ pages, settings ],
  },
};

CMS.registerPreviewStyle('../commons.css');
CMS.registerPreviewTemplate('pages', PagePreview);


CMS.registerWidget(UuidWidget);
CMS.registerWidget(PermalinkWidget);

CMS.init(config);
