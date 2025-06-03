import { styled } from "styled-components";
import { useState } from "react";

export default function ThemeSwitch({ handleThemeChange }) {
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    setChecked(!checked);
    handleThemeChange(); // Call the handleThemeChange function
  };

  return (
    <Wrapper>
      <Background
        onClick={toggleTheme}
        className={checked ? "checked" : "unchecked"}
      >
        <Toggle>
          <p>{checked ? "LIGHT" : "DARK"}</p>
        </Toggle>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .checked {
    justify-content: right;
  }
  .unchecked {
    justify-content: left;
  }
`;

const Background = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 20px;
  width: 65px;
  padding: 5px;
  border-radius: 999px;
  transition: 250ms;
  background-color: ${(props) => props.theme.accent.accentHighlight};
`;
const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 35px;
  border-radius: 999px;
    transition: 250ms;
  background-color: ${(props) => props.theme.accent.accentIcon};
  p {
    font-size: 8px;
    user-select: none;
    margin: 0;
    color: #f8f8f8;
  }
`;
