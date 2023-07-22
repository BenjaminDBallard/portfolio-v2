import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Chip } from "@mui/material";
import Image from "../../assets/ecproDash.png";

export default function Job1() {
  const imageURL = Image;

  const Section = styled(Box)`
    /* display: flex; */
    align-items: center;
  `;
  const Content = styled("div")`
    /* width: 600px; */
    color: white;
    display: flex;
    justify-content: center;
    gap: 40px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const Title = styled(Typography)`
    font-size: 40px;
    line-height: 1.1;
  `;

  const Display = styled(Box)`
    margin: 0 20px;
  `;

  const ImageUrl = styled(Link)`
    color: white;
    text-decoration: none;
  `;

  const Background = styled("div")({
    backgroundImage: `url(${imageURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  const ImageSubset = styled(Background)`
    width: 600px;
    height: 400px;
    @media screen and (max-width: 1200px) {
      width: 80vw;
    }
  `;

  const ChipList = styled(Box)`
    display: flex;
    gap: 10px;
    padding: 10px 0;
    flex-wrap: wrap;
  `;

  const FlatChip = styled(Chip)`
    padding: 0;
  `;

  const List = styled("ul")`
    padding-left: 15px;
    margin-top: 0;
    max-width: 585px;
  `;

  const Text = styled("li")`
    padding-top: 10px;
  `;
  return (
    <Section>
      <Content>
        <ImageUrl href="https://ecpro-e4a36.web.app">
          <ImageSubset />
        </ImageUrl>
        <Display>
          <ImageUrl href="https://ecpro-e4a36.web.app">
            <Title>ECPro</Title>
          </ImageUrl>
          <ChipList>
            <FlatChip variant="outlined" color="primary" label="React.js" />
            <FlatChip variant="outlined" color="primary" label="Node.js" />
            <FlatChip variant="outlined" color="primary" label="MySQL" />
            <FlatChip variant="outlined" color="primary" label="Express" />
            <FlatChip variant="outlined" color="primary" label="Rest API" />
            <FlatChip variant="outlined" color="primary" label="MUI styled" />
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
              update data from the back-end, which was fortified with robust web
              security via JSON Web Tokens (JWT) through Auth0.
            </Text>
            <Text>
              Orchestrated the creation of a high-performance Express REST API,
              expertly leveraging Node.js to facilitate seamless communication
              with a MySQL database, enabling efficient handling of data
              retrieval, updates, and deletions based on user requests.
            </Text>
          </List>
        </Display>
      </Content>
    </Section>
  );
}
