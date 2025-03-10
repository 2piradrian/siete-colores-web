import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Siete Colores`,
    description: `Siete Colores es una empresa de impresión 3D y láser que se dedica a la fabricación de productos para artesanos.`,
    siteUrl: `https://www.sietecolores3d.com.ar`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/ui/images/icon.png",
        name: "Siete Colores",
        short_name: "SieteColores3d",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "static/assets",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "static/data",
      },
    },
  ],
};

export default config;
