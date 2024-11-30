import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: auto;
  width: 100%;
  padding-top: 58px;
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
    height: 500px;
    //background-color: #F5F5F5;
`;

function Experience() {
  return (
    <MainDiv>
      <TitleText>EXPERIENCE</TitleText>
      <Box></Box>
    </MainDiv>
  );
}

export default Experience;
