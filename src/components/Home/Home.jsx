import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { forwardRef } from "react";
import svgRect from "../../assets/home_rect.svg";

const Home = forwardRef((props, homeRef) => {
  return (
    <Section ref={homeRef}>
      <img className="svg-rect" src={svgRect} alt=""></img>
      <Wrapper>
        <Content>
          <div>
            <Greeting>Hello, I&apos;m</Greeting>
            <Title>BEN BALLARD</Title>
            <SubTitle>FULL STACK WEB DEVELOPER</SubTitle>
          </div>
          <NavButton onClick={() => props.handleLinkClick("contact")}>
            Download Resume
          </NavButton>
          <IconWrapper>
            <StyledIcon icon="clean" size={24} />
            <StyledIcon icon="code" size={24} />
            <StyledIcon icon="crop" size={24} />
          </IconWrapper>
        </Content>
      </Wrapper>
    </Section>
  );
});

Home.displayName = "Home";

export default Home;

const Section = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .svg-rect {
    width: 40%;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;
    @media screen and (max-width: 768px) {
      top: 0;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  top: 30px;
  justify-content: left;
  align-items: center;
  width: 80%;
  height: calc(100vh - 60px);
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    text-align: center;
  }
`;

const Content = styled.div`
  width: fit-content;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 48px;
  font-size: calc(100% + 7px + 2.5vw * 0.55);
  font-weight: 800;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.text.body};
  margin: 5px 0;
  z-index: 1;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const Greeting = styled.p`
  color: ${(props) => props.theme.colors.text.body};
  font-size: 16px;
  margin: 0;
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text.body};
  font-size: calc(100% + -7px + 1vw * 0.55);
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const NavButton = styled.button`
  background-image: ${(props) => props.theme.colors.primary};
  color: #f8f8f8;
  margin: 30px 0;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  padding: 12px;
  transition: 250ms;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text.subtle};
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  transition: 250ms;
  &:hover {
    fill: ${(props) => props.theme.colors.text.body};
    cursor: pointer;
  }
`;
