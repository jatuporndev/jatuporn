import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const MainDiv = styled.div`
  height: auto;
  width: 100%;
  padding-top: 48px;
`;

const TitleText = styled.div`
  margin: 0 auto 32px auto;
  font-size: 24px;
  font-weight: bold;
  font-family: "Pangolin";
  max-width: 800px;
  width: 90%;
  transition: all 0.3s ease;

`;

const Box = styled.div`
  padding-top: 24px;
  height: 500px;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default function Projects(props) {
  return (
    <MainDiv>
      <TitleText>Projects</TitleText>
      <Box>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </Box>
    </MainDiv>
  );
}
