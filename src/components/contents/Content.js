import {useState} from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";

const MainContent = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
`;

function Content(props) {

const [colorCard, setColorCard] = useState("#D1E9F6");

  return (
    <MainContent>
      <IdCard colorCard={colorCard}></IdCard>
      <ColorChanger colorCard= {colorCard} setColorCard={setColorCard}></ColorChanger>
    </MainContent>
  );
}

export default Content;
