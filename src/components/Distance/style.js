import styled from "styled-components";
import { motion } from "framer-motion";
import { Text } from "../../Styles/styles";

export const Space = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0px 0;

  p {
    padding: 0;
    margin: 5px 0;
    font-size: 1rem;
  }

  @media (min-width: 1120px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DistanceText = styled(Text)`
  padding: 0px 10px;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(30px);
  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}

  span {
    display: block;
    font-size: 1.5rem;
    color: var(--ff-color-light);
    font-weight: normal;
    font-family: var(--ff-serif);
    opacity: 0;
    transform: translateY(30px);
    ${(props) =>
      props.animation &&
      `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
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
`;
