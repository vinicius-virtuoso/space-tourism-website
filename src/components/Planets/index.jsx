import { useState, useEffect } from "react";
import { PlanetList, PlanetItem } from "./style";

const Planets = ({ destinations, setDestiny, active }) => {
  const [animation, setAnimation] = useState(false);
  const timer = 0;

  const handleDestination = (index) => {
    setDestiny(destinations[index]);
  };

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, timer);
  }, []);

  return (
    <PlanetList>
      {destinations.map((dest, index) => (
        <PlanetItem
          onClick={() => handleDestination(index)}
          key={index}
          active={active[dest.name.toLowerCase()]}
          animation={animation}
          delay={index / 10}
        >
          {dest.name}
        </PlanetItem>
      ))}
    </PlanetList>
  );
};

export default Planets;
