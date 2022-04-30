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
  z-index: 999;

  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (min-width: 768px) {
    height: 100px;
    padding: 20px;
    top: 0px;
  }

  @media (min-width: 1120px) {
    position: fixed;
    top: 35px;
    &:before {
      content: "";
      width: 50%;
      height: 100%;
      position: absolute;
      z-index: -1;
      right: 0;
      background: var(--bg-acrylic);
      backdrop-filter: blur(10px);
    }
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1320px;

  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
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
  @media (min-width: 1120px) {
    margin-right: 20px;
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
  background: var(--bg-acrylic);
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

  @media (min-width: 768px) {
    opacity: 1;
    position: initial;
    height: 100px;
    animation: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    position: absolute;
    width: auto;
    padding-left: 30px;
    padding-right: 20px;
  }

  @media (min-width: 1120px) {
    width: 100%;
    position: initial;
    background: transparent;
    backdrop-filter: none;
    padding: 0;
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

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
  }

  @media (min-width: 1200px) {
    gap: 50px;
  }
  @media (min-width: 1120px) {
    justify-content: flex-start;
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
  color: var(--ff-color-light);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  gap: 15px;
  white-space: nowrap;

  span {
    color: var(--ff-color-light);
    font-weight: bold;
  }

  &:after {
    content: "";
    width: 0;
    display: block;
    background: var(--ff-color-light);
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
  @media (min-width: 1200px) {
    &:after {
      width: 0%;
      position: absolute;
      bottom: 0;
    }
    &.active:after {
      opacity: 1;
      width: 100%;
    }
  }
`;

export const BtnMenu = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
`;

export const Line = styled(motion.span)`
  width: 95%;
  height: 2px;
  background: var(--ff-color-light-opacity);
  opacity: 0.3;
  border-radius: 2px;

  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1120px) {
    display: block;
    margin-left: 15px;
  }
`;
