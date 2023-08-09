import { forwardRef } from "react";
import { styled } from "styled-components";
import WorkTabs from "./sub-components/WorkTabs";

const Work = forwardRef((props, workRef) => {
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

const Section = styled.div`
  background-color: white;
  width: 1720px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  @media screen and (max-width: 1720px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 100px 100px;
  color: black;
  width: 100%;
  @media screen and (max-width: 900px) {
    padding: 100px 0;
    width: 80%;
  }
  @media screen and (min-width: 1921px) {
    /* margin-right: 20px; */
    padding: 100px 100px;

    max-width: 1720px;
    /* font-size: 40px; */
  }
  /* @media screen and (min-width: 1921px) {
    margin: 60px 0;
  }
  @media screen and (min-width: 2921px) {
    margin: 80px 0;
  } */
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  /* @media screen and (min-width: 1921px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2921px) {
    font-size: 80px;
  } */
`;
