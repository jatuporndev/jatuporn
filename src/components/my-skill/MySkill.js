import React from "react";
import styled from "styled-components";
import TechBox from "./view/TechBox";
import { SectionInner } from "../../styles/sectionLayout";
import SectionHeading from "../common/SectionHeading";

const MySkillMain = styled.div`
  height: auto;
  width: 100%;
  padding: 0 0 56px;
  box-sizing: border-box;
`;

const TechBoxContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

function MySkill({ accentColor }) {
  const techBoxList = [
    { icon: "kotlin.svg", detail: "Android Kotlin" },
    { icon: "flutter.svg", detail: "Flutter" },
    { icon: "swift.svg", detail: "iOS Swift" },
    { icon: "react.svg", detail: "this project made with reactJS" },
    { icon: "dotnet.svg", detail: "Backend .NET" },
    { icon: "nodejs.svg", detail: "nodeJs" },
    { icon: "python.svg", detail: "Python" },
    { icon: "graphql.svg", detail: "GraphQL" },
    { icon: "apollographql.svg", detail: "Apollo GraphQL" },
    { icon: "docker.svg", detail: "Docker" },
    { icon: "aws.svg", detail: "Basic AWS" },
    { icon: "firebase.svg", detail: "firebase" },
    { icon: "postgresql.svg", detail: "PostgreSQL" },
  ];

  return (
    <MySkillMain id="myskill">
      <SectionInner>
        <SectionHeading accentColor={accentColor}>TECH SKILL</SectionHeading>
        <TechBoxContainer>
          {techBoxList.map((item, index) => (
            <TechBox
              key={index}
              icon={require(`../../resouses/skill/${item.icon}`)}
              detail={item.detail}
            />
          ))}
        </TechBoxContainer>
      </SectionInner>
    </MySkillMain>
  );
}

export default MySkill;
