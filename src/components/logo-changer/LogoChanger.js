import React from "react";
import styled from "styled-components";
import LogoView from "./LogoView";

const LogoChangerMain = styled.div`
  margin-top: 24px;
  width: 50%;
  height: auto;
  align-self: center;
  color: #616161;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoMain = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 8px;
  justify-content: space-between;
`;

function LogoChanger(props) {
  const logos = [
    "icon-card-3.png",
    "icon-card-3.png",
    "icon-card-2.png",
    "icon-card-3.png",
  ];

  return (
    <LogoChangerMain>
      Logo
      <LogoMain>
        {logos.map((fileName) => (
          <LogoView
            image={require(`../../resouses/icon-card/${fileName}`)}
            isSelected={fileName == 'icon-card-2.png'}
          ></LogoView>
        ))}
      </LogoMain>
    </LogoChangerMain>
  );
}

export default LogoChanger;
