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

const captionStyle = {
  color: "#666666",
  fontSize: "14px",
  margin: "auto",
  minWidth: "90%",
  maxWidth: "50%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "16px",
  marginTop: "30px",
  minWidth: "85%",
  maxWidth: "85%",
  margin: "auto",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const containerStyle = {
  margin: "auto",
  width: "75%",
  display: "table",
}

// markup

export default function Home() {
  return <Layout>

  <main style={pageStyles}>
    <title>Thank you! - Rob</title>
    <h1 style={headingStyles}>
    <Link to="/">&nbsp; r. &nbsp;</Link>
    </h1>
    <br />
    <div style={containerStyle}>
    <br />
    <br />
    <ul class="navBar">
    <li class="navfix" style={descriptionStyle}>
      <Link class="navigationStyle" to="https://vimeo.com/730701135">
      Animation Link (Indicia)
      </Link>
    </li>
    <li class="navfix" style={descriptionStyle}>
      <Link class="navigationStyle" to="https://github.com/RobbieLukeAlderman">
      Github
      </Link>
    </li>
    <li class="navfix" style={descriptionStyle}>
      <Link class="navigationStyle" to="/contact/">
      Contact
      </Link>
    </li>
    <li class="navfix" style={descriptionStyle}>
      <Link class="navigationStyle" to="https://www.linkedin.com/in/robbbb/">
      LinkedIn
      </Link>
    </li>
    </ul>

  <h3 class="h3Style"> Thank you!</h3>
  <h4 style={{marginTop: "-70px",marginBottom: "65px",fontWeight: "normal"}}> Your message has been sent! </h4>

    <Link to="/">
      <button style={{fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",marginBottom: "40px"}}>
        &nbsp;  ← Back Home &nbsp;
      </button>
    </Link>
     
    <div class="footer">
      <p> &#169; Robbie L Alderman</p>
      <p style={paragraphStyles}>
      <span class="contact" style={{fontWeight: 300,}}>
        <a href="mailto:robbielalderman@gmail.com">
          robbielalderman@gmail.com
        </a>
      </span>
      <br />
      <span class="contact" style={{fontWeight: 300,}}>
        07714 389 907
      </span>
    </p>
    </div>

    </div>
  </main>

  </Layout>
}
