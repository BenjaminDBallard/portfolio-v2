import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Chip } from "@mui/material";
import Image from "../../assets/hackerClone.png";

export default function Job2() {
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
    @media screen and (max-width: 900px) {
      width: 100vw;
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
            <Title>HackerClone</Title>
          </ImageUrl>
          <ChipList>
            <FlatChip variant="outlined" color="primary" label="React.js" />
            <FlatChip
              variant="outlined"
              color="primary"
              label="Material-UI (MUI)"
            />
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
      </Content>
    </Section>
  );
}
