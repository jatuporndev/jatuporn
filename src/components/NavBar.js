import styled from "styled-components";
import logo from "../resouses/github.svg";

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Box = styled.div`
  padding: 0 24px;
  padding-top: 24px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: white;
`;

const HeaderContainer = styled.div`
  display: flex;
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
  font-size: 12px;
  line-height: 12px;
`;

const UnderLine = styled.div`
  width: ${(props) => (props.$isScrolled ? "100%" : "0%")};
  margin: 0 auto; 
  height: 2px;
  background-color: #e0e0e0;
  transition: width 300ms;
`;

function NavBar({ isScrolled }) {
  return (
    <Container>
      <Box>
        <HeaderContainer>
          <HeaderTitle onClick={() => console.log("test")}>JATUPORN</HeaderTitle>
          <SubTitle>Healthcheck</SubTitle>
        </HeaderContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jatuporndev/jatuporn"
        >
          <NavIcon src={logo} alt="github" />
        </a>
      </Box>
      <UnderLine $isScrolled={isScrolled}></UnderLine>
    </Container>
  );
}

export default NavBar;
