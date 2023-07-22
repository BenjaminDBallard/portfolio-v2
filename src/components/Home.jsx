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
          I like to design and develop intuitive, elegant online experiences.{" "}
          <br />I specialize in coding web applications with React and
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
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  padding-left: 100px;
  color: white;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  line-height: 1.1;
  @media screen and (max-width: 900px) {
    font-size: 50px;
  }
`;

const Text = styled.p`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const NavButton = styled.button`
  background-color: #0e8388;
  color: #fff;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  &:hover {
    background-color: #cbe4de;
  }
`;
