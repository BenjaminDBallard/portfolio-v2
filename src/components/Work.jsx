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
  /* background-color: rgb(39, 87, 94); */
  background-color: transparent;
  width: 1720px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1720px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Content = styled.div`
  padding: 100px 100px;
  color: white;
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
  color: rgb(162, 241, 249);
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
