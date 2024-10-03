import { useState } from "react";
import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";
import LogoChanger from "../logo-changer/LogoChanger";
import MySkill from "../my-skill/MySkill";

const MainContent = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const DoneBtn = styled.button`
  font-family: "Pangolin";
`

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
        <LogoChanger
          iconCard={iconCard}
          setIconCard={setIconCard}
        ></LogoChanger>
        {/* <DoneBtn>
          done
        </DoneBtn> */}
    </MainContent>
  );
}

export default Content;
