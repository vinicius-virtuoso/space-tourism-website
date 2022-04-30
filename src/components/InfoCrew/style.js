import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerInfo = styled(motion.div)`
  padding: 0px 35px;
  min-height: 220px;
  text-align: center;
`;

export const RoleText = styled(motion.h4)`
  font-family: var(--ff-serif);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.2rem;
  color: var(--ff-color-light-opacity);
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
      opacity: 0.7;
      transform: translateY(0px);
    }
  }
`;

export const NameText = styled(motion.h2)`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0;
  color: var(--ff-color-light);
  font-family: var(--ff-serif);
  font-weight: 300;
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

export const BioText = styled(motion.p)`
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--ff-color-light-opacity);
  font-family: var(--ff-sans-normal);
  font-weight: normal;

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
      opacity: 0.7;
      transform: translateY(0px);
    }
  }
`;
