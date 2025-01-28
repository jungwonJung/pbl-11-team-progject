import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #7C90DB;  
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
    background: #7C90DB;
  }

  h1 {
    font-family: 'Itim', cursive; 
    font-size: 3.2em;
    line-height: 1.1;
    text-shadow: 0px 4px 4px rgba(217, 172, 228, 0.85);
    color: black;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    outline: none;
  }


  .styled-button {
    background: #736B92;
    border: 4px solid #000;
    font-size: 48px;
    font-weight: bold;
    color: white;
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
  }

  .styled-button:hover {
    background: #5d5474;
  }
`;

export default GlobalStyles;
