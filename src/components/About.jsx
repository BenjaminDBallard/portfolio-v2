import { forwardRef } from "react";
import styled from "styled-components";
import cone from "../assets/cone.svg";

const About = forwardRef((props, aboutRef) => {
  return (
    <Section ref={aboutRef}>
      <Content>
        <Title>About Me</Title>
        <Box>
          <Subject>
            <Text>
              Web development began as a hobby that formed into a labor of love.
              which lead to me getting a more formal education with Austin
              Coding Academy. There, I improved my personal skills and worked in
              teams on projects of all scopes from building API&apos;s to full
              fledged react projects.
            </Text>
            <Text>
              I Currently work for Ripple Learning LLC Working on several
              applications to assist students in and out of school. an AI
              powered chatbot to aid students online textbook understanding and
              a Job Application Tracking Web Application. My primary focus is
              frontend development, working on UI interface, Accessibility, and
              Design.
            </Text>
            <Text>
              Previously I worked in the electrical construction sector spanning
              seven years. I have held roles in Quality Control and served as a
              foreman before transitioning to Software Engineering.
            </Text>
          </Subject>
          <ImgBox>{/* <img src={cone} /> */}</ImgBox>
        </Box>
      </Content>
    </Section>
  );
});

About.displayName = "About";

export default About;

const Section = styled.div`
  background-color: #fff;
  width: 1720px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 20px black, 0 0 20px #a0784f inset;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Content = styled.div`
  padding: 100px 100px;
  width: 85%;
  color: Black;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    padding: 100px 0;
    width: 80%;
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 100px 100px;

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;
const Subject = styled.div``;
const Box = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 350px;
    margin: 0 100px;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1;
  /* @media screen and (min-width: 1921px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 80px;
  } */
`;

const Text = styled.p`
  /* padding-top: 10px; */
  font-size: 20px;
  /* width: 50%; */
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
