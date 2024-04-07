import { styled } from "styled-components";
import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import bblogo from "../../assets/bblogo.svg";
import HamburgerMenu from "./components/Hamburger";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Navbar({ handleLinkClick, handleThemeChange }) {
  const [open, setOpen] = useState(false);
  const pages = ["home", "about", "work", "contact"];
  return (
    <Section>
      <Wrapper>
        <img src={bblogo} onClick={() => handleLinkClick("home")} />
        <div>
          <ul>
            {pages.map((page) => (
              <li key={page} onClick={() => handleLinkClick(page)}>
                {page}
              </li>
            ))}
          </ul>
          {open && (
            <HamburgerMenu
              handleLinkClick={handleLinkClick}
              open={open}
              setOpen={setOpen}
            />
          )}
          {!open && (
            <div>
              <MenuButton open={open} onClick={() => setOpen(!open)}>
                {!open && <StyledIcon icon="menu" size={30} />}
                {open && <StyledIcon icon="cross" size={30} />}
              </MenuButton>
            </div>
          )}
          <ThemeSwitch handleThemeChange={handleThemeChange} />
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;
  display: flex;
  height: 60px;
  background-color: ${(props) => props.theme.colors.secondbg};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    height: 35px;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    gap: 30px;
    color: ${(props) => props.theme.colors.text.link};
    font-size: 14px;
  }
  li {
    transition: 250ms;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.text.linkHover};
    }
  }
`;

const MenuButton = styled.button`
  border: none;
  display: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text.subtle};
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  &:hover {
    fill: ${(props) => props.theme.colors.text.body};
    cursor: pointer;
  }
`;
