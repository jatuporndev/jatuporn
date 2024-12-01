import React from "react";
import styled from "styled-components";

const AboutContrainer = styled.div`
  height: auto;
  margin-bottom: 64px;
  padding: 16px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled(Box)`
  margin-bottom: 4px;
`;

const BoxDetail = styled(Box)`
  color: #9e9e9e;
`;

const Cat = styled.img`
    width: 64px;
    height: 64px;
    border: 2px solid #EEEEEE;
    border-radius: 50%;
    object-fit: contain;
    margin-bottom: 16px;
`;

export default function About ({ iconCard }) {
  return (
    <AboutContrainer id="about">
      <Box>
        <Cat src={require(`../../resouses/icon-card/${iconCard}`)}></Cat>
      </Box>
      <Title>Software Engineer</Title>
      <BoxDetail>
        Mobile Developer | Full Stack Developer, Graduated in Computer Science
        from RMUTTO CPC.
      </BoxDetail>
      <BoxDetail>
        I develop things as a Software Engineer and am also passionate about UX
        and UI
      </BoxDetail>
    </AboutContrainer>
  );
}
