import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigation = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>
  })
  console.log(navigation);

  return <nav>{navigation}</nav>;
  // return <nav>
  //   <a href="#home">home</a>
  //   <a href="#about">about</a>
  //   <a href="#projects">projects</a>
  // </nav>;
}

export default NavBar;
