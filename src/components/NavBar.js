import styled from "styled-components";
import logo from "../resouses/github.svg";

const Box = styled.div`
  padding: 26px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  /* align-self: center;
  align-items: center; */
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  font-family: "Pangolin";
`;

const NavIcon = styled.img`
  width: 44px;
  height: 44px;
`;
const SubTitle = styled.div`
  font-size: 14px;
`;

const date = new Date();

const options = { weekday: "long" };
const formattedDate = date.toLocaleDateString("en-TH", options);

function NavBar() {
  return (
    <Box>
      <HeaderContainer>
        <HeaderTitle onClick={() => console.log("test")}>JATUPORN</HeaderTitle>
        <SubTitle>Healthcheck, {formattedDate}</SubTitle>
      </HeaderContainer>
      <>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jatuporndev/jatuporn"
        >
          <NavIcon src={logo} width={32} height={32} alt="github" />
        </a>
      </>
    </Box>
  );
}

export default NavBar;
