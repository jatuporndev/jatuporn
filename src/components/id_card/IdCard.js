import React from "react";
import Barcode from "react-barcode";
import styled from "styled-components";

const MainCard = styled.div`
  height: 55mm;
  width: 93.6mm;
  max-width: 100%;
  background-color: aqua;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
`;

const LeftDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: center;
  align-items: center;
  padding: 16px;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 150px;
  object-fit: cover; 
`;

const RightDetail = styled.div``;

function IdCard(props) {
  const barcodeValue = "jatuporndev";

  return (
    <MainCard>
      <LeftDetail>
        <ProfileImage
          src="https://images.unsplash.com/photo-1662826312329-00bca2d79204?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          title="profile"
        />
        <Barcode
          value={barcodeValue}
          width={0.7}
          height={15}
          margin={0}
          marginTop={8}
          background="transparent"
          displayValue={false}
        />
      </LeftDetail>
      <RightDetail>b</RightDetail>
    </MainCard>
  );
}

export default IdCard;
