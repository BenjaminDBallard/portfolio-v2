import { forwardRef } from "react";
import styled from "styled-components";
import resume from "../../data/resume.json"

const About = forwardRef((props, aboutRef) => {
  const data = resume.about
  const keys = Object.keys(data)
  const { theme } = props
  console.log(theme ? data.stack.icons[5].dark : data.stack.icons[5].img);
  return (
    <Section ref={aboutRef}>

      <Content>
        <Title>About Me</Title>
        <Background>
          <TextContainer>

            {keys.map((item, i) => (
                <Card key={i}>
                  <SubTitle>{data[item].title}</SubTitle>
                  {data[item].description ? (
                      <Text>{data[item].description}</Text>
                  ) : (
                      <IconList>
                        {data[item].icons.map((icon, i) => (
                            <IconTile key={i}>
                            <Icon src={theme ? `/icons/${icon.dark}` : `/icons/${icon.img}`} alt={icon.img}/>
                            <IconText>{icon.name}</IconText>
                            </IconTile>
                        ))}
                      </IconList>
                  )}
                </Card>
            ))}
          </TextContainer>
        </Background>
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
  padding: 100px 0 0;
  
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  
  
`;

const Background = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  background-image: ${(props) => props.theme.colors.primarySash};
  z-index: 0;
`

const TextContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  padding: 14px 20px;
  text-align: left;
  color: ${(props) => props.theme.colors.text.body};
  border-radius: 10px;
  z-index: 1;
  grid-auto-flow: dense;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: calc(100% + 7px + 0.9vw * 0.42);
  color: ${(props) => props.theme.colors.text.subtitle};
  z-index: 2;
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
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.mainbg};

  box-shadow: ${(props) => props.theme.boxShadows.main};
  &:nth-child(odd):last-child {
    @media (min-width: 769px) and (max-width: 1752px) {
      grid-column: 1 / -1;
    }
  }
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text.body};
  font-size: 24px;
  margin: 0;
`;

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 0;
    padding: 0;
`;
const IconTile = styled.div`
display: flex;
  height: 80px;
  width: 80px;
flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondbg};
  box-shadow: ${(props) => props.theme.boxShadows.main};
`

const Icon = styled.img`
  height: 40px;
`
