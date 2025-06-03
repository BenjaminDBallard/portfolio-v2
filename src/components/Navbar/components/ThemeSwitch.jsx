import { styled } from "styled-components";
import { useState } from "react";
import {Icon} from "@blueprintjs/core";

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
            <StyledIcon icon={checked ? "flash" : "moon"} size={18} />
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
  height: 32px !important;
  width: 70px;
  padding: 4px;
  border-radius: 999px;
  transition: 250ms;
  background-color: ${(props) => props.theme.accent.accentHighlight};
`;
const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
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

const StyledIcon = styled(Icon)`
  fill: #f8f8f8;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: 250ms;
`;
