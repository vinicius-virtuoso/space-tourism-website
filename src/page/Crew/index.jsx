import {
  Container,
  DisplayOrder,
  SectionCrew,
  TitlePages,
} from "../../Styles/styles";
import { BoxFade } from "../../Styles/animates";
import SlideCrew from "../../components/SlideCrew";

import { useState } from "react";
import InfoCrew from "./../../components/InfoCrew/index";

const Crew = ({ crew }) => {
  const [people, setPeople] = useState("");

  return (
    <SectionCrew initial="hidden" animate="visible" variants={BoxFade}>
      <Container>
        <TitlePages crew>
          <span>02</span> Meet your crew
        </TitlePages>
        <DisplayOrder>
          <SlideCrew people={people} setPeople={setPeople} />
          <InfoCrew people={people} crew={crew} />
        </DisplayOrder>
      </Container>
    </SectionCrew>
  );
};

export default Crew;
