import Content from "../components/contents/Content";
import MySkill from "../components/my-skill/MySkill";
import NavBar from "../components/NavBar";
import { React, useEffect, useState } from "react";

function MainPage(props) {
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
      <Content></Content>
      {/* <MySkill></MySkill> */}
    </>
  );
}

export default MainPage;
