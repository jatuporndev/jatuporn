import React from "react";
import Barcode from "react-barcode";
import styled from "styled-components";
import DetailCardValue from "./DetailCardValue";

const MainCard = styled.div`
  height: 55mm;
  width: 93.6mm;
  max-width: 100%;
  background-color: ${(props) => props.$color};
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
  max-height: 100%;
  border: 1px solid black;
  object-fit: cover;
`;

const RightDetail = styled.div`
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconCardBox = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const IconImage = styled.img`
  max-width: 100%;
  height: 75px;
  object-fit: contain;
  align-self: center;
  object-fit: contain;
`;

const Dot = styled.div`
  font-family: "Pangolin";
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;

  @media (max-width: 374px) {
    font-size: 10px;
  }
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
`;

function IdCard(props) {
  const { colorCard } = props;
  const barcodeValue = "jatuporndev";

  return (
    <MainCard $color={colorCard}>
      <LeftDetail>
        <ProfileImage
          src={require("../../resouses/profile/profile1.jpg")}
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
      <RightDetail>
        <IconCardBox>
          <IconImage
            src={require("../../resouses/icon-card/icon-card-2.png")}
          ></IconImage>
        </IconCardBox>
        <Dot>- - - - - - - - - - - - - - - - - - - - - - - -</Dot>
        <DetailBox>
          <DetailCardValue title="Name" value="JATUPORN"></DetailCardValue>
          <DetailCardValue title="LastName" value="SAENTHIP"></DetailCardValue>
          <DetailCardValue title="NickName" value="OHM"></DetailCardValue>
          <DetailCardValue title="DOB" value="1999"></DetailCardValue>
        </DetailBox>
      </RightDetail>
    </MainCard>
  );
}

export default IdCard;
