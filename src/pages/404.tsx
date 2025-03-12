import * as React from "react"
import { Link, PageProps } from "gatsby"
import { SEO } from "../ui/components/seo/seo"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Página no encontrada</h1>
      <p style={paragraphStyles}>
        Lo sentimos
        <br />
        <br />
        <Link to="/">Inicio</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <SEO />
);
