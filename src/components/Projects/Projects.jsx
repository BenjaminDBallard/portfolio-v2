import { forwardRef } from "react";
import { styled } from "styled-components";
import resume from "../../data/resume.json"
import ProjectsCard from "./ProjectsCard.jsx";
import {CommonTitle} from "../Common/common.js";

const Projects = forwardRef((props, projectsRef) => {
    const data = resume.projects
    const {theme} = props
    return (
        <Section ref={projectsRef}>
            <Content className="content">
                <CommonTitle>PROJECTS</CommonTitle>
                <List>
                    {data.map((item, index) => (
                        <CardItem key={index}>
                            <ProjectsCard data={item} theme={theme} />
                        </CardItem>
                    ))}
                </List>
            </Content>
        </Section>
    );
});

Projects.displayName = "Projects";

export default Projects;

const Section = styled.div`
  background-color: ${(props) => props.theme.colors.mainbg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    z-index: 1;
`;

const Content = styled.div`
  padding-top: 100px;
  color: #ccd0d9;
  width: 80%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const List = styled.ul`
list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0px;
`
const CardItem = styled.li`
list-style: none;
`
