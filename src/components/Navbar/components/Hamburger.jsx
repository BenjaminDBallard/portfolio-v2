import styled from "styled-components";
import MobileThemeSwitch from "./MobileThemeSwitch";

const HamburgerMenu = ({ handleLinkClick, handleThemeChange, open }) => {
  const pages = ["home", "about", "projects", "work", "contact"];

  return (
    <Wrapper>
      <Menu open={open}>
        <div>
          <ul>
            {pages.map((page) => (
              <li key={page}>
                <NavButton onClick={() => handleLinkClick(page)}>
                  {page}
                </NavButton>
              </li>
            ))}
            <li>
              <MobileThemeSwitch handleThemeChange={handleThemeChange} />
            </li>
          </ul>
        </div>
      </Menu>
    </Wrapper>
  );
};
export default HamburgerMenu;

const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  display: flex;
  bottom: 95px;
  right: 14px;
`;

const Menu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 5;
  div {
    margin: 0px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 10px;
    width: 100%;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 0px 0;
  }
`;

const NavButton = styled.button`
  background-image: ${(props) => props.theme.colors.primary};
  color: #f8f8f8;
  margin: 0px 0;
  width: 80px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  padding: 12px;
  transition: 250ms;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;
