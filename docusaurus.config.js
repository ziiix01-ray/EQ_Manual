// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BML設備說明書',
  tagline: '三菱 Q 系列 PLC 與 變頻器技術文庫',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ziiix01-ray.github.io',
  baseUrl: '/EQ_Manual/',

  organizationName: 'ziiix01-ray',
  projectName: 'EQ_Manual',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ziiix01-ray/EQ_Manual/tree/main/',
        },
        // 修正處：直接設定為 false，並刪除後方多餘的大括號與設定
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ray文庫',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
           type: 'docSidebar',
           sidebarId: 'plcSidebar',      // 指向剛才定義的 plcSidebar
           position: 'left',
           label: 'PLC說明書',
          },
          // --- 插入 MCU 說明書 ---
          {
           type: 'docSidebar',
           sidebarId: 'mcuSidebar',
           position: 'left',
           label: 'MCU說明書',
          },
          // -----------------------
          {
           type: 'docSidebar',           // 修改這裡：從 'to' 改成 'docSidebar'
           sidebarId: 'inverterSidebar', // 指向剛才定義的 inverterSidebar
           position: 'left',
           label: '變頻器說明書',
          },
          {
           href: 'https://github.com/ziiix01-ray/EQ_Manual',
           label: 'GitHub',
           position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ziiix01-ray/EQ_Manual',
              },
              // 修正處：移除 Footer 裡的 Blog 連結
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ray文庫, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;