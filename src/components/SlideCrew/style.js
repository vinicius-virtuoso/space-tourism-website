import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerSlide = styled(motion.div)`
  width: 100%;
  max-width: 80%;
  margin: 20px;
  min-height: 220px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1120px) {
    display: grid;
    grid-template-areas:
      "text img"
      "selects img";
    width: 100%;
    overflow: initial;
    grid-template-columns: 65% 35%;
    justify-items: space-between;
    grid-template-rows: 98% auto;
  }
`;

export const ImgCrew = styled(motion.img)`
  width: 100%;
  max-width: 80%;
  height: 220px;
  object-fit: contain;
  border-bottom: 2px solid var(--bg-acrylic);
  opacity: 0;
  transform: translateY(30px);

  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}

  @keyframes showAnime {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  @media (min-width: 768px) {
    order: 2;
    margin: 0;
    max-width: 90%;
    min-height: 45vh;
  }
  @media (min-width: 1120px) {
    width: 50%;
    grid-area: img;
    order: 0;
    position: absolute;
    bottom: 0;
    right: -5%;
    min-height: 75vh;
  }
`;

export const Flex = styled(motion.div)`
  display: flex;
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 20px 50px 20px;
    order: 1;
  }

  @media (min-width: 1120px) {
    grid-area: selects;
    padding: 0;
    margin: 50px 0px 0px 0px;
  }
`;

export const Select = styled(motion.span)`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ff-color-light-opacity);
  transition: all 0.3s ease;
  opacity: 0.5;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    background:var(--ff-color-light);
    transform:scale(1.2);
    opacity:1;
    `}

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin: 20px 0;
  }

  @media (min-width: 1120px) {
    width: 14px;
    height: 14px;
  }
`;
