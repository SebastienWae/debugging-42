// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Debugging 42',
  tagline: 'Dinosaurs are cool',
  url: 'https://sebastienwae.github.io/42-debugging',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sebastienwae',
  projectName: '42-debugging',
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
          editUrl: 'https://github.com/SebastienWae/42-debugging/main/',
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
      navbar: {
        title: 'Debugging@42',
        logo: {
          alt: 'Dubuggers@42 logo',
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
