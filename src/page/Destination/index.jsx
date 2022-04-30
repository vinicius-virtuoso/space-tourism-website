import { useState } from "react";
import {
  Container,
  SectionDestination,
  TitlePages,
  Box,
  Separator,
} from "../../Styles/styles";
import { BoxFade } from "../../Styles/animates";
import ImagePlanet from "../../components/ImagePlanet";
import DescriptionPlanet from "./../../components/DescriptionPlanet";
import Distance from "../../components/Distance";
import Planets from "./../../components/Planets/index";

const Destination = ({ destinations }) => {
  const [destiny, setDestiny] = useState(destinations[0]);
  const [active, setActive] = useState({
    moon: true,
    mars: false,
    europa: false,
    titan: false,
  });

  return (
    <SectionDestination initial="hidden" animate="visible" variants={BoxFade}>
      <Container destination>
        <Box>
          <TitlePages>
            <span>01</span> Pick your destination
          </TitlePages>
          <ImagePlanet destiny={destiny} setActive={setActive} />
        </Box>
        <Box>
          <Planets
            destinations={destinations}
            setDestiny={setDestiny}
            active={active}
          />
          <DescriptionPlanet destiny={destiny} />
          <Separator />
          <Distance destiny={destiny} />
        </Box>
      </Container>
    </SectionDestination>
  );
};

export default Destination;
