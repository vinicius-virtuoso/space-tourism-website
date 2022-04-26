import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled(motion.header)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 70px;
  background: transparent;
  top: 0;
  left: 0;

  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (min-width: 800px) {
    height: 100px;
    padding: 0;
    top: 35px;
  }
`;

export const Logo = styled(motion.img)`
  max-width: 75px;

  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  @media (min-width: 800px) {
    width: 185px;
    object-fit: contain;
  }
`;

export const Bars = styled(Logo)`
  position: relative;
  z-index: 999;
  max-width: 35px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Nav = styled(motion.nav)`
  position: absolute;
  opacity: 0;
  width: 0%;
  background: rgba(75, 75, 75, 0.2);
  backdrop-filter: blur(10px);
  top: 0;
  right: 0;
  height: 100vh;
  animation: CloseMenu 0.3s ease-in forwards;
  opacity: 0;
  overflow: hidden;
  ${(props) => props.open && "animation: OpenMenu .3s ease-in forwards;"}

  @keyframes OpenMenu {
    0% {
      opacity: 0;
      width: 0%;
    }
    100% {
      opacity: 1;
      width: 75%;
    }
  }
  @keyframes CloseMenu {
    0% {
      opacity: 1;
      width: 75%;
    }
    100% {
      opacity: 0;
      width: 0%;
    }
  }

  @media (min-width: 800px) {
    opacity: 1;
    position: initial;
    height: 100px;
    animation: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    position: absolute;
    width: 70%;
    padding-left: 60px;
    padding-right: 15px;
  }

  @media (min-width: 1200px) {
    width: 51%;
    padding-left: 60px;
    padding-right: 0px;
  }
`;
export const List = styled(motion.ul)`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: 800px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const Item = styled(motion.li)`
  width: 100%;
  max-width: 80%;

  margin: 0 auto;

  @media (min-width: 800px) {
    width: auto;
    height: auto;
    margin: 0;
  }
`;

export const LinkItem = styled(NavLink)`
  font-family: var(--ff-sans-cond);
  font-weight: normal;
  font-size: 1.4rem;
  color: #f0f0f0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  gap: 15px;
  white-space: nowrap;

  span {
    color: #ffffff;
    font-weight: bold;
  }

  &:after {
    content: "";
    width: 0;
    display: block;
    background: #ffffffa9;
    height: 4px;
    transition: 0.3s ease-in-out;
    opacity: 0;
    border-radius: 2px;
  }
  &.active:after {
    opacity: 1;
    width: 25%;
  }

  @media (min-width: 800px) {
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;

    &:after {
      width: 0%;
      position: absolute;
      bottom: 0;
    }
    &.active:after {
      opacity: 1;
      width: 80px;
    }
  }
`;

export const BtnMenu = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
`;
