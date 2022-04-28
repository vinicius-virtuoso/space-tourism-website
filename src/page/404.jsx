import { useEffect } from "react";
import { Section } from "../Styles/styles";
import { BoxFade } from "./../Styles/animates";

const NotFound = () => {
  useEffect(() => {
    console.warn("Not found our this page not exist.");
  }, []);

  return (
    <Section initial="hidden" animate="visible" variants={BoxFade}>
      404
    </Section>
  );
};

export default NotFound;
