import { forwardRef } from "react";
import styled from "styled-components";

const About = forwardRef((props, aboutRef) => {
  return (
    <Section ref={aboutRef}>
      <Content>
        <Title>About Me</Title>
        <Text>
          I&apos;m an electrician turned developer! My expirience running crews
          and working on a larger scale coordinating with multiple trades has
          given me critical teamwork skills under high pressure that continue to
          aid me in this fast pased industry.
        </Text>
        <Text>
          Web development began as a hobby that formed into a labor of love.
          which lead to me getting a more formal education with Austin Coding
          Academy. There, I improved my personal skills and worked in teams on
          projects of all scopes from building API&apos;s to full fledged react
          projects.
        </Text>
        <Text>
          From there I began develoment on An electrical bidding dashboard.
          Allowing electricians to easily manage job status, labor, and
          materials with an easy to use UI.
        </Text>
      </Content>
    </Section>
  );
});

About.displayName = "About";

export default About;

const Section = styled.div`
  background-color: #2c3333;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  /* gap: 200px; */
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  padding: 40px 100px;
  width: 600px;
  color: white;
  @media screen and (max-width: 600px) {
    padding: 40px 0;
    width: 80%;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1;
`;

const Text = styled.p`
  padding-top: 10px;
  font-size: 20px;
`;

// const Window = styled("div")({
// width: "600px",
// height: "400px",
// backgroundImage: `url(${imageURL})`,
// backgroundAttachment: "fixed",
// backgroundPosition: "center",
// backgroundSize: "100vw 100vh",
// backgroundRepeat: "no-repeat",
// });

// const Hole = styled("h1")({
// fontSize: "100px",
// webkitBackgroundClip: "text",
// backgroundClip: "text",
// backgroundImage: `url(${imageURL})`,
// color: "transparent",
// backgroundAttachment: "fixed",
// backgroundPosition: "center",
// backgroundSize: "cover",
// backgroundRepeat: "no-repeat",
// });
