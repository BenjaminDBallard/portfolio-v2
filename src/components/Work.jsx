import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import WorkTabs from "./sub-components/WorkTabs";
import { forwardRef } from "react";

const Work = forwardRef((props, workRef) => {
  const Section = styled(Box)`
    background-color: #2e4f4f;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Content = styled(Box)`
    margin: 40px;
    color: white;
  `;

  const Title = styled(Typography)`
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
  `;

  return (
    <Section ref={workRef}>
      <Content>
        <Title>Work</Title>
        <WorkTabs />
      </Content>
    </Section>
  );
});

Work.displayName = "Work";

export default Work;
