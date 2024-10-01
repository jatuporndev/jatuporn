import { useState } from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";
import LogoChanger from "../logo-changer/LogoChanger";

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
  let color = localStorage.getItem("color");
  if (!color) color = "#D1E9F6";

  let icon = localStorage.getItem("icon");
  if (!icon) icon = "cat.png";

  const [colorCard, setColorCard] = useState(color);
  const [iconCard, setIconCard] = useState(icon);

  return (
    <MainContent>
      <IdCard colorCard={colorCard} iconCard={iconCard}></IdCard>
      <ColorChanger
        colorCard={colorCard}
        setColorCard={setColorCard}
      ></ColorChanger>
      <LogoChanger iconCard={iconCard} setIconCard={setIconCard}></LogoChanger>
    </MainContent>
  );
}

export default Content;
