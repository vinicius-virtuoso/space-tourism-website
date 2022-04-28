import styled from "styled-components";
import { motion } from "framer-motion";

import ImgHomeDesktop from "../image/home/background-home-desktop.jpg";
import ImgHomeTablet from "../image/home/background-home-tablet.jpg";
import ImgHomeMobile from "../image/home/background-home-mobile.jpg";

import ImgDestinationDesktop from "../image/destination/background-destination-desktop.jpg";
import ImgDestinationTablet from "../image/destination/background-destination-tablet.jpg";
import ImgDestinationMobile from "../image/destination/background-destination-mobile.jpg";

import ImgCrewDesktop from "../image/crew/background-crew-desktop.jpg";
import ImgCrewTablet from "../image/crew/background-crew-tablet.jpg";
import ImgCrewMobile from "../image/crew/background-crew-mobile.jpg";

import ImgTechnologyDesktop from "../image/technology/background-technology-desktop.jpg";
import ImgTechnologyTablet from "../image/technology/background-technology-tablet.jpg";
import ImgTechnologyMobile from "../image/technology/background-technology-mobile.jpg";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  ${(props) => (props.w ? `width:${props.w}%;` : "width:100%;")}

  @media (min-width: 769px) {
    z-index: 999;
    width: 48%;
    padding-left: 15px;
  }
  @media (min-width: 1024px) {
    width: 68%;
    padding-left: 0px;
  }
`;

export const Section = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled(motion.div)`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 35%;
  align-content: center;
  justify-items: center;
  padding-top: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    gap: 40px;
    padding-top: 80px;
    div {
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
  @media (min-width: 1200px) {
    height: 70vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: flex-end;

    div {
      justify-content: flex-start;
      text-align: left;
    }
  }
`;

export const SectionHome = styled(Section)`
  background-image: url(${ImgHomeMobile});
  @media (min-width: 768px) {
    background-image: url(${ImgHomeTablet});
  }
  @media (min-width: 1220px) {
    background-image: url(${ImgHomeDesktop});
  }
`;

export const SectionDestination = styled(Section)`
  background-image: url(${ImgDestinationMobile});
  @media (min-width: 768px) {
    background-image: url(${ImgDestinationTablet});
  }
  @media (min-width: 1220px) {
    background-image: url(${ImgDestinationDesktop});
  }
`;

export const SectionCrew = styled(Section)`
  background-image: url(${ImgCrewMobile});
  @media (min-width: 768px) {
    background-image: url(${ImgCrewTablet});
  }
  @media (min-width: 1220px) {
    background-image: url(${ImgCrewDesktop});
  }
`;

export const SectionTechnology = styled(Section)`
  background-image: url(${ImgTechnologyMobile});
  @media (min-width: 768px) {
    background-image: url(${ImgTechnologyTablet});
  }
  @media (min-width: 1220px) {
    background-image: url(${ImgTechnologyDesktop});
  }
`;

export const Line = styled(motion.span)`
  width: 100%;
  height: 2px;
  background: #d8d8d891;
  border-radius: 2px;
`;

export const Title = styled(motion.h1)`
  font-family: var(--ff-sans-cond);
  font-weight: 300;
  font-size: 1.5rem;

  color: var(--ff-color-light-opacity);
  text-align: center;
  max-width: 300px;
  text-transform: uppercase;
  letter-spacing: 2px;

  span {
    font-size: 6rem;
    display: flex;
    font-family: var(--ff-serif);

    letter-spacing: 1px;
    color: var(--ff-color-light);
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    max-width: 90%;
    margin: 0 auto;

    span {
      font-size: 10.5rem;
      margin: 0 auto;
    }
  }
  @media (min-width: 1200px) {
    text-align: left;
    width: 100;
    max-width: 100%;
    align-items: flex-start;
    font-size: 2rem;
    padding: 0px 10px;
    span {
      margin-left: -10px;
      font-size: 11rem;
    }
  }
`;
export const Text = styled(motion.h2)`
  font-family: var(--ff-sans-cond);
  font-weight: 300;
  font-size: 0.875rem;
  color: var(--ff-color-light);
  text-align: center;
  width: 100%;
  padding: 10px;
  max-width: 90%;
  line-height: 2;
  color: var(--ff-color-light-opacity);

  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 2rem;
    max-width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    text-align: left;
    width: 100%;
    max-width: 550px;
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Button = styled(motion.button)`
  width: 150px;
  height: 150px;
  background: var(--ff-color-light);
  border-radius: 50%;
  border: 0;
  font-family: var(--ff-serif);
  color: var(--body-color);
  letter-spacing: 1px;
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: all 0.4s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px 5px rgba(223, 223, 223, 0.5);
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    width: 280px;
    height: 280px;
  }
`;
