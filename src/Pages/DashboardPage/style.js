import styled from 'styled-components';

export const DashboardView = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .dashboard-heading {
    margin-bottom: 2rem;

    .tasks-header {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-top: 2rem;
    }
  }

  .no-tasks {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;

    img {
      max-width: 150px;
      align-self: center;
    }
  }
`;

export const CreateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 10vh;
  max-width: 900px;
  margin: 2rem auto;

  .input-area {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    height: 40px;

    gap: 1rem;

    input {
      width: 100%;
      height: 100%;
      max-width: 280px;

      font-size: 1.2rem;

      padding: 0.5rem;

      border-radius: 0.5rem;
      border: 1px solid var(--cian);
    }

    span {
      font-size: 2rem;
      cursor: pointer;
      color: var(--cian);
      transition: all 0.3s;
    }

    span:hover {
      transform: translateY(-3px);
      filter: brightness(0.8);
    }
  }
`;
