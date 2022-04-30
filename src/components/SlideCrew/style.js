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
  }
`;

export const Flex = styled(motion.div)`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const Select = styled(motion.span)`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ff-color-light-opacity);
  transition: all 0.3s ease;
  opacity: 0.5;

  ${(props) =>
    props.active &&
    `
    background:var(--ff-color-light);
    transform:scale(1.2);
    opacity:1;
    `}
`;
