import styled from "styled-components";
import { forwardRef } from "react";

const Home = forwardRef((props, homeRef) => {
  return (
    <Section ref={homeRef}>
      <Content>
        <Title>
          Hi, Im Ben. <br /> Front-End Web Developer
        </Title>
        <Text>
          I thoroughly enjoy creating user-friendly and sophisticated online
          experiences, <br />
          specialising in developing web applications with React and
          StyledComponents.
        </Text>
        <NavButton onClick={() => props.handleLinkClick("about")}>
          about
        </NavButton>
        <NavButton onClick={() => props.handleLinkClick("work")}>
          work
        </NavButton>
        <NavButton onClick={() => props.handleLinkClick("contact")}>
          contact
        </NavButton>
      </Content>
    </Section>
  );
});

Home.displayName = "Home";

export default Home;

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  /* padding-left: 100px; */
  color: white;
  width: 85%;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
    width: 80%;
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 0 100px;

    /* max-width: 1720px; */
    /* font-size: 40px; */
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 50px;
  }
  /* @media screen and (min-width: 1921px) {
    font-size: 90px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 120px;
  } */
`;

const Text = styled.p`
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
  /* @media screen and (min-width: 1921px) {
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 40px;
  } */
`;

const NavButton = styled.button`
  background-color: #0e8388;
  color: #fff;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  &:hover {
    background-color: #cbe4de;
  }
  /* @media screen and (min-width: 1921px) {
    margin-right: 15px;
    padding: 15px;
    font-size: 30px;
  } */
  /* @media screen and (min-width: 2921px) {
    margin-right: 20px;
    padding: 20px;
    font-size: 40px;
  } */
`;
