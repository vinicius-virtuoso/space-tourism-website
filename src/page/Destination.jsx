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
  const [img, setImg] = useState(Moon);

  console.log(destiny);

  useEffect(() => {
    if (destiny.name === "Moon") {
      setImg(Moon);
    } else if (destiny.name === "Mars") {
      setImg(Mars);
    } else if (destiny.name === "Europa") {
      setImg(Europa);
    } else if (destiny.name === "Titan") {
      setImg(Titan);
    } else {
      setImg(Moon);
    }
  }, [destiny]);

  return (
    <SectionDestination initial="hidden" animate="visible" variants={BoxFade}>
      <Container>
        <Box>
          <TitleDestiny>
            <span>01</span> Pick your destination
          </TitleDestiny>
          <PlanetImg src={img} />
        </Box>
        <Box>
          <PlanetList>
            {destination.destinations.map((dest, index) => (
              <PlanetItem
                onClick={() => setDestiny(destination.destinations[index])}
                key={index}
              >
                {dest.name}
              </PlanetItem>
            ))}
          </PlanetList>
          <TitlePlanetName>{destiny.name}</TitlePlanetName>
          <TextDistance>{destiny.description}</TextDistance>
          <Separator />
          <Distance>
            avg, distance <span>{destiny.distance}</span>
          </Distance>
        </Box>
      </Container>
    </SectionDestination>
  );
};

export default Destination;
