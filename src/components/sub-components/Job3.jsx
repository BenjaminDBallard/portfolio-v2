import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Chip } from "@mui/material";
import Image from "../../assets/acalogo.webp";

export default function Job3() {
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
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "360px",
  });

  const ImageSubset = styled(Box)`
    width: 600px;
    height: 360px;
    padding: 20px 0;
    background-color: white;
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
          <ImageSubset>
            <Background />
          </ImageSubset>
        </ImageUrl>
        <Display>
          <ImageUrl href="https://ecpro-e4a36.web.app">
            <Title>Austin Coding Academy</Title>
          </ImageUrl>
          <ChipList>
            <FlatChip variant="outlined" color="primary" label="HTML5" />
            <FlatChip variant="outlined" color="primary" label="CSS3" />
            <FlatChip variant="outlined" color="primary" label="Javascript" />
            <FlatChip variant="outlined" color="primary" label="React.js" />
            <FlatChip variant="outlined" color="primary" label="Node.js" />
            <FlatChip variant="outlined" color="primary" label="MySQL" />
          </ChipList>
          <List>
            <Text>
              Underwent a comprehensive and transformative learning experience
              at Austin Coding Academy, focusing on coding and web development.
            </Text>
            <Text>
              Gained proficiency in a wide range of programming languages and
              frameworks, including HTML, CSS, JavaScript, React, and Node.js,
              through engaging hands-on projects and collaborative exercises.
            </Text>
            <Text>
              Cultivated strong problem-solving abilities and self-assurance to
              address real-world coding challenges, fostering a solid foundation
              for a successful career in the technology industry.
            </Text>
          </List>
        </Display>
      </Content>
    </Section>
  );
}
