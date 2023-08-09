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
              I&apos;m an electrician turned developer! My expirience running
              crews and working on a larger scale coordinating with multiple
              trades has given me critical teamwork skills under high pressure
              that continue to aid me in this fast pased industry.
            </Text>
            <Text>
              Web development began as a hobby that formed into a labor of love.
              which lead to me getting a more formal education with Austin
              Coding Academy. There, I improved my personal skills and worked in
              teams on projects of all scopes from building API&apos;s to full
              fledged react projects.
            </Text>
            <Text>
              From there I began develoment on an electrical bidding dashboard.
              Allowing electricians to easily manage job status, labor, and
              materials with an easy to use UI.
            </Text>
          </Subject>
          <ImgBox>
            <img src={cone} />
          </ImgBox>
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

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  @media screen and (max-width: 1720px) {
    width: 100%;
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
