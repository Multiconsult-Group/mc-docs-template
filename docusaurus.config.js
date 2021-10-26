const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Multiconsult',
  tagline: 'Multiconsult',
  url: 'https://www.multiconsultgroup.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Multiconsult-Group',
  projectName: 'docs',
  trailingSlash: false,

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'nanos world',
        src: 'src/img/logov2scour.svg',
        href: 'https://nanos.world/'
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'DOCS',
        },
        {
          to: '/blog/',
          label: 'NEWS',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://issues.nanos.world',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'lua',
        'toml',
      ],
    },
    zoomSelector: '.markdown :not(.authority-availability) > img',
    algolia: {
      apiKey: '24fb9bfd0b1d04bc5a3711d5ff6b5411',
      indexName: 'nanos',
      contextualSearch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nanos-world/docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'NIGHTLY',
            },
            latest: {
              label: 'LATEST',
            }
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nanos-world/docs/edit/master/',
          blogTitle: 'Multiconsult news!',
          blogDescription: 'All official news from product X!',
          blogSidebarTitle: 'product X news',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
  ],
  scripts: [
    {
      src: 'https://pac.nanos.io/js/script.js',
      async: true,
      defer: true,
      "data-domain": "docs.nanos.world"
    },
  ]
};
