import { PlanetImg } from "./style";
import { useState, useEffect } from "react";

import Moon from "../../image/destination/image-moon.png";
import Mars from "../../image/destination/image-mars.png";
import Europa from "../../image/destination/image-europa.png";
import Titan from "../../image/destination/image-titan.png";

const ImagePlanet = ({ destiny, setActive }) => {
  const [planet, setPlanet] = useState(Moon);
  const [animation, setAnimation] = useState(false);
  const timer = 0;

  useEffect(() => {
    if (destiny.name === "Moon") {
      setPlanet(Moon);
      setActive({
        moon: true,
        mars: false,
        Europa: false,
        titan: false,
      });
    } else if (destiny.name === "Mars") {
      setPlanet(Mars);
      setActive({
        moon: false,
        mars: true,
        europa: false,
        titan: false,
      });
    } else if (destiny.name === "Europa") {
      setPlanet(Europa);
      setActive({
        moon: false,
        mars: false,
        europa: true,
        titan: false,
      });
    } else if (destiny.name === "Titan") {
      setPlanet("");
      setPlanet(Titan);
      setActive({
        moon: false,
        mars: false,
        europa: false,
        titan: true,
      });
    } else {
      setPlanet("");
      setPlanet(Moon);
      setActive({
        moon: false,
        mars: false,
        europa: false,
        titan: true,
      });
    }
  }, [destiny, setActive]);

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, timer);
  }, [planet]);

  return (
    <PlanetImg src={planet} alt={planet} animation={animation} delay={0.2} />
  );
};

export default ImagePlanet;
