import React from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";

const MainContent = styled.div`
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;

function Content(props) {
  return (
    <MainContent>
      <IdCard></IdCard>
    </MainContent>
  );
}

export default Content;
