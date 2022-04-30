import { useState, useEffect } from "react";
import { TitlePlanetName, TextDistance } from "./style";

const DescriptionPlanet = ({ destiny }) => {
  const [animation, setAnimation] = useState(false);
  const timer = 0;
  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, timer);
  }, [destiny]);
  return (
    <>
      <TitlePlanetName animation={animation} delay={0.2}>
        {destiny.name}
      </TitlePlanetName>
      <TextDistance animation={animation} delay={0.4}>
        {destiny.description}
      </TextDistance>
    </>
  );
};

export default DescriptionPlanet;
