import * as React from "react"
import mainLogo from "../images/icon.png"
import GHST from "../images/ghst-responsive-web-design-behance-robbbb-robbie-alderman.png"
import DR from "../images/garment-clothing-dead-roses-print-design-robbbb-robbie-alderman.png"
import LAP from "../images/Visual-identity-LAP-roof-repair-mockup-process-robbbb-robbie-alderman.png"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {  /* Title */
  marginTop: 0,
  maxWidth: 320,
  color: "#000000",
}
const headingAccentStyles = {  /* Subtitle */
  color: "#88838B",
  fontWeight: 100,
  fontSize: 16,
}

const paragraphStyles = {
  marginBottom: 48,
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
      Robbie Alderman
    <br />
    <p class="shortDesc">
      Visual Identity
      &nbsp;
      <span class="divide">|</span>
      &nbsp;
      Keynotes
      &nbsp;
      <span class="divide">|</span>
      &nbsp;
      Infographics
      &nbsp;
      <span class="divide">|</span>
      &nbsp;
      UI Design
      &nbsp;
      <span class="divide">|</span>
      &nbsp;
      Print
      &nbsp;
      <span class="divide">|</span>
      &nbsp;
      Illustration
      &nbsp;
    </p>
    </h1>
    <p style={paragraphStyles}>
      <span class="email">
        <a href="mailto:robbielalderman@gmail.com">
          robbielalderman@gmail.com
        </a>
      </span>
      <br />
      <span class="socialLink" id="linkOrange">
        <a href="https://www.behance.net/robbbb">
          Behance
        </a>
      </span>
      &nbsp;&nbsp; ⎯ &nbsp;&nbsp;
      <span class="socialLink" id="linkRed">
        <a href="https://www.instagram.com/rob.xvi/">
          Instagram
        </a>
      </span>
    </p>
    <div class="panel">
    <a href="https://www.behance.net/gallery/93662449/GHST-WEB-DESIGN">
      <img
        class="preView"
        alt="preview work #1"
        src={GHST}
      />
    </a>
    <a href="https://www.behance.net/gallery/72178557/SMNLT-Apparel-Design">
      <img
        class="preView"
        alt="preview work #1"
        src={DR}
      />
    </a>
    </div>

    <div class="panel">
    <a href="https://www.behance.net/gallery/89631845/LAP-Roof-Repair-Design-Build">
      <img
        class="preView"
        alt="preview work #1"
        src={LAP}
      />
    </a>
    <img
      class="preView"
      alt="preview work #1"
      src={LAP}
    />
    </div>
    <div>
    <img
      class="robLogo"
      alt="designbyrob Logo - Robbie Alderman"
      src={mainLogo}
    />
    <br />
    <p style={paragraphStyles}>
      <span class="email" style={{color: "lightgrey", fontWeight: 300,}}>
        robbielalderman@gmail.com
      </span>
      <br />
      <span class="email" style={{color: "lightgrey", fontWeight: 300,}}>
        07714 389 907
      </span>
      <br />
      <span class="email" style={{color: "lightgrey", fontWeight: 300,}}>
        Highbridge, Somerset
      </span>
    </p>
    </div>
  </main>

  </Layout>
}
