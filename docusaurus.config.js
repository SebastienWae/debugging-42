// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Debugging 42',
  url: 'https://sebastienwae.github.io',
  tagline: 'Debugging resources for 42',
  baseUrl: '/debugging-42/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sebastienwae',
  projectName: 'debugging-42',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SebastienWae/debugging-42/tree/main/',
          sidebarCollapsed: false
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Debugging 42',
        logo: {
          alt: 'Debugging 42 logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/sebastienwae/debugging-42',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'work_in_progress',
        content: '<b>💬 This website is a work in progress! Feel free to send a PR if you want to contribute.</b>',
        backgroundColor: '#176C6C',
        textColor: '#fff',
        isCloseable: false,
      },
      footer: {
        logo: {
          alt: 'Creative Commons License',
          src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png',
          href: 'http://creativecommons.org/licenses/by-sa/4.0/',
          width: 88,
          height: 31,
        },
        copyright: `built by <a href="https://github.com/SebastienWae" target="_blank">SebastienWae</a> at <a href="https://www.42mulhouse.fr" target="_blank">42Mulhouse</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
