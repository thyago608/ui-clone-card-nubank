import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    min-height: 100vh;

    background: #1c1c25;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins', sans-serif;
  }
`;
