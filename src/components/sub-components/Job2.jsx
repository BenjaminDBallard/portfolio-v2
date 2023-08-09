import { styled } from "styled-components";
import Image from "../../assets/hackerClone.png";

export default function Job1() {
  return (
    <Section>
      <Content>
        <ImgBox>
          <Link href="https://hacker-clone-d852c.web.app/">
            <DisplayImg src={Image} />
          </Link>
        </ImgBox>
        <DisplayBox>
          <Display>
            <Link href="https://hacker-clone-d852c.web.app/">
              <Title>Hacker Clone</Title>
            </Link>
            <ChipList>
              <FlatChip>React.js</FlatChip>
              <FlatChip>Material UI</FlatChip>
            </ChipList>
            <List>
              <Text>Sophisticated Front-end Design Showcase</Text>
              <Text>Utilizing React and Material-UI (MUI) technologies</Text>
              <Text>
                Exemplifying seamless user experiences and captivating visuals,
                setting new standards in modern web application design.
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
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
  }
`;

const ImgBox = styled.div`
  width: 50%;

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
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 1200px) {
    /* min-width: none; */
    width: 100%;
  }
`;

const DisplayBox = styled.div`
  /* margin: 0 20px; */
  width: 50%;
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
