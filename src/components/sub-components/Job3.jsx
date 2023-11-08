import { styled } from "styled-components";
import Image from "../../assets/acalogo.webp";

export default function Job1() {
  return (
    <Section>
      <Content>
        <ImgBox>
          <Link href="https://austincodingacademy.com/">
            <DisplayImg src={Image} />
          </Link>
        </ImgBox>
        <DisplayBox>
          <Display>
            <Link href="https://austincodingacademy.com/">
              <Title>Austin Coding Academy</Title>
            </Link>
            <ChipList>
              <FlatChip>HTML5</FlatChip>
              <FlatChip>CSS3</FlatChip>
              <FlatChip>Javascript</FlatChip>
              <FlatChip>React.js</FlatChip>
              <FlatChip>Node.js</FlatChip>
              <FlatChip>MySQL</FlatChip>
            </ChipList>
            <List>
              <Text>
                Underwent a comprehensive and transformative learning experience
                at Austin Coding Academy, focusing on coding and web
                development.
              </Text>
              <Text>
                Gained proficiency in a wide range of programming languages and
                frameworks, including HTML, CSS, JavaScript, React, and Node.js,
                through engaging hands-on projects and collaborative exercises.
              </Text>
              <Text>
                Cultivated strong problem-solving abilities and self-assurance
                to address real-world coding challenges, fostering a solid
                foundation for a successful career in the technology industry.
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
  color: white;
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
  padding: 20px 0;
  background-color: #034f8d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
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

const DisplayImg = styled.img`
  /* min-width: 600px; */
  height: 100%;

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
  color: black;
  /* @media screen and (min-width: 1921px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 80px;
  } */
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const ChipList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
  /* @media screen and (min-width: 1921px) {
    gap: 15px;
    padding: 15px 0;
  }
  @media screen and (min-width: 2921px) {
    gap: 20px;
    padding: 20px 0;
  } */
`;

const FlatChip = styled.button`
  padding: 5px;
  background-color: transparent;
  border-radius: 999px;
  border: 1px solid #fc4f00;
  font-size: 15px;
  color: #fc4f00;
  /* @media screen and (min-width: 1921px) {
    font-size: 30px;
    padding: 15px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 40px;
    padding: 20px;
  } */
`;

const List = styled.ul`
  padding-left: 15px;
  margin-top: 0;
`;

const Text = styled.li`
  padding-top: 20px;
  font-size: 20px;
  color: black;
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
