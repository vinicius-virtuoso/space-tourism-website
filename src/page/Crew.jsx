import { SectionCrew } from "../Styles/styles";
import { BoxFade } from "./../Styles/animates";

const Crew = () => {
  return (
    <SectionCrew initial="hidden" animate="visible" variants={BoxFade}>
      Crew
    </SectionCrew>
  );
};

export default Crew;
