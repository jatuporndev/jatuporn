import { useState } from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";
import LogoChanger from "../logo-changer/LogoChanger";

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

const DoneBtn = styled.button`
  margin-top: 36px;
  font-family: "Pangolin";
  background-color: white;
  border-radius: 22%;
  font-size: 18px;
  padding: 4px 24px;
  cursor: pointer;
  border-color: black;
  color: black;
  text-align: center;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.$color};
      border-color: ${(props) => props.$color};
      transition: background-color ease 0.4s;
      letter-spacing: 2px;
    }
  }
`;

const ScrollIcon = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(90deg);
  margin-top: 12px;
`

function Content(props) {
  let color = localStorage.getItem("color");
  if (!color) color = "#D1E9F6";

  let icon = localStorage.getItem("icon");
  if (!icon) icon = "cat.png";

  const [colorCard, setColorCard] = useState(color);
  const [iconCard, setIconCard] = useState(icon);

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
      <DoneBtn $color={colorCard} onClick={onClick}>NEXT</DoneBtn>
      <ScrollIcon src={require("../../resouses/utility/can-scroll.gif")}></ScrollIcon>
    </MainContent>
  );
}

export default Content;
