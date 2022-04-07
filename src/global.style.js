import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --box-shadow-card: 10px 10px 25px 1px rgba(0, 0, 0, 0.25);
    --cian: #2AB1B5;
    --gray-text: #373737;
    --danger-red: #F25054;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  .default-container {
    width: 100%;
    padding:  0 2rem;
  }

  h1, h2, h3, 
  input {
    color: var(--gray-text);
  }

  a, button { 
    transition: all 0.3s;
    display: inline-block;
  }

  a:hover, button:hover {
    transform: translateY(-3px);

  }

   @media (max-width: 786px) {
    :root {
      font-size: 0.85rem;
    }
  }
`;
