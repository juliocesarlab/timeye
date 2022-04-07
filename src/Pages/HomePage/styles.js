import styled from 'styled-components';

export const HomeView = styled.main`
  min-height: calc(100vh - 150px);

  display: flex;
  align-items: center;

  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 786px) {
    flex-wrap: wrap;

    img {
      max-width: 230px;
      justify-self: center;
    }

    .floating-logo {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .apresentation {
    flex: 1;

    h1 {
      font-size: 3rem;
      position: relative;
    }

    h1::before {
      content: '';
      width: 35%;
      height: 5px;
      background: var(--cian);
      position: absolute;
    }

    span {
      color: var(--cian);
    }

    button {
      width: 12rem;
      height: 2rem;

      font-size: 1.2rem;

      background: 0;
      margin-top: 2.5rem;

      border: 1px solid var(--cian);
      border-radius: 1rem;

      cursor: pointer;

      &:hover {
        background: var(--cian);
        color: #fff;
      }
    }
  }

  .floating-logo {
    @keyframes floatMove {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
      }
    }
    animation: floatMove 5s infinite;
  }
`;
