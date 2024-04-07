import { styled } from "styled-components";
import { useState } from "react";
import { Icon } from "@blueprintjs/core";

export default function MobileThemeSwitch({ handleThemeChange }) {
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    setChecked(!checked);
    handleThemeChange(); // Call the handleThemeChange function
  };

  return (
    <Wrapper>
      <MenuButton
        onClick={toggleTheme}
        className={checked ? "checked" : "unchecked"}
      >
        <StyledIcon icon={checked ? "flash" : "moon"} size={30} />
      </MenuButton>
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

const StyledIcon = styled(Icon)`
  fill: #f8f8f8;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: 250ms;
`;

const MenuButton = styled.button`
  border: none;
  display: flex;
  margin: 0px;
  padding: 15px;
  border-radius: 999px;
  background-image: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover ${StyledIcon} {
    fill: ${(props) => props.theme.colors.highlight};
  }
`;
