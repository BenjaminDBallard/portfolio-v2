import { styled } from "styled-components";
import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import HamburgerMenu from "./components/Hamburger";

export default function MobileNavbar({ handleLinkClick, handleThemeChange }) {
  const [open, setOpen] = useState(false);
  return (
    <Section>
      <Wrapper>
        <div>
          {open && (
            <div>
              <HamburgerMenu
                handleLinkClick={handleLinkClick}
                handleThemeChange={handleThemeChange}
                open={open}
                setOpen={setOpen}
              />
              <MenuButton open={open} onClick={() => setOpen(!open)}>
                <StyledIcon icon="cross" size={30} />
              </MenuButton>
            </div>
          )}
          {!open && (
            <MenuButton open={open} onClick={() => setOpen(!open)}>
              <StyledIcon icon="menu" size={30} />
            </MenuButton>
          )}
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Wrapper = styled.div``;

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
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 5;
  border: none;
  display: flex;
  margin: 1px 5px;
  padding: 15px;
  border-radius: 999px;
  background-image: ${(props) => props.theme.accent.accentButton};
  cursor: pointer;
    transition: 250ms;
    &:hover {
        transform: scale(1.1);
        transition: 0.2s;
    }
    &:active {
        transform: scale(0.7);
        transition: 0.1s;
    }
`;
