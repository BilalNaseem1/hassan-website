import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '550db9400dcb4ae6b6cf480097a046c4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Next.js Notion Starter Kit',
  domain: 'https://efficacious-raptor-ff2.notion.site/Sample-Website-550db9400dcb4ae6b6cf480097a046c4?pvs=4',
  author: 'Bilal Naseem',

  // open graph metadata (optional)
  // description: 'Example Next.js Notion Starter Kit Site',
  description: 'Bilal Naseems site',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'BilalNaseem1',
  linkedin: 'bilalnaseem96',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages

  // navigationStyle: 'default'

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Projects',
      pageId: '550db9400dcb4ae6b6cf480097a046c4'
    },
    
    {
      title: 'About',
      pageId: '93d73bef73b344529678bc478e21c649'
    },
    {
      title: 'Contact',
      pageId: '58c29615deaa4f6e8ea9f2f81edaa8f3'
    },
    {
      title: 'Notes',
      pageId: '77ee989e28f3493e8e9ac43e17d1710a'
    }
  ]
})
