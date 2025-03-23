import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "German III Wiki",
    pageTitleSuffix: " | wiki.germaniii.com",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "wiki.germaniii.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Noto Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#fbf1c7", // Gruvbox light background
          lightgray: "#ebdbb2", // Lightest grayish tone
          gray: "#d5c4a1", // Soft gray
          darkgray: "#665c54", // Medium dark gray
          dark: "#3c3836", // Dark gray (text color)
          secondary: "#b57614", // Warm yellow-orange accent
          tertiary: "#8ec07c", // Muted green accent
          highlight: "rgba(215, 153, 33, 0.15)", // Gruvbox yellow highlight
          textHighlight: "#fabd2f88", // Soft orange-yellow text highlight
        },
        darkMode: {
          light: "#1d2021", // Gruvbox dark background
          lightgray: "#282828", // Slightly lighter background
          gray: "#504945", // Medium gray
          darkgray: "#bdae93", // Light warm gray
          dark: "#ebdbb2", // Lightest text color
          secondary: "#d65d0e", // Dark mode orange accent
          tertiary: "#689d6a", // Muted green
          highlight: "rgba(250, 189, 47, 0.15)", // Gruvbox orange highlight
          textHighlight: "#fabd2f88", // Text highlight (same as light mode for contrast)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "kanagawa-wave",
          dark: "kanagawa-dragon",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
