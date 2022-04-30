import {
  Box,
  Container,
  DisplayOrder,
  SectionCrew,
  TitlePages,
} from "../../Styles/styles";
import { BoxFade } from "../../Styles/animates";
import SlideCrew from "../../components/SlideCrew";

import { useState } from "react";

const Crew = ({ crew }) => {
  const [people, setPeople] = useState("");

  return (
    <SectionCrew initial="hidden" animate="visible" variants={BoxFade}>
      <Container crew>
        <Box>
          <TitlePages crew>
            <span>02</span> Meet your crew
          </TitlePages>
        </Box>
        <DisplayOrder>
          <SlideCrew people={people} setPeople={setPeople} crew={crew} />
        </DisplayOrder>
      </Container>
    </SectionCrew>
  );
};

export default Crew;
