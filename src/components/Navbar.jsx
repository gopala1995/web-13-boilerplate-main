import React from "react";
import {Link} from "react-router-dom"

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  }

  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      {links.map((link, index) => {
        return <Link key={index} to={link.link}>{link.title}</Link>
      })}
    </>
  );

  //map through the link ad display it in header
};
