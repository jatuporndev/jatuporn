import React from "react";
import styled from "styled-components";
import TechBox from "./view/TechBox";

const MySkillMain = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 26px;
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

const TechBoxContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: flex-start;
  max-width: 838px;
  width: 90%; 
  margin: 0 auto 20px auto;
`;


function MySkill(props) {
  const techBoxList = [
    { icon: "kotlin.svg", detail: "Android Kotlin MVVM" },
    { icon: "flutter.svg", detail: "Flutter" },
    { icon: "swift.svg", detail: "iOS Swift" },
    { icon: "react.svg", detail: "this project made with reactJS" },
    { icon: "nodejs.svg", detail: "nodeJs" },
    { icon: "python.svg", detail: "Python" },
    { icon: "graphql.svg", detail: "Graphql" },
    { icon: "docker.svg", detail: "Docker" },
    { icon: "aws.svg", detail: "Basic AWS" },
  ];

  return (
    <MySkillMain id="myskill">
      <TitleText>TECH SKILL</TitleText>
      <TechBoxContainer>
        {techBoxList.map((item, index) => (
          <TechBox
            key={index}
            icon={require(`../../resouses/skill/${item.icon}`)}
            detail={item.detail}
          ></TechBox>
        ))}
      </TechBoxContainer>
    </MySkillMain>
  );
}

export default MySkill;
