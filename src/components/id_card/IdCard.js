import React from "react";
import Barcode from "react-barcode";
import styled from "styled-components";
import DetailCardValue from "./DetailCardValue";

const MainCard = styled.div`
  height: 55mm;
  width: 93.6mm;
  max-width: 100%;
  background-color: ${(props) => props.$color};
  transition: background-color ease 0.4s;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
`;

const LeftDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-self: self-end;
  align-items: center;
  padding: 16px;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 142px;
  border-radius: 1px;
  max-height: 100%;
  border: 1px solid black;
  background-color: white;
  object-fit: cover;
  overflow-clip-margin: unset;
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
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: contain;
  padding: 1px;
  background-color: white;
`;

const TextTitle = styled.div`
  height: 28px;
  line-height: 32px;
  text-align: center;
`;

const Dot = styled.div`
  font-family: "Pangolin";
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 2px;
  white-space: nowrap;

  @media (max-width: 374px) {
    font-size: 10px;
  }
`;

const Under = styled.div`
  font-family: "Pangolin";
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
  margin-top: 4px;
  width: 100%;
  text-align: center;

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
  const { colorCard, iconCard } = props;
  const barcodeValue = "jatuporndev";

  return (
    <MainCard $color={colorCard}>
      <LeftDetail>
        <ProfileImage
          src={require("../../resouses/profile/profile3.jpg")}
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
          <TextTitle>PERSONAL ID CARD</TextTitle>
          <Icon src={require(`../../resouses/icon-card/${iconCard}`)} />
        </IconCardBox>
        <Dot>- - - - - - - - - - - - - - - - - - - - - - - -</Dot>
        <DetailBox>
          <DetailCardValue title="Name" value="JATUPORN"></DetailCardValue>
          <DetailCardValue title="LastName" value="SAENTHIP"></DetailCardValue>
          <DetailCardValue title="NickName" value="OHM"></DetailCardValue>
          <DetailCardValue title="DOB" value="1999"></DetailCardValue>
          <DetailCardValue title="Sex" value="M"></DetailCardValue>
          <DetailCardValue title="Nationality" value="THAI"></DetailCardValue>
        </DetailBox>
        <Under> </Under>
      </RightDetail>
    </MainCard>
  );
}

export default IdCard;
