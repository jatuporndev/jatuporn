import styled from "styled-components";
import IdCard from "../id_card/IdCard";
import ColorChanger from "../color-changer/ColorChanger";
import LogoChanger from "../logo-changer/LogoChanger";
import { DoneBtn } from "../../styled/button";
import {
  BORDER_COLOR,
  MUTED_TEXT_COLOR,
  SURFACE_COLOR,
  TEXT_COLOR,
  setBackgroundColor,
} from "../../utility/utility";

const MainContent = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${setBackgroundColor()}

  @media (max-height: 430px) {
    height: auto;
    padding: 24px 0;
  }
`;

const Done = styled(DoneBtn)`
  margin-top: 36px;
`;

const ProfilePicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const ProfileOption = styled.button`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  border: ${(props) =>
    props.$isSelected ? `2px solid ${TEXT_COLOR}` : `1px solid ${BORDER_COLOR}`};
  background: ${SURFACE_COLOR};
  cursor: pointer;
  overflow: hidden;
`;

const ProfileOptionImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  overflow-clip-margin: unset;
`;

const ProfileLabel = styled.span`
  font-family: "Pangolin";
  font-size: 12px;
  color: ${MUTED_TEXT_COLOR};
`;

const ScrollIcon = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(90deg);
  margin-top: 12px;
`

function Content(props) {
  const { colorCard, setColorCard } = props;
  const { iconCard, setIconCard } = props;
  const { profileCard, setProfileCard } = props;
  const profiles = ["profile3.jpg", "profile1.jpg", "profile2.jpg", "cat.png"];

  function onProfileSelect(profile) {
    localStorage.setItem("profile", profile);
    setProfileCard(profile);
  }

  function onClick(e) {
    const id = 'about';
    const yOffset = -120; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
  

  return (
    <MainContent>
      <IdCard
        colorCard={colorCard}
        iconCard={iconCard}
        profileCard={profileCard}
      ></IdCard>
      <ProfilePicker aria-label="Profile image">
        <ProfileLabel>Profile</ProfileLabel>
        {profiles.map((profile) => (
          <ProfileOption
            key={profile}
            type="button"
            $isSelected={profile === profileCard}
            onClick={() => onProfileSelect(profile)}
            aria-label={`Use ${profile} as profile`}
          >
            <ProfileOptionImage
              src={require(`../../resouses/profile/${profile}`)}
              alt=""
            />
          </ProfileOption>
        ))}
      </ProfilePicker>
      <ColorChanger
        colorCard={colorCard}
        setColorCard={setColorCard}
      ></ColorChanger>
      <LogoChanger iconCard={iconCard} setIconCard={setIconCard}></LogoChanger>
      <Done
        $color={colorCard}
        onClick={onClick}
      >
        NEXT
      </Done>
      <ScrollIcon src={require("../../resouses/utility/can-scroll.gif")}></ScrollIcon>
    </MainContent>
  );
}

export default Content;
