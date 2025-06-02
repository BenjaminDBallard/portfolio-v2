import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { forwardRef } from "react";
import HomeCard from "./HomeCard.jsx";
import resume from "../../data/resume.json"
import {slideDownKeyframe} from "../css-animations.js";

const Home = forwardRef((props, homeRef) => {
  const data = resume
  return (
    <Section ref={homeRef}>
      <img className="svg-rect" src='/images/home_rect.svg' alt="decorative ractangle background"></img>
      <Wrapper>
        <Content>
          <div>
            <div>
              <Greeting>{data.greeting}</Greeting>
              <Title>{data.firstName.toUpperCase()} {data.lastName.toUpperCase()}</Title>
              <SubTitle>{data.jobTitle.toUpperCase()}</SubTitle>
            </div>
            <a href="/files/BenBallard-Resume.pdf" download>
              <NavButton>
                Download Resume
              </NavButton>
            </a>
            <IconWrapper>
              <a href="https://github.com/BenjaminDBallard" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className='icon' />
              </a>
              <a href="https://www.linkedin.com/in/benjamin-d-ballard/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='icon' />
              </a>
              <a href="mailto:benb971@gmail.com?subject=Hello,%20I'd%20like%20to%20connect." target="_blank" rel="noopener noreferrer">
                <MailIcon className="icon" />
              </a>
            </IconWrapper>
          </div>
          <HeroWrap>
            <HomeCard />
          </HeroWrap>
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 2;
  animation: ${slideDownKeyframe} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s
  forwards;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroWrap = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
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
  .icon {
    fill: ${(props) => props.theme.colors.text.link};
    transition: 250ms;
    &:hover {
      fill: ${(props) => props.theme.colors.text.subtle};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
