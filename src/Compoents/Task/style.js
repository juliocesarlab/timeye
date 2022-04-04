import styled from 'styled-components';

export const TaskBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--cian);

  height: 60px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 0 2rem;

  @keyframes removeToRight {
    100% {
      transform: translateX(9999px);
    }
  }

  &.delete-animate {
    animation: removeToRight 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
  }

  & + & {
    margin-top: 1rem;
  }

  

    input {
      border: 0;
      text-align: center;
      font-size: 1.2rem;
      width: 12ch;
      cursor: text;
    }

    input.sample-input {
      max-width: 2rem;
    }

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

    .clock {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      position: relative;
      left: -2.5rem;
    }

    .timer span {
      font-size: 1.2rem;
    }
   
  }

  .options {
    transition: all 0.3s;
    position: relative;
    left: -4.5rem;

    .delete-btn {
      color: var(--danger-red);
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    &:hover {
      transform: translateY(-3px);
    }
`;
