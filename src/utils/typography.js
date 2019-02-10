import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "html": {
      font: ["'Roboto'", 'serif'].join(', '),
    },

    "body": {
      fontFamily: ["'Roboto'", 'serif'].join(', '),
      lineHeight: "1.5",
      fontSize: "1.1rem",
    },

    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },

    ".gatsby-resp-image-wrapper": {
      marginTop: "1em",
      marginBottom: "1em",
      maxWidth: "100%",
    },

    "h1, h2, h3, h4, h5, h6": {
      marginTop: "1.5em",
      marginBottom: ".5em",
      fontFamily: ["'Roboto'", 'serif'].join(', '),
    },

    "p": {
      marginBottom: "1em",
    },

    "blockquote": {
      fontSize: "1em",
      borderColor: "hsla(0, 0%, 0%, 0.59)",
    },

    "ul, ol": {
      marginLeft: "1.75rem",
    },

    "li": {
      marginBottom: ".5em",
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
