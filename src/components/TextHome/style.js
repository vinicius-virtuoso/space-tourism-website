import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleHome = styled(motion.h1)`
  font-family: var(--ff-sans-cond);
  font-weight: 300;
  font-size: 1.5rem;

  color: var(--ff-color-light-opacity);
  text-align: center;
  max-width: 300px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(30px);

  span {
    font-size: 6rem;
    display: flex;
    font-family: var(--ff-serif);

    letter-spacing: 1px;
    color: var(--ff-color-light);
    ${(props) =>
      props.animation2 &&
      `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}
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

export const ContainerText = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const ParagraphHome = styled(motion.p)`
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
  opacity: 0;
  transform: translateY(30px);
  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}
  @keyframes
    showAnime {
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
