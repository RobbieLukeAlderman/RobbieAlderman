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
  fontSize: "12px",
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
  width: "50%",
  margin: "auto",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const containerStyle = {
  margin: "auto",
  width: "60%",
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
    <div style={containerStyle}>
    <br />
    <br />
    <p style={descriptionStyle}>
      <Link class="navigation" to="https://vimeo.com/730701135">
        Animation Link (Indicia)
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link class="navigation" to="https://github.com/RobbieLukeAlderman">
        Github
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link class="navigation" to="https://www.behance.net/robbbb">
        Behance
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link class="navigation" to="https://www.linkedin.com/in/robbbb/">
        LinkedIn
      </Link> </p>
      <br />
      <p style={descriptionStyle}>Scroll to see some of my work, feel free to get in touch, just let me know what you or your business is looking for!</p>
      <br />
    <Link to="/contact/"><button style={{marginTop: "25px", fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",}}>
      work with me &nbsp;→
    </button></Link>
    <br />
    <Link to="https://www.behance.net/gallery/93662449/GHST-WEB-DESIGN">
      <img class="imgSize" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/85c30d93662449.5e6a46f20155d.png
" style={{marginTop: "25px"}} />
    </Link>
    <br />
  <p class="textAlign" style={captionStyle}>JAPANESE STREET-WEAR<br />
WEB DESIGN AND DEVELOPMENT
TOOLS USED : <br />
[ ADOBE XD , ADOBE PHOTOSHOP , ATOM , GATSBY ]<br />
[ JAVASCRIPT , REACTJS , HTML5 , CSS3 ]<br />
[ <Link class="navigation" to="https://www.behance.net/gallery/93662449/GHST-WEB-DESIGN">LINK TO</Link> ] </p>
    <br />
    <br />
    <Link to="https://www.behance.net/gallery/72178557/SMNLT-Apparel-Design">
      <img class="imgSize" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1204b172178557.5bdf0267d45b4.png" />
    </Link>
    <br />
  <p class="textAlign" style={captionStyle}>SMNLT BRAND IDENTITY<br />
MARKETING - DESIGN - PHOTOGRAPHY - PRINT
KEY POINTS : <br />
[ ADOBE ILLUSTRATOR , ADOBE PHOTOSHOP , LIGHTROOM ]<br />
[ TRAVEL , LIVE , CREATE , PRODUCE ]<br />
[ <Link class="navigation" to="https://www.behance.net/gallery/72178557/SMNLT-Apparel-Design">LINK TO</Link> ] </p>
    <br />
    <br />
    <br />
    <Link to="/"><button style={{fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",}}>
    &nbsp; ↑ &nbsp;
    </button></Link>
    <br /> 
    <br />
    <p style={paragraphStyles}>
      <span class="email" style={{color: "black", fontWeight: 300,}}>
        <a href="mailto:robbielalderman@gmail.com">
          robbielalderman@gmail.com
        </a>
      </span>
      <br />
      <span class="email" style={{color: "black", fontWeight: 300,}}>
        07714 389 907
      </span>
    </p>
    <br />

    <div class="testclass"><p class="testclass">
    &#169; Robbie L Alderman
    </p>
    </div>

    </div>
  </main>

  </Layout>
}
