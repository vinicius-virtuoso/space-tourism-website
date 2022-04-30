import { SectionTechnology } from "../../Styles/styles";
import { BoxFade } from "../../Styles/animates";

const Technology = () => {
  return (
    <SectionTechnology initial="hidden" animate="visible" variants={BoxFade}>
      Technology
    </SectionTechnology>
  );
};

export default Technology;
