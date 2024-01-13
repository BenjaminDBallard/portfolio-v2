import { forwardRef } from "react";
import styled from "styled-components";

const About = forwardRef((props, aboutRef) => {
  return (
    <Section ref={aboutRef}>
      <Content>
        <Title>About Me</Title>
        <Box>
          <div>
            <Text>
              Web development began as a hobby that grew into a labor of love.
              which lead to me pursue a formal education with Austin Coding
              Academy. There, I improved my personal skills and worked in teams
              on projects of all scopes from building API&apos;s to full fledged
              React projects.
            </Text>
            <Text>
              I currently work for MycoTex as a Full-Stack Developer.
              establishing a monitoring dashboard and database for temps, co2,
              and other environmental metrics for a mycology lab based in Austin
              TX.
            </Text>
            <Text>
              Previously I worked for Ripple Learning LLC where my primary focus
              is front-end development, UI interface, accessibility, and design.
              While in this position I developed several applications to assist
              students in and out of school. These projects include an AI
              powered chatbot to aid student textbook comprehension and a job
              application tracking website.
            </Text>
          </div>
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
  /* border-left: 10px solid rgb(119, 135, 249);
  border-bottom: 10px solid rgb(119, 135, 249); */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  @media screen and (max-width: 1037px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  margin: 0px 120px;
  padding: 100px 100px;
  width: 50%;
  border-radius: 10px;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),
    0 0 0 1px hsla(230, 13%, 9%, 0.075), 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
    0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
    0 3.5px 6px hsla(230, 13%, 9%, 0.09);
  /* box-shadow: 10px 10px rgba(0, 0, 0, 0.442), 140px -60px rgba(119, 134, 249),
    -60px 30px rgb(162, 241, 249); */
  background-color: #252932;
  color: #a3a6ad;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    padding: 100px 50px;
    margin: 0px 20px;
    width: 80%;
    /* box-shadow: 10px 10px rgba(0, 0, 0, 0.442), 30px -60px rgba(119, 134, 249),
      -60px 30px rgb(162, 241, 249); */
  }
  @media screen and (max-width: 1037px) {
    padding: 100px 50px;
    margin: 0 20px;
    width: 80%;
    /* box-shadow: 10px 10px rgba(0, 0, 0, 0.442), 10px -60px rgba(119, 134, 249),
      -10px 20px rgb(162, 241, 249); */
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 100px 100px;

    max-width: 1720px;
    /* font-size: 40px; */
  }
`;

const Box = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1;
  color: #ccd0d9;
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
