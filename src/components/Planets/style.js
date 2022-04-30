import styled from "styled-components";
import { motion } from "framer-motion";

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
  opacity: 0;
  transform: translateY(30px);

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

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1120px) {
    max-width: 90%;
  }
`;
