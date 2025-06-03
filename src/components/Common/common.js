import styled from "styled-components";

export const CommonButton = styled.button`
  background-image: ${(props) => props.theme.accent.accentButton};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  padding: 12px;
  transition: 250ms;
  box-shadow: ${(props) => props.theme.boxShadows.main};
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  &:active {
      box-shadow: none;
    transform: scale(0.7);
    transition: 0.1s;
  }
`;

export const CommonBackground = styled.div`
  width: 100%;
  padding: 50px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  box-shadow: ${(props) => props.theme.boxShadows.main};
  background-image: ${(props) => props.theme.accent.accentBackground};
  z-index: 0;
`
export const CommonTitle = styled.h1`
  text-align: center;
    width: 100%;
  font-weight: 800;
  font-size: calc(100% + 7px + 0.9vw * 0.42);
  color: ${(props) => props.theme.accent.accentText};
  z-index: 2;
`;
