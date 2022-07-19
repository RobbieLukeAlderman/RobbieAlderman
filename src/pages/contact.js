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
// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
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
        Snippets
        </Link>
      </li>
      <li class="navfix" style={descriptionStyle}>
        <Link class="navigationStyle" to="/contact/" style={{fontWeight: "bold"}}>
          Contact
        </Link>
      </li>
    </ul>
    <div style={{containerStyle}}>
      <h2 class="h2pStyle">Contact</h2>
      <p class="p2Style">
        I love connecting and collaborating with like-minded people,
        building a team of creatives and completing a project as a team.
        However, if you are looking for advice, or help with a design project
        don't hesitate to send me a message!<br/><br/>I specialise in Print,
        Infographics, Marketing material, Signage and many more!
      </p>
    <div class="formContainer">
      <form type="text" name="Contact Form" method="POST" data-netlify="true" action="/ty/" class="contactForm">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label htmlFor="email">Email:</label><br/>
          <input type="email" name="email" class="formStyle" placeholder="Your Email..."/>
        </div>
        <br/><br />
        <div>
        <label htmlFor="message ">Message:</label><br/>
          <textarea name="message" class="formStyle" placeholder="Message..." />
        </div>
        <br /><br /><br />
        <button type="submit"
        class="buttonForm"
        style={{float: "left", marginBottom: "35px"}}>
          Send
        </button>
      </form>
    </div>
    <h2 class="h2Style">My Details </h2>
    <p>
      <span class="email"
      style={{color: "black", fontWeight: 300,fontSize: 16,}}>
        <a href="mailto:robbielalderman@gmail.com">
          Rob Alderman <br /> 
          07714 389 907 <br />
          Highbridge, Somerset <br />
          robbielalderman@gmail.com 
        </a>
      </span>
      <br />
      <span class="email"
      style={{color: "black", fontWeight: 300,fontSize: 16,}}>
        <Link class="contLink" to="https://www.linkedin.com/in/robbbb/">
          LinkedIn
        </Link>
        <br /> 
        <Link class="contLink" to="https://github.com/RobbieLukeAlderman">
          Github
        </Link> 
        <br /> 
        <Link class="contLink" to="https://www.behance.net/robbbb">
          Behance
        </Link> 
        <br /> 
        <Link class="contLink" to="https://vimeo.com/user180611419">
          Vimeo
        </Link>
        <br /> 
        <Link class="contLink" to="https://www.instagram.com/rob.design.xvi/">
          Instagram
        </Link>
      </span>
      <br />
    </p>
    <Link to="/">
      <button class="buttonSP"
      style={{fontWeight: 500, letterSpacing: -1, textTransform: "uppercase",}}>
        ← back &nbsp;
      </button>
    </Link>
    <br /> 
    <br />
    <br />

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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
