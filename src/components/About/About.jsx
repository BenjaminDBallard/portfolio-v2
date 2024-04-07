import { forwardRef } from "react";
import styled from "styled-components";

const About = forwardRef((props, aboutRef) => {
  return (
    <Section ref={aboutRef}>
      <Content>
        <Title>About Me</Title>
        <SkewBg />
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  color: ${(props) => props.theme.colors.text.body};
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const Box = styled.div`
  text-align: left;
  display: flex;
  background-color: ${(props) => props.theme.colors.mainbg};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  border-radius: 10px;
  padding: 40px 80px;
  z-index: 1;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: calc(100% + 7px + 0.9vw * 0.42);
  color: ${(props) => props.theme.colors.text.subtitle};
  z-index: 2;
  margin: 50px 0 100px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const SkewBg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 500px;
  background-image: ${(props) => props.theme.colors.primarySash};
  transform: skewY(-3deg) translateY(100px);
  z-index: 0;
  pointer-events: none;

  /* @media screen and (max-width: 768px) {
    width: unset;
    height: 90%;
    top: 100px;
    left: -16px;
    right: -16px;
    bottom: 0;
  } */
`;
