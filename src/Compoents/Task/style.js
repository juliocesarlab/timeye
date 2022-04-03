import styled from 'styled-components';

export const TaskBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;

  & + & {
    margin-top: 1rem;
  }

  .main-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.8rem;
      position: relative;
      top: 2px;
      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }
`;
