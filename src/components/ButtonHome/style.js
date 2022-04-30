import styled from "styled-components";
import { motion } from "framer-motion";

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
  opacity: 0;
  transform: translateY(30px);
  ${(props) =>
    props.animation &&
    `animation: showAnime 0.5s ${props.delay}s ease-in-out forwards;`}
  @keyframes
    showAnime {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

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
