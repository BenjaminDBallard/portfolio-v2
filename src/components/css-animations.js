import { keyframes } from 'styled-components';

export const slideDownKeyframe = keyframes`
  0% {
    transform: translateY(-75%);
      opacity: 0;
  }
  100% {
    transform: translateY(0);
      opacity: 1;
  }
`;

export const slideOutKeyframe = keyframes`
    0% {
        transform: translateX(75%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
