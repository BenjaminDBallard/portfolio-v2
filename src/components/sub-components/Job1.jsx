import { styled } from "styled-components";
import Image from "../../assets/ecproDash.png";

export default function Job1() {
  return (
    <Section>
      <Content>
        <ImgBox>
          <Link href="https://ecpro-e4a36.web.app">
            <DisplayImg src={Image} />
          </Link>
        </ImgBox>
        <DisplayBox>
          <Display>
            <Link href="https://ecpro-e4a36.web.app">
              <Title>ECPro</Title>
            </Link>
            <ChipList>
              <FlatChip>React.js</FlatChip>
              <FlatChip>Node.js</FlatChip>
              <FlatChip>MySQL</FlatChip>
              <FlatChip>Express</FlatChip>
              <FlatChip>Rest API</FlatChip>
              <FlatChip>Material UI</FlatChip>
            </ChipList>
            <List>
              <Text>
                Spearheaded the design and development of a sophisticated online
                dashboard facilitating streamlined electrical bidding and job
                progress management. Implementing essential features, such as
                authorization, data visualizations, and seamless client, job,
                materials, and labor management capabilities.
              </Text>
              <Text>
                Crafted a responsive front-end solution utilizing React, while
                also engineering custom React hooks to efficiently fetch and
                update data from the back-end, which was fortified with robust
                web security via JSON Web Tokens (JWT) through Auth0.
              </Text>
              <Text>
                Orchestrated the creation of a high-performance Express REST
                API, expertly leveraging Node.js to facilitate seamless
                communication with a MySQL database, enabling efficient handling
                of data retrieval, updates, and deletions based on user
                requests.
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* align-items: center; */
  gap: 40px;
  /* @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
  } */
`;

const ImgBox = styled.div`
  width: 80%;
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
  @media screen and (max-width: 1200px) {
    /* min-width: none; */
    width: 100%;
  }
`;

const DisplayBox = styled.div`
  /* margin: 0 20px; */
  width: 80%;
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
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  /* @media screen and (min-width: 1921px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 80px;
  } */
`;

const Link = styled.a`
  color: white;
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
  border: 1px solid white;
  font-size: 15px;
  color: white;
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
