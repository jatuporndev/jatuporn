import React from "react";
import styled from "styled-components";
import projectData from "../../resouses/projects/projects-data.json";
import ProjectCard from "./ProjectCard";
import { DoneBtn } from "../../styled/button";

const MainDiv = styled.div`
  height: auto;
  max-width: 100%;
  padding-top: 48px;
  align-items: center;
`;

const TitleText = styled.div`
  width: 70%;
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  font-family: "Pangolin";
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    width: 80%; 
  }

  @media (max-width: 767px) {
    width: 85%;
 
  }

`;

const Box = styled.div`
  padding-top: 24px;
  padding-bottom: 64px;
  height: auto;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 100%;
    gap: 48px;
  }
`;

const More = styled(DoneBtn)`
  margin-top: 8px;
`;

export default function Projects(props) {
  let color = props.colorCard

  function onClick(e) {
    const url = 'https://github.com/jatuporndev?tab=repositories';
    window.open(url, '_blank');
  }

  return (
    <MainDiv>
      <TitleText>PROJECTS</TitleText>
      <Box>
        {projectData.map((data) => (
          <ProjectCard color={color} data={data}></ProjectCard>
        ))}

        <More $color={color} onClick={onClick}>
          VIEW MORE
        </More>
      </Box>
    </MainDiv>
  );
}
