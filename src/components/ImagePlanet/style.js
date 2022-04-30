import { motion } from "framer-motion";
import styled from "styled-components";

export const PlanetImg = styled(motion.img)`
  width: 100%;
  max-width: 165px;
  margin: 0 auto;
  transition: all 0.7s ease-in;

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
    max-width: 300px;
  }

  @media (min-width: 1120px) {
    max-width: 450px;
    align-self: flex-end;
    margin-top: 100px;
  }
`;
