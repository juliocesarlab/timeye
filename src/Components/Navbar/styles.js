import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  height: 80px;
  background: none;
  padding: 0 2rem;

  @media (max-width: 786px) {
    margin-top: 2rem;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    flex-wrap: wrap;

    @media (max-width: 786px) {
      flex-direction: column;
      align-items: center;
      padding-bottom: 1rem;

      border-bottom: 2px solid var(--cian);
    }

    .logo img {
      width: 120px;
    }

    .options {
      display: flex;
      gap: 1rem;
    }

    .options a {
      color: var(--gray-text);
      text-decoration: none;
    }
  }
`;
