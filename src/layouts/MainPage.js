import NavBar from "../components/NavBar"
import React from 'react';

function MainPage(props) {
  return (
    <>
    <NavBar></NavBar>
    <div>main test <a>{props.input}</a> </div>
    </>
  )
}

export default MainPage