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
  max-width: 1400px;
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
