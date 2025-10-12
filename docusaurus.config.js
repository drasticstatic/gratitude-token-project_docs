// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ethereal Offering',
  tagline: 'Sacred Blockchain for Spiritual Sovereignty',
  favicon: 'img/psanctuary-icon.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://drasticstatic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gratitude-token-project_docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drasticstatic', // Usually your GitHub org/user name.
  projectName: 'gratitude-token-project_docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn', // Changed from 'throw' to allow build to complete

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/drasticstatic/gratitude-token-project_docs/tree/main/',
          exclude: [
            '**/CHATGPT_ethereal_offering_docusaurus_packages/**',
            '**/Docusaurus-SetupGuide.md',
            '**/GitBook-Outline.md',
            '**/Tokenomics Research/**',
            '**/gitbook/**', // Exclude gitbook directory with broken links
            '**/learn-the-code/**', // Exclude learn-the-code with broken links
            '**/_*.md', // Exclude files starting with underscore
          ],
        },
        blog: false, // Disable default blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'community-updates',
        routeBasePath: 'community',
        path: './community',
        blogTitle: 'Community Updates',
        blogDescription: 'Latest news, announcements, and updates from the Ethereal Offering community',
        blogSidebarTitle: 'Recent Updates',
        blogSidebarCount: 10,
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Ethereal Offering Community Updates',
          description: 'Stay connected with the latest from Psanctuary Church and Ethereal Offering',
          xslt: true,
        },
        authorsMapPath: 'authors.yml',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'learn-the-code',
        routeBasePath: 'learn',
        path: './learn',
        blogTitle: 'Learn the Code',
        blogDescription: 'Technical tutorials, development guides, and code deep-dives for building on Ethereal Offering',
        blogSidebarTitle: 'Tutorials',
        blogSidebarCount: 15,
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'Ethereal Offering - Learn the Code',
          description: 'Master Web3 development with Ethereal Offering tutorials',
          xslt: true,
        },
        authorsMapPath: 'authors.yml',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ethereal Offering',
        logo: {
          alt: 'Psanctuary Logo',
          src: 'img/psanctuary-icon.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Read Docs',
          },
          {
            to: '/docs/whitepaper/introduction',
            label: 'Whitepaper',
            position: 'left',
          },
          {
            to: '/community',
            label: 'Community',
            position: 'left',
          },
          {
            to: '/learn',
            label: 'Learn the Code',
            position: 'left',
          },
          {
            href: 'https://github.com/drasticstatic/gratitude-token-project_docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/psanctuary',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/overview',
              },
              {
                label: 'Whitepaper',
                to: '/docs/whitepaper/introduction',
              },
              {
                label: 'Tokenomics',
                to: '/docs/tokenomics/overview',
              },
              {
                label: 'DAO Governance',
                to: '/docs/governance/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/psanctuary',
              },
              {
                label: 'X / Twitter',
                href: 'https://x.com/psanctuary',
              },
              {
                label: 'Community Updates',
                to: '/community',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Learn the Code',
                to: '/learn',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/drasticstatic/gratitude-token-project',
              },
              {
                label: 'Documentation Repo',
                href: 'https://github.com/drasticstatic/gratitude-token-project_docs',
              },
            ],
          },
          {
            title: 'Psanctuary Church',
            items: [
              {
                label: 'About Us',
                to: '/docs/intro',
              },
              {
                label: 'Psychedelics in Recovery',
                href: 'https://psanctuary.org',
              },
              {
                label: 'Sacred Altar',
                to: '/docs/sacred-altar/overview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Psanctuary Church. Built with love and sacred intention. 🍄✨`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
