import {
  Container,
  SectionDestination,
  TitleDestiny,
  PlanetImg,
  Box,
  PlanetList,
  PlanetItem,
  TitlePlanetName,
  TextDistance,
  Separator,
  Distance,
  Space,
} from "../Styles/styles";
import { BoxFade } from "./../Styles/animates";
import destination from "../services/data.json";
import { useState, useEffect } from "react";

import Moon from "../image/destination/image-moon.png";
import Mars from "../image/destination/image-mars.png";
import Europa from "../image/destination/image-europa.png";
import Titan from "../image/destination/image-titan.png";

const Destination = () => {
  const [destiny, setDestiny] = useState(destination.destinations[0]);
  const [planet, setPlanet] = useState(<PlanetImg src={Moon} />);
  const [active, setActive] = useState({
    moon: true,
    mars: false,
    europa: false,
    titan: false,
  });

  useEffect(() => {
    if (destiny.name === "Moon") {
      setPlanet(<PlanetImg src={Moon} />);
      setActive({
        moon: true,
        mars: false,
        Europa: false,
        titan: false,
      });
    } else if (destiny.name === "Mars") {
      setPlanet(<PlanetImg src={Mars} />);
      setActive({
        moon: false,
        mars: true,
        europa: false,
        titan: false,
      });
    } else if (destiny.name === "Europa") {
      setPlanet(<PlanetImg src={Europa} />);
      setActive({
        moon: false,
        mars: false,
        europa: true,
        titan: false,
      });
    } else if (destiny.name === "Titan") {
      setPlanet(<PlanetImg src={Titan} />);
      setActive({
        moon: false,
        mars: false,
        europa: false,
        titan: true,
      });
    } else {
      setPlanet(<PlanetImg src={Moon} />);
      setActive({
        moon: false,
        mars: false,
        europa: false,
        titan: true,
      });
    }
  }, [destiny]);

  const handleDestination = (index) => {
    setDestiny(destination.destinations[index]);
  };

  return (
    <SectionDestination initial="hidden" animate="visible" variants={BoxFade}>
      <Container destination>
        <Box>
          <TitleDestiny>
            <span>01</span> Pick your destination
          </TitleDestiny>
          {planet}
        </Box>
        <Box>
          <PlanetList>
            {destination.destinations.map((dest, index) => (
              <PlanetItem
                onClick={() => handleDestination(index)}
                key={index}
                active={active[dest.name.toLowerCase()]}
              >
                {dest.name}
              </PlanetItem>
            ))}
          </PlanetList>
          <TitlePlanetName>{destiny.name}</TitlePlanetName>
          <TextDistance>{destiny.description}</TextDistance>
          <Separator />
          <Space>
            <Distance>
              avg, distance <span>{destiny.distance}</span>
            </Distance>
            <Distance>
              Est. travel time <span>{destiny.travel}</span>
            </Distance>
          </Space>
        </Box>
      </Container>
    </SectionDestination>
  );
};

export default Destination;
