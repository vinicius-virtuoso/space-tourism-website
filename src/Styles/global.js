import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,body,div,header,form,label,input,button,h1,h2,h3,h4,h5,h6,p,span,a,img,iframe,ul,a,span {
    margin:0;
    padding:0;
    box-sizing:border-box;
    
  }

  :root {
    /* font-families */
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
  }

`;

export default GlobalStyle;
