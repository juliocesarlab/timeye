import styled from 'styled-components'

export const UserForm = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  background: var(--cian);

  .card {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    width: 100%;
    max-width: 350px;
    height: 450px;

    box-shadow: var(--box-shadow-card);
    background: #fff;

    border-radius: 1rem;
  }

  .card-heading{}

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .input-control {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        color: var(--cian);
        font-weight: 600;

        margin-bottom: 1rem;
      }

      input {
        height: 2rem;

        border: 1px solid var(--cian);
        border-radius: 0.5rem;
        padding-left: 0.5rem;

        font-size: 1rem;
 
      }

    }
    button {
      font-size: 1.05rem;
      color: #fff;
      border: 0;
      
      background: var(--cian);
      height: 2rem;

      margin-top: 1.5rem;
      border-radius: 0.5rem;

      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.75);
      }
    }
  }
`