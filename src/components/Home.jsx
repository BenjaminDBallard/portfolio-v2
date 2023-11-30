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
          I enjoy creating user-friendly and sophisticated online experiences,{" "}
          <br />
          specializing in developing web applications with React and
          StyledComponents.
        </Text>
        <NavButton onClick={() => props.handleLinkClick("contact")}>
          Get In Touch
        </NavButton>
      </Content>
    </Section>
  );
});

Home.displayName = "Home";

export default Home;

const Section = styled.div`
  background-color: #333338;
  height: 100vh;
  width: 1720px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Content = styled.div`
  /* padding-left: 100px; */
  color: #cfcfe7;
  width: 85%;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
    width: 80%;
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 0 100px;

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  line-height: 1.1;
  color: rgb(162, 241, 249);
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
  background-color: rgb(119, 135, 249);
  color: #fff;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 20px;
  border: 1px solid rgb(119, 135, 249);
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  padding: 15px 40px;
  transition: 500ms;
  &:hover {
    background-color: transparent;
    border: 1px solid rgb(119, 135, 249);
    color: rgb(119, 135, 249);
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
