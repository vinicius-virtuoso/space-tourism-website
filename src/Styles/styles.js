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
  max-width: 1220px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1124px) {
    ${(props) =>
      props.destination &&
      `
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:100vh;
      gap:50px;
      margin: 0;
      flex-direction: row;
      
    `}
  }
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
  align-items: flex-end;
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
  background: var(--ff-color-light-opacity);
  opacity: 0.3;
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
export const Text = styled(motion.p)`
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

export const TitleDestiny = styled(Title)`
  display: flex;
  color: var(--ff-color-light-opacity);
  font-size: 1.3rem;
  gap: 2rem;
  text-align: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  span {
    font-family: var(--ff-sans-cond);
    display: inline-block;
    color: var(--ff-color-light);
    font-weight: bold;
    font-size: 1rem;
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    max-width: 80%;
    margin: 50px auto;
    text-align: left;
    text-align: flex-start;
    justify-content: flex-start;

    font-size: 1.9rem;
    span {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 1120px) {
    font-size: 1.6rem;
    letter-spacing: 3px;
    gap: 15px;

    span {
      font-size: 1.6rem;
      margin-right: 20px;
    }
  }
`;

export const Box = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1120px) {
    &:nth-of-type(2) {
      padding-top: 100px;
      align-items: flex-start;
    }
  }
`;

export const PlanetImg = styled(motion.img)`
  width: 100%;
  max-width: 165px;
  margin: 0 auto;
  transition: all 0.7s ease-in;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1120px) {
    max-width: 400px;
    align-self: flex-end;
    margin-top: 100px;
  }
`;

export const PlanetList = styled(motion.ul)`
  display: flex;
  gap: 30px;
  padding: 20px 20px 15px 20px;

  @media (min-width: 1120px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const PlanetItem = styled(motion.li)`
  font-size: 1rem;
  color: var(--ff-color-light-opacity);
  font-family: var(--ff-sans-cond);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: "";
    display: block;
    width: 0%;
    height: 3px;
    background: transparent;
    transition: all 0.3s ease;
    background-origin: center;
    margin-top: 20px;
  }

  ${(props) =>
    props.active &&
    `
    &:after {
      width: 100%;
      background: var(--ff-color-light-opacity);
    }
  `}

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1120px) {
    max-width: 90%;
  }
`;
export const TitlePlanetName = styled(motion.h3)`
  color: var(--ff-color-light);
  font-family: var(--ff-serif);
  font-weight: 300;
  font-size: 4rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 6rem;
  }

  @media (min-width: 1120px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 3px;
  background-color: var(--ff-color-light-opacity);
  max-width: 90%;
  margin: 5px 0;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1120px) {
    max-width: 470px;
  }
`;

export const Distance = styled(Text)`
  padding: 0px 10px;
  font-size: 1.5rem;
  text-transform: uppercase;
  span {
    display: block;
    font-size: 1.5rem;
    color: var(--ff-color-light);
    font-weight: normal;
    font-family: var(--ff-serif);
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
  }
`;

export const TextDistance = styled(Text)`
  line-height: 1.4;
  height: 100px;
  font-size: 0.875rem;

  span {
    color: var(--ff-color-light);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    height: 220px;
    max-width: 500px;
  }

  @media (min-width: 1120px) {
    font-size: 1.2rem;
    max-width: 420px;
    height: 120px;
    padding: 0;
    text-align: left;
    margin: 0;
  }
`;

export const Space = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 10px 0;

  p {
    padding: 0;
    margin: 10px 0;

    font-size: 1rem;
  }
`;
