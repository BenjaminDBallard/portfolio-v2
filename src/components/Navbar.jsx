import { styled } from "styled-components";
import NavButton from "./sub-components/NavButton";
import bblogo from "../assets/bblogo.svg";

export default function Navbar(props) {
  return (
    <Section>
      <Wrapper>
        <img src={bblogo} />
        <div>
          <NavButton
            value="Home"
            onClick={() => props.handleLinkClick("home")}
          />
          <NavButton
            value="About"
            onClick={() => props.handleLinkClick("about")}
          />
          <NavButton
            value="Work"
            onClick={() => props.handleLinkClick("work")}
          />
          <NavButton
            value="Contact"
            onClick={() => props.handleLinkClick("contact")}
          />
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  position: fixed;
  width: 1720px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 10px 0;
  height: 40px;
  background-color: white;
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
  padding: 10px 0;
  width: 85%;

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
    padding: 10px 0;
    width: 80%;
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 10px 0px;

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;

/* @media screen and (min-width: 1921px) {
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 40px;
  } */
