import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,body,div,header,form,label,input,button,h1,h2,h3,h4,h5,h6,p,span,a,img,iframe,ul,li,a,span {
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type:none;
  }

  :root {
    /* font-families */
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
    --ff-color-light: #ffffff;
    --body-color:#010814;
    --bg-acrylic:rgba(109, 109, 109, 0.2);
    --ff-color-light-opacity:#ecececb7;
  }
  body {
    background: var(--body-color);
    overflow: hidden; 
    user-select: none;
  }

`;

export default GlobalStyle;
