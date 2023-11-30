import { styled } from "styled-components";
// import NavButton from "./sub-components/NavButton";
import bblogo from "../assets/bblogoWhite.svg";

export default function Navbar(props) {
  return (
    <Section>
      <Wrapper>
        <img src={bblogo} />
        <div>
          <NavButton onClick={() => props.handleLinkClick("home")}>
            Home
          </NavButton>
          <NavButton onClick={() => props.handleLinkClick("about")}>
            About
          </NavButton>
          <NavButton onClick={() => props.handleLinkClick("work")}>
            Work
          </NavButton>
          <Button onClick={() => props.handleLinkClick("contact")}>
            Contact
          </Button>
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  position: fixed;
  width: 1720px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  display: flex;
  padding: 10px 0;
  height: 40px;
  background-color: #333338;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;

  display: flex;
  /* width: 100%; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 40px;
  /* border-bottom: 1px solid black; */
  /* background-color: transparent; */
  /* padding-top: 10px; */
  img {
    height: 40px;
  }
  div {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 1200px) {
    /* width: 80%; */
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;
const Button = styled.button`
  color: rgb(119, 135, 249);
  font-size: 18px;
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid rgb(119, 135, 249);
  border-radius: 5px;
  /* border-bottom: 2px solid transparent; */
  transition: 500ms;
  &:hover {
    color: white;
    background-color: rgb(119, 135, 249);
  }
`;
const NavButton = styled.button`
  color: #cfcfe7;
  font-size: 18px;
  background-color: transparent;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid transparent;
  transition: 500ms;
  &:hover {
    color: rgb(162, 241, 249);
    border-bottom: 2px solid rgb(162, 241, 249);
  }
`;

/* @media screen and (min-width: 1921px) {
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 40px;
  } */
