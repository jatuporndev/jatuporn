import Content from "../components/contents/Content";
import MySkill from "../components/my-skill/MySkill";
import NavBar from "../components/NavBar";
import { React, useEffect, useState } from "react";
import Projects from "../components/projects/Projects";
import { getColor, getLogo } from "../utility/utility";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";

function MainPage(props) {
  let color = getColor();
  let icon = getLogo();

  const [colorCard, setColorCard] = useState(color);
  const [iconCard, setIconCard] = useState(icon);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar isScrolled={isScrolled}></NavBar>
      <Content
        colorCard={colorCard}
        setColorCard={setColorCard}
        iconCard={iconCard}
        setIconCard={setIconCard}
      ></Content>
      <About iconCard={iconCard} accentColor={colorCard}></About>
      <MySkill accentColor={colorCard}></MySkill>
      <Experience accentColor={colorCard} />
      <Projects colorCard={colorCard}></Projects>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
