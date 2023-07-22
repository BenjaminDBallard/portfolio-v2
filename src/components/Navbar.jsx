import { styled } from "styled-components";

export default function Navbar(props) {
  return (
    <Wrapper>
      <NavButton onClick={() => props.handleLinkClick("home")}>Home</NavButton>
      <NavButton onClick={() => props.handleLinkClick("about")}>
        About
      </NavButton>
      <NavButton onClick={() => props.handleLinkClick("work")}>Work</NavButton>
      <NavButton onClick={() => props.handleLinkClick("contact")}>
        Contact
      </NavButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 40px;
  background-color: transparent;
`;

const NavButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #ffffff50;
  }
`;
