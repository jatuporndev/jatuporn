import React from "react";
import styled from "styled-components";
import projectData from "../../resouses/projects/projects-data.json";
import ProjectCard from "./ProjectCard";
import { DoneBtn } from "../../styled/button";
import { SectionInner } from "../../styles/sectionLayout";
import SectionHeading from "../common/SectionHeading";
import { setBackgroundColor } from "../../utility/utility";

const MainDiv = styled.section`
  height: auto;
  max-width: 100%;
  padding: 56px 0 72px;
  ${setBackgroundColor()}
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 40px 0 56px;
  }
`;

const ProjectsInner = styled(SectionInner)`
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 767px) {
    gap: 32px;
  }
`;

const MoreWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  @media (max-width: 767px) {
    margin-top: 8px;
    padding-bottom: 8px;
  }
`;

const More = styled(DoneBtn)`
  min-width: 160px;

  @media (max-width: 767px) {
    min-width: 200px;
    width: 100%;
    max-width: 280px;
  }
`;

export default function Projects(props) {
  const color = props.colorCard;

  function onClick() {
    const url = "https://github.com/jatuporndev?tab=repositories";
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <MainDiv id="projects" aria-labelledby="projects-heading">
      <ProjectsInner>
        <SectionHeading id="projects-heading" accentColor={color}>
          PROJECTS
        </SectionHeading>
        <Box>
          {projectData.map((data, i) => (
            <ProjectCard color={color} data={data} key={data.name || i} />
          ))}
          <MoreWrap>
            <More $color={color} type="button" onClick={onClick}>
              VIEW MORE
            </More>
          </MoreWrap>
        </Box>
      </ProjectsInner>
    </MainDiv>
  );
}
