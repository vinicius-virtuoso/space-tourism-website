import styled from "styled-components";
import { motion } from "framer-motion";
import { Text } from "../../Styles/styles";

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

  opacity: 0;
  transform: translateY(30px);
  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}

  @keyframes showAnime {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const TextDistance = styled(Text)`
  line-height: 1.4;
  min-height: 120px;
  font-size: 0.875rem;
  opacity: 0;
  transform: translateY(30px);
  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}

  span {
    color: var(--ff-color-light);
  }

  @keyframes showAnime {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
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
