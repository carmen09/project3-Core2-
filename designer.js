:root {
    --base: #f7392b;
    --bg-blend: multiply;
    --blur: 0px;
    --fg-blend: lighten;
    --foreground: #16006f;
    --opacity: 1;
    --spacing: 1%;
  }
  body {
    background: url(./assets/homepage.gif) no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
  }
  @font-face {
    font-family: "zerovelo.ttf";
    src: url(/assets/zero/zerovelo.ttf);
  }
  .menu {
    color: lawngreen;
    margin-top: 80px;
    overflow: hidden;
    font-family: "zerovelo.ttf";
    text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
  }
  .menu a {
    color: #b91567;
    text-align: center;
    padding: 10px 26px;
    text-decoration: none;
    font-size: 80px;
    font-stretch: 100%;
  }
  /* Change the color of links on hover */
  .menu a:hover {
    background-color: #fafa37;
    color: black;
  }
  .menu a.active {
    color: purple;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .art-container {
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid wheat;
    border-radius: 25px;
    background-color: var(--base);
    display: flex;
    /* flex:                1 1 100%; */
    /* height:              100%; */
    overflow: hidden;
    padding: var(--spacing);
    position: relative;
  }
  .art-container::before {
    background-color: var(--foreground);
    bottom: 0;
    content: "";
    /* height:              100%; */
    left: 0;
    mix-blend-mode: var(--fg-blend);
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .art-image {
    object-fit: contain;
    width: 100%;
    height: 300px;
    filter: grayscale(100%) contrast(1) blur(0);
    flex: 1 0 100%;
    max-width: 100%;
    mix-blend-mode: var(--bg-blend);
    opacity: var(--opacity);
    position: relative;
    width: 100%;
  }