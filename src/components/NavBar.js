import styled from "styled-components";
import logo from "../resouses/github.svg";
import { BORDER_COLOR, TEXT_COLOR } from "../utility/utility";

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media (max-height: 430px) {
    position: static;
  }
`;

const Box = styled.div`
  position: relative;
  padding: 0 24px;
  padding-top: 24px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: rgba(255, 254, 248, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(props) => (props.$isScrolled ? BORDER_COLOR : "transparent")};
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 6px 18px rgba(70, 55, 25, 0.035)" : "none"};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  font-family: "Pangolin";
  color: ${TEXT_COLOR};
`;

const NavLinks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: "Pangolin";
  font-size: 14px;
  color: ${TEXT_COLOR};

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavIcon = styled.img`
  width: 38px;
  height: 38px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: #6f6a60;
`;

const UnderLine = styled.div`
  width: ${(props) => (props.$isScrolled ? "100%" : "0%")};
  margin: 0 auto; 
  height: 2px;
  background-color: ${BORDER_COLOR};
  transition: ${(props) => (props.$isScrolled ? 'width 1500ms' : 'width 700ms')};

`;

function NavBar({ isScrolled }) {
  function scrollToId(id) {
    const element = document.getElementById(id);
    if (!element) return;

    // Offset for the fixed header.
    const yOffset = -110;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <Container>
      <Box $isScrolled={isScrolled}>
        <HeaderContainer>
          <HeaderTitle onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            JATUPORN
          </HeaderTitle>
          <SubTitle>healthcheck</SubTitle>
        </HeaderContainer>

        <NavLinks>
          <NavLinkButton
            type="button"
            onClick={() => scrollToId("about")}
          >
            ABOUT
          </NavLinkButton>
          <NavLinkButton
            type="button"
            onClick={() => scrollToId("myskill")}
          >
            SKILLS
          </NavLinkButton>
          <NavLinkButton
            type="button"
            onClick={() => scrollToId("experience")}
          >
            EXPERIENCE
          </NavLinkButton>
          <NavLinkButton
            type="button"
            onClick={() => scrollToId("projects")}
          >
            PROJECTS
          </NavLinkButton>
        </NavLinks>

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
