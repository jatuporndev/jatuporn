import React from "react";
import styled from "styled-components";
import { setBackgroundColor } from "../../utility/utility";

const AboutContrainer = styled.div`
  height: auto;
  margin-bottom: 64px;
  padding: 16px;
  ${setBackgroundColor()}
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  font-family: "Pangolin", sans-serif;
  color: #212121;
  text-align: center;
`;

const TitleRule = styled.div`
  width: min(5.25rem, 46%);
  min-width: 3rem;
  height: 3px;
  margin-top: 8px;
  border-radius: 2px;
  background-color: ${(props) => props.$color || "#e0e0e0"};
`;

const BoxDetail = styled(Box)`
  color: #9e9e9e;
`;

const Cat = styled.img`
    width: 64px;
    height: 64px;
    border: 2px solid #EEEEEE;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
    overflow-clip-margin: unset;
`;

export default function About({ iconCard, accentColor }) {
  return (
    <AboutContrainer id="about">
      <Box>
        <Cat src={require(`../../resouses/icon-card/${iconCard}`)}></Cat>
      </Box>
      <Box>
        <TitleWrap>
          <Title>Software Engineer</Title>
          <TitleRule $color={accentColor} />
        </TitleWrap>
      </Box>
      <BoxDetail>
        3 years experience as a Mobile Developer and Full Stack Developer.
      </BoxDetail>
      <BoxDetail>
        Graduated in Computer Science from RMUTTO CPC.
      </BoxDetail>
      <BoxDetail>
        I develop things as a Software Engineer and am also passionate about UX
        and UI
      </BoxDetail>
    </AboutContrainer>
  );
}
