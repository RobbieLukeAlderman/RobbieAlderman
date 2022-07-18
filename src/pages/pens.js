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
// NOT IN USE
// const headingAccentStyles = {  /* Subtitle */
//   color: "#88838B",
//   fontWeight: 100,
//   fontSize: 16,
// }
const paragraphStyles = {
  marginBottom: 4,
  fontSize: 14,
}

// STYLE NOT IN USE
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }


// STYLE NOT IN USE
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }

// STYLE NOT IN USE 
// const listItemStyles = {
//   fontWeight: "300",
//   fontSize: "24px",
//   maxWidth: "560px",
// }

// NOT IN USE
// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: "16px",
//   verticalAlign: "5%",
// }

// NOT IN USE
// const captionStyle = {
//   color: "#666666",
//   fontSize: "14px",
//   margin: "auto",
//   minWidth: "90%",
//   maxWidth: "50%",
// }

// NOT IN USE
// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

const descriptionStyle = {
  color: "#232129",
  fontSize: "16px",
  marginTop: "30px",
  minWidth: "85%",
  maxWidth: "85%",
  margin: "auto",
}

// STYLE NOT IN USE
// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }

const containerStyle = {
  margin: "auto",
  width: "75%",
  display: "table",
}
// markup

export default function Home() {
  return <Layout>

<main style={pageStyles}>
    <title>Contact - Rob</title>
    <h1 style={headingStyles}>
      <Link to="/">
        &nbsp; r. &nbsp;
      </Link>
    </h1>
    <br />
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
        <Link class="navigationStyle" to="https://www.linkedin.com/in/robbbb/">
          LinkedIn
        </Link>
      </li>
      <li class="navfix" style={descriptionStyle}>
        <Link class="navigationStyle" to="/pens/">
          Pens
        </Link>
      </li>
      <li class="navfix" style={descriptionStyle}>
        <Link class="navigationStyle" to="/contact/" style={{fontWeight: "bold"}}>
          Contact
        </Link>
      </li>
    </ul>
    <div style={{containerStyle}}>
      <h2 class="h2pEmbedStyle"><Link to ="https://jsfiddle.net/winfish/s2u96kt7/9/" class="linkTitle">Clock ( JS )</Link></h2>
      <p class="p2Style">
        Simple clock with JAVASCRIPT, HTML5 & CSS - Created thanks to <Link class="linkQuote" to="https://www.geeksforgeeks.org/how-to-design-digital-clock-using-javascript/">GeeksforGeeks</Link> tutorial. 
      </p>
      <br />
      <iframe 
        title="Simple Javascript Clock"
        class="embedCodeStyle"
        src="//jsfiddle.net/winfish/s2u96kt7/6/embedded/js,result"
        allowfullscreen="allowfullscreen"
        allowpaymentrequest frameborder="0">
      </iframe>
      <br /> <br /> <br />
      <h2 class="h2pEmbedStyle">
        <Link to="https://jsfiddle.net/winfish/3e9uz4vd/2/" class="linkTitle">Stopwatch(JS)</Link></h2>
      <p class="p2Style">
        Simple stopwatch with JAVASCRIPT, HTML5 & CSS. I am still learning javascript, this was completed following a tutorial I have since lost the link to.
      </p>
      <br />
      <iframe
        class="embedCodeStyle"
        title="Simple Javascript Stopwatch"
        src="//jsfiddle.net/winfish/3e9uz4vd/1/embedded/js,result"
        allowfullscreen="allowfullscreen"
        allowpaymentrequest frameborder="0">
      </iframe>
      <br /><br />
    <Link to="/">
      <button class="buttonSP"
      style={{fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",}}>
        ← back &nbsp;
      </button>
    </Link>
    <br /> 
    <br />
    <br />
    <div class="footer">
      <p> &#169; Robbie L Alderman</p>
      <p style={paragraphStyles}>
      <span class="contact"
      style={{fontWeight: 300,}}>
        <a href="mailto:robbielalderman@gmail.com">
          robbielalderman@gmail.com
        </a>
      </span>
      <br />
      <span class="contact"
      style={{fontWeight: 300,}}>
        07714 389 907
      </span>
      </p>
    </div>
    </div>
  </main>

  </Layout>
}

