import { Global, css } from "@emotion/react"

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  body {
    background-image: url("images/background.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    min-height: 100%;
    background: rgba(29, 32, 45, 0.3);
  }
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
