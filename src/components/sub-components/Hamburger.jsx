import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

const HamburgerMenu = ({ handleLinkClick, open, setOpen }) => {
  return (
    <Wrapper>
      <SubWrapper>
        <Menu open={open}>
          <div>
            <ul>
              <li>
                <NavButton onClick={() => handleLinkClick("home")}>
                  Home
                </NavButton>
              </li>
              <li>
                <NavButton onClick={() => handleLinkClick("about")}>
                  About
                </NavButton>
              </li>
              <li>
                <NavButton onClick={() => handleLinkClick("work")}>
                  Work
                </NavButton>
              </li>
              <li>
                <Button onClick={() => handleLinkClick("contact")}>
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          <MenuButton open={open} onClick={() => setOpen(!open)}>
            {!open && <StyledIcon icon="menu" size={30} />}
            {open && <StyledIcon icon="cross" size={30} />}
          </MenuButton>
        </Menu>
      </SubWrapper>
    </Wrapper>
  );
};
export default HamburgerMenu;

const Wrapper = styled.div`
  width: 1720px;
  position: absolute;
  display: flex;
  /* justify-content: center; */
  top: 0;
  right: 0;
  @media only screen and (max-width: 1720px) {
    width: 100%;
  }
`;

const SubWrapper = styled.div`
  max-width: 1720px;
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 700px) {
    margin: 0 !important;
  }
`;

const Menu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: space-between;
  background-color: rgb(119, 135, 249);
  border: 1px solid #333338;
  border-radius: 10px;
  z-index: 5;
  width: 300px;
  div {
    margin: 0 25px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    gap: 16px;
    width: 100%;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 0px 0;
  }
`;

const Button = styled.button`
  color: #fff;
  font-size: 24px;
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  /* border-bottom: 2px solid transparent; */
  transition: 500ms;
  &:hover {
    color: #333338;
    background-color: #fff;
  }
`;
const NavButton = styled.button`
  color: #fff;
  font-size: 24px;
  background-color: transparent;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid transparent;
  transition: 500ms;
  &:hover {
    color: #333338;
    border-bottom: 2px solid #333338;
  }
`;
const StyledIcon = styled(Icon)`
  fill: #fff;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  &:hover {
    fill: #333338;
    cursor: pointer;
  }
`;
const MenuButton = styled.button`
  border: none;
  display: flex;
  margin: 0;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
