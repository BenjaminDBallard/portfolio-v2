import { styled } from "styled-components";
import ThemeSwitch from "./components/ThemeSwitch";
import Logo from "../../assets/logo.svg?react"
import {IoMdClose, IoMdMenu} from "react-icons/io";

export default function Navbar({ handleLinkClick, handleThemeChange }) {
  const pages = ["Home", "About", "Projects", "Experience", "Contact"];
  return (
    <Section>
      <Wrapper>
        <StyledLogo onClick={() => handleLinkClick("home")} />
        <div>
          <ul>
            {pages.map((page) => (
              <li key={page} onClick={() => handleLinkClick(page.toLowerCase())}>
                {page}
              </li>
            ))}
          </ul>
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
  background-color: ${(props) => props.theme.colors.mainbg};
  box-shadow: ${(props) => props.theme.boxShadows.main};
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled(Logo)`
  height: 35px;
  width: 35px;
  cursor: pointer;
  color: ${(props) => props.theme.accent.accentIcon};
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    gap: 30px;
    height: 100%;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    gap: 30px;
    color: ${(props) => props.theme.accent.accentText};
    font-size: 14px;
  }
  li {
    transition: 250ms;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.accent.accentHover};
    }
  }
`;
