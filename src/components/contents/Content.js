import { useState } from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";
import LogoChanger from "../logo-changer/LogoChanger";
import { DoneBtn } from "../../styled/button";

const MainContent = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-height: 430px) {
    height: auto;
    padding: 24px 0;
  }
`;

const Done = styled(DoneBtn)`
  margin-top: 36px;
`;

const ScrollIcon = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(90deg);
  margin-top: 12px;
`

function Content(props) {
  let icon = localStorage.getItem("icon");
  if (!icon) icon = "cat.png";

  const [iconCard, setIconCard] = useState(icon);
  const { colorCard, setColorCard } = props;

  function onClick(e) {
    const id = 'myskill';
    const yOffset = -120; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
  

  return (
    <MainContent>
      <IdCard colorCard={colorCard} iconCard={iconCard}></IdCard>
      <ColorChanger
        colorCard={colorCard}
        setColorCard={setColorCard}
      ></ColorChanger>
      <LogoChanger iconCard={iconCard} setIconCard={setIconCard}></LogoChanger>
      <Done $color={colorCard} onClick={onClick}>NEXT</Done>
      <ScrollIcon src={require("../../resouses/utility/can-scroll.gif")}></ScrollIcon>
    </MainContent>
  );
}

export default Content;
