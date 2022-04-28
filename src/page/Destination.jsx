import { SectionDestination } from "../Styles/styles";
import { BoxFade } from "./../Styles/animates";

const Destination = () => {
  return (
    <SectionDestination initial="hidden" animate="visible" variants={BoxFade}>
      Destination
    </SectionDestination>
  );
};

export default Destination;
