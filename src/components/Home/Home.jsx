import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { forwardRef } from "react";
import HomeCard from "./HomeCard.jsx";
import resume from "../../data/resume.json"
import {slideDownKeyframe} from "../css-animations.js";
import {CommonButton} from "../Common/common.js";
// import HomeRect from '../../../public/images/home_rect.svg?react';
import { slowSpin } from "../css-animations.js";

const Home = forwardRef((props, homeRef) => {
  const data = resume
  return (
    <Section ref={homeRef}>
      {/*<StyledHomeRect />*/}
      <BackgroundSpinnerOne />
      <BackgroundSpinnerTwo />
      <Wrapper>
        <Content>
          <TitleWrap>
            <div>
              <Greeting>{data.greeting}</Greeting>
              <Title>{data.firstName.toUpperCase()} {data.lastName.toUpperCase()}</Title>
              <SubTitle>{data.jobTitle.toUpperCase()}</SubTitle>
            </div>
            <a href="/files/BenBallard-Resume.pdf" download>
              <CommonButton>
                DOWNLOAD RESUME
              </CommonButton>
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
          </TitleWrap>
          <HeroWrap>
            <HomeCard handleAccentChange={props.handleAccentChange} />
          </HeroWrap>
        </Content>
      </Wrapper>
    </Section>
  );
});

Home.displayName = "Home";

export default Home;

const BackgroundSpinnerOne = styled.div`
  position: fixed;
  top: 550px;
  left: -100px;
  width: 40vw;
  min-width: 400px;
  height: 40vw;
  min-height: 400px;
  border-radius: 20px;
  background: ${(props) => props.theme.accent.accentButton};
  opacity: 0.2;
  filter: blur(30px);
  animation: ${slowSpin} 360s linear infinite;
  z-index: 0;
  pointer-events: none;
`;

const BackgroundSpinnerTwo = styled.div`
  position: fixed;
  bottom: 350px;
  right: -200px;
  width: 60vw;
  min-width: 400px;
  height: 60vw;
  min-height: 400px;
  border-radius: 20px;
  background: ${(props) => props.theme.accent.accentButton};
  opacity: 0.4;
  filter: blur(30px);
  animation: ${slowSpin} 500s linear infinite reverse;
  z-index: 0;
  pointer-events: none;
`;

const Section = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const StyledHomeRect = styled(HomeRect)`
//   width: 40%;
//   height: fit-content;
//   position: absolute;
//   top: 50px;
//   right: 0;
//   z-index: 1;
//   color: ${(props) => props.theme.accent.accentIcon}; // this controls the fill!
//
//   @media screen and (max-width: 768px) {
//     top: 0;
//   }
// `;

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

const TitleWrap = styled.div`
display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-size: calc(100% + 7px + 2.5vw * 0.55);
  font-weight: 800;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.text.header};
  margin: 5px 0;
  z-index: 1;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const Greeting = styled.p`
  color: ${(props) => props.theme.colors.text.header};
  font-size: 16px;
  margin: 0;
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text.header};
  font-size: calc(100% + -7px + 1vw * 0.55);
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  .icon {
    fill: ${(props) => props.theme.accent.accentText};
    transition: 250ms;
    &:hover {
      fill: ${(props) => props.theme.accent.accentHover};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
