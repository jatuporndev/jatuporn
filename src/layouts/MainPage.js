import Content from "../components/contents/Content";
import MySkill from "../components/my-skill/MySkill";
import NavBar from "../components/NavBar";
import { React, useEffect, useState } from "react";
import Projects from "../components/projects/Projects";
import { getColor } from "../utility/utility";
import Footer from "../components/footer/Footer";

function MainPage(props) {
  let color = getColor()
  const [isScrolled, setIsScrolled] = useState(false);
  const [colorCard, setColorCard] = useState(color);

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
      <Content colorCard={colorCard} setColorCard={setColorCard}></Content>
      <MySkill></MySkill>
      <Projects colorCard={colorCard}></Projects>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
