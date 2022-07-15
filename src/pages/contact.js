import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {  /* Title */
  marginTop: 0,
  maxWidth: 320,
  color: "white",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  letterSpacing: -5,
}
const headingAccentStyles = {  /* Subtitle */
  color: "#88838B",
  fontWeight: 100,
  fontSize: 16,
}

const paragraphStyles = {
  marginBottom: 4,
  fontSize: 14,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}


// markup

export default function Home() {
  return <Layout>

  <main style={pageStyles}>
    <title>Rob - home</title>
    <h1 style={headingStyles}>
    <Link to="/">&nbsp;r.&nbsp;</Link>
    </h1>
    <br />
    
  
    

    <div>
    <p style={paragraphStyles}>
       <span class="email" style={{color: "black", fontWeight: 300,fontSize: 20,}}>
          <a href="mailto:robbielalderman@gmail.com">
            robbielalderman@gmail.com
          </a>
        </span>
        <br />
        <span class="email" style={{color: "black", fontWeight: 300,fontSize: 20,}}>
        07714 389 907
        </span>
        <br />
    </p>
    <Link to="/"><button class="buttonSP" style={{fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",}}>
   ← back &nbsp;
    </button></Link>
      <br /> 
      <br />
    </div>
  </main>

  </Layout>
}
