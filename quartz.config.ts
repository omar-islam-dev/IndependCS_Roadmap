import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",       // Base (Background)
          lightgray: "#e6e9ef",   // Mantle (Borders/Subtle backgrounds)
          gray: "#bcc0cc",        // Surface1 (Metadata/Gray text)
          darkgray: "#4c4f69",    // Text (Body text)
          dark: "#1e1e2e",        // Headers (Darker text)
          secondary: "#1e66f5",   // Blue (Links/Primary)
          tertiary: "#8839ef",    // Mauve (Hover states)
          highlight: "rgba(140, 143, 161, 0.15)", // Text Selection
        },
      
       darkMode: {
      
        light: "#1e1e2e",       // Base (Background)
        lightgray: "#313244",   // Surface0 (Borders)
        gray: "#6c7086",        // Overlay0 (Metadata)
        darkgray: "#cdd6f4",    // Text (Body text)
        dark: "#cdd6f4",        // Headers (Same as text or slightly brighter)
        secondary: "#89b4fa",   // Blue (Links/Primary)
        tertiary: "#cba6f7",    // Mauve (Hover states)
        highlight: "rgba(147, 153, 178, 0.15)", // Text Selection
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
          light: "github-light",
          dark: "github-dark",
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
