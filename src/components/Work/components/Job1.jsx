import { styled } from "styled-components";
import Image from "../../../assets/RLlogo.webp";
import rain from "../../../assets/rain2.jpg";

export default function Job1() {
  return (
    <Section>
      <Content>
        <ImgBox>
          <Filter>
            <Link>
              <DisplayImg src={Image} />
            </Link>
          </Filter>
        </ImgBox>
        <DisplayBox>
          <Display>
            <Link>
              <Title>
                Front-End Web Developer @ Ripple Learning LLC | React Engineer |
              </Title>
            </Link>
            <ChipList>
              <FlatChip>React.js</FlatChip>
              <FlatChip>Styled-components</FlatChip>
              <FlatChip>Figma</FlatChip>
              <FlatChip>Node.js</FlatChip>
              <FlatChip>MySQL</FlatChip>
              <FlatChip>Express</FlatChip>
              <FlatChip>Rest API</FlatChip>
              <FlatChip>OpenAI</FlatChip>
            </ChipList>
            <List>
              <Text>
                My primary responsibility lies in frontend development, with a
                strong emphasis on enhancing the user interface, ensuring
                accessibility, and optimizing overall design.
              </Text>
              <Text>
                Developed an artificial intelligence-driven chatbot designed to
                assist students in comprehension of online textbooks.
                Additionally, lead development for the implementation of an
                administrative dashboard to monitor the chatbot&apos;s usage and
                identify weaknesses within the curriculum.
              </Text>
              <Text>
                Designed and implemented a comprehensive job application
                tracking website to streamline the management of new and ongoing
                job applications. This platform enables users to track their
                progress through various stages of the hiring process and offers
                an AI-powered resume review feature that cross-references that
                resume against specific job descriptions to identify areas of
                improvement.
              </Text>
            </List>
          </Display>
        </DisplayBox>
      </Content>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  /* margin: 0 100px; */
  color: ${(props) => props.theme.colors.text.body};
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */

  /* align-items: center; */
  gap: 40px;
  @media screen and (max-width: 1720px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
  }
`;

const ImgBox = styled.div`
  width: 740px;
  height: 433px;
  background-image: url(${rain});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 1720px) {
    height: 100px;
  }
  /* margin: 20px; */
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 20px 0;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 20px 0;
  }
  /* @media screen and (min-width: 1921px) {
    margin: 30px 0;
  }
  @media screen and (min-width: 2921px) {
    margin: 40px 0;
  } */
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000070;
  height: 100%;
  width: 100%;
`;

const DisplayImg = styled.img`
  /* min-width: 600px; */
  width: 100%;

  @media screen and (max-width: 1200px) {
    /* min-width: none; */
    width: 100%;
  }
`;

const DisplayBox = styled.div`
  /* margin: 0 20px; */
  width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Display = styled.div`
  /* margin: 0 40px; */
  /* @media screen and (min-width: 1921px) {
    margin: 0 60px;
  }
  @media screen and (min-width: 2921px) {
    margin: 80px;
  } */
  @media screen and (max-width: 900px) {
    /* margin: 0 40px; */
  }
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 1.1;
  margin: 0;
  color: ${(props) => props.theme.colors.text.body};
`;

const Link = styled.div`
  color: black;
  text-decoration: none;
`;

const ChipList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
`;

const FlatChip = styled.button`
  padding: 5px;
  background-color: transparent;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.subtle};
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.subtle};
`;

const List = styled.ul`
  padding-left: 15px;
  margin-top: 0;
`;

const Text = styled.li`
  padding-top: 20px;
  font-size: 16px;
  /* @media screen and (max-width: 900px) {
    width: 100%;
    margin: 20px 0;
  } */
  /* @media screen and (min-width: 1921px) {
    padding-top: 30px;
    font-size: 30px;
  }
  @media screen and (min-width: 2921px) {
    padding-top: 40px;
    font-size: 40px;
  } */
`;
