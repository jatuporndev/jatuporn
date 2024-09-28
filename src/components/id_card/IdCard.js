import React from "react";
import Barcode from "react-barcode";
import styled from "styled-components";

const MainCard = styled.div`
  height: 55mm;
  width: 93.6mm;
  max-width: 100%;
  background-color: #beffff;
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
  height: 80px;
  justify-content: center;
`;

const IconImage = styled.img`
  max-width: 90%;
  height: 70px;
  object-fit: contain;
  align-self: center;
`;

const Dot = styled.div`
  font-family: "Pangolin";
  font-size: 12px;
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-around;
`;
const TextTitle = styled.div`
  font-size: 12px;
`;

const TextValue = styled.div`
  font-size: 16px;
`;

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
      <RightDetail>
        <IconCardBox>
          <IconImage
            src={require("../../resouses/icon-card/icon-card.png")}
          ></IconImage>
        </IconCardBox>
        <Dot>- - - - - - - - - - - - - - - - - - - - - - - -</Dot>
        <DetailBox>
          {setTextValue("Name", "JATUPORN")}
          {setTextValue("LastName", "SAENTHIP")}
          {setTextValue("NickName", "OHM")}
          {setTextValue("Pre", "MR.")}
        </DetailBox>
      </RightDetail>
    </MainCard>
  );
}

function setTextValue(key, value) {
  return (
    <TextTitle>
      {key}
      <TextValue>{value}</TextValue>
    </TextTitle>
  );
}
export default IdCard;
