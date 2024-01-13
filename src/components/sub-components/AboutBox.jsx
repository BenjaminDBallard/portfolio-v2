import styled from "styled-components";

const AboutBox = (props) => {
  return (
    <>
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
              Currently Im employed as Full-Stack Developer focused on
              establishing a monitoring dashboard and database for temperatures,
              co2, and other environmental metrics for a mycology lab based in
              Austin, TX. We are using raspberry pi and esp32 microcomputers as
              our on site hardware, the raspberry pis were used as local
              displays for lab technicians and esp32s were utilized for our
              sensors. I developed the scripts for the microcomputers in Python
              and the backend in Express and Node.
            </Text>
            <Text>
              Previously I worked for Ripple Learning LLC where my primary focus
              was front-end development, UI interface, accessibility, and
              design. While in this position I developed several applications to
              assist students in and out of school. These projects include an AI
              powered chatbot to aid student textbook comprehension and a job
              application tracking website.
            </Text>
          </div>
        </Box>
      </Content>
    </>
  );
};

export default AboutBox;

const Content = styled.div`
  /* position: absolute; */
  padding: 100px 100px;
  width: 50%;
  border-radius: 10px;
  background-color: #1a1a1e;
  color: #cfcfe7;
  display: flex;
  flex-direction: column;
  box-shadow: 60px -16px teal, -60px -16px pink;
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

const SubContent = styled.div`
  position: absolute;
  padding: 100px 100px;
  width: 50%;
  border-radius: 10px;
  background-color: rgb(162, 241, 249);
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
