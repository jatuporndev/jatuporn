import React from "react";
import styled from "styled-components";
import LogoView from "./LogoView";

const LogoChangerMain = styled.div`
  font-family: "Pangolin";
  margin-top: 8px;
  width: 50%;
  height: auto;
  align-self: center;
  color: #616161;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const LogoMain = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 8px;
`;

function LogoChanger(props) {
  const { iconCard, setIconCard } = props

  const logos = [
    "cat.png",
    "cat-eat.jpg",
    "car-ramen.png",
    "cat-ah.png",
    "fish.png",
  ];

  return (
    <LogoChangerMain>
      Logo
      <LogoMain>
        {logos.map((fileName, index) => (
          <LogoView
            key={index} 
            image={require(`../../resouses/icon-card/${fileName}`)}
            fileName={fileName}
            isSelected={fileName === iconCard}
            setIconCard={setIconCard}
          ></LogoView>
        ))}
      </LogoMain>
    </LogoChangerMain>
  );
}

export default LogoChanger;
