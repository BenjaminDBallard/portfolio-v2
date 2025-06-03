import { forwardRef } from "react";
import styled from "styled-components";
import resume from "../../data/resume.json"
import {CommonBackground, CommonTitle} from "../Common/common.js";

const About = forwardRef((props, aboutRef) => {
  const data = resume.about
  const keys = Object.keys(data)
  const { $isDark } = props
  return (
    <Section ref={aboutRef}>

      <Content>
        <CommonTitle>ABOUT ME</CommonTitle>
        <BackgroundSpacer>
        <CommonBackground>
          <TextContainer>

            {keys.map((item, i) => (
                <Card key={i}>
                  <SubTitle>{data[item].title.toUpperCase()}</SubTitle>
                  {data[item].description ? (
                      <Text>{data[item].description}</Text>
                  ) : (
                      <IconList>
                        {data[item].icons.map((icon, i) => (
                            <IconTile key={i}>
                            <Icon src={$isDark ? `/icons/${icon.dark}` : `/icons/${icon.img}`} alt={icon.img}/>
                            <IconText>{icon.name}</IconText>
                            </IconTile>
                        ))}
                      </IconList>
                  )}
                </Card>
            ))}
          </TextContainer>
        </CommonBackground>
        </BackgroundSpacer>
      </Content>
    </Section>
  );
});

About.displayName = "About";

export default About;

const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
    
  z-index: 1;
`;

const Content = styled.div`
  //background-color: ${(props) => props.theme.colors.secondbg};
  //box-shadow: ${(props) => props.theme.boxShadows.top};
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const BackgroundSpacer = styled.div`
background-color: ${(props) => props.theme.colors.mainbg};
`

const TextContainer = styled.div`
  width: calc(80% + 20px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  padding: 14px 10px;
  text-align: left;
  color: ${(props) => props.theme.colors.text.body};
  border-radius: 10px;
  z-index: 1;
  grid-auto-flow: dense;
  @media screen and (max-width: 768px) {
    width: calc(95% + 20px);
    grid-template-columns: 1fr; /* stack cards vertically */
  }
`;

const Text = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
const IconText = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondbg};

  box-shadow: ${(props) => props.theme.boxShadows.main};
  &:nth-child(odd):last-child {
    @media (min-width: 769px) and (max-width: 1752px) {
      grid-column: 1 / -1;
    }
  }
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 1.1;
  margin: 5px 0;
  color: ${(props) => props.theme.accent.accentText};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  margin-top: 0;
    padding: 0;
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;
const IconTile = styled.div`
display: flex;
  height: 80px;
  width: 80px;
  gap: 5px;
flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondbg};
  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

const Icon = styled.img`
  height: 40px;
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`
