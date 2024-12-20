import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Metive Docs",
    tagline: "Metive, the AI-powered motion capture platform",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://www.metive.app",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "metive", // Usually your GitHub org/user name.
    projectName: "Metive", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en", "ja", "ko"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl: "https://github.com/ai-qntbd-qktbd/dryice-docs/tree/main/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    editUrl: "https://github.com/ai-qntbd-qktbd/dryice-docs/tree/main/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
                sitemap: {
                    lastmod: "date",
                    changefreq: "weekly",
                    priority: 0.5,
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
    // Replace with your project's social card
        image: "img/logo.png",
        navbar: {
            title: "Metive Docs",
            logo: {
                alt: "Metive Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Tutorial",
                },
                {to: "/blog", label: "Blog", position: "left"},
                {
                    href: "https://www.metive.app/editor",
                    label: "Launch Editor",
                    position: "right",
                },        
                {
                    type: "localeDropdown",
                    position: "right",
                },
                // {
                //     href: "https://github.com/facebook/docusaurus",
                //     label: "GitHub",
                //     position: "right",
                // },
            ],
        },
        footer: {
            // links: [
            //     {
            //         title: "Docs",
            //         items: [
            //             {
            //                 label: "Tutorial",
            //                 to: "/docs/intro",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Community",
            //         items: [
            //             {
            //                 label: "Stack Overflow",
            //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //             },
            //             {
            //                 label: "Discord",
            //                 href: "https://discordapp.com/invite/docusaurus",
            //             },
            //             {
            //                 label: "Twitter",
            //                 href: "https://twitter.com/docusaurus",
            //             },
            //         ],
            //     },
            //     {
            //         title: "More",
            //         items: [
            //             {
            //                 label: "Blog",
            //                 to: "/blog",
            //             },
            //             {
            //                 label: "GitHub",
            //                 href: "https://github.com/facebook/docusaurus",
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Metive, Org. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
