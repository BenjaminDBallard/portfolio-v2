import { forwardRef } from "react";
import styled from "styled-components";

const About = forwardRef((props, aboutRef) => {
  return (
    <Section ref={aboutRef}>
      <Content>
        <Title>About Me</Title>
        <Box>
          <Subject>
            <Text>
              Web development began as a hobby that grew into a labor of love.
              which lead to me pursue a formal education with Austin Coding
              Academy. There, I improved my personal skills and worked in teams
              on projects of all scopes from building API&apos;s to full fledged
              React projects.
            </Text>
            <Text>
              I currently work for Ripple Learning LLC where my primary focus is
              front-end development, UI interface, accessibility, and design.
              While in this position I developed several applications to assist
              students in and out of school. These projects include an AI
              powered chatbot to aid student textbook comprehension and a job
              application tracking website.
            </Text>
            <Text>
              Previously I worked in the electrical construction sector spanning
              seven years. I have held roles in Quality Control and served as a
              foreman before transitioning to Software Engineering.
            </Text>
          </Subject>
        </Box>
      </Content>
    </Section>
  );
});

About.displayName = "About";

export default About;

const Section = styled.div`
  background-color: transparent;
  /* background-color: rgb(57, 65, 125); */
  width: 1720px;
  border-left: 10px solid rgb(119, 135, 249);
  border-bottom: 10px solid rgb(119, 135, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: calc(100% - 10px);
    border-radius: 0;
    box-shadow: none;
  }
`;

const Content = styled.div`
  padding: 100px 100px;
  width: 85%;
  color: #cfcfe7;
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

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1;
  color: rgb(162, 241, 249);
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
