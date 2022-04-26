import { useEffect } from "react";
import { Section } from "../Styles/styles";

const NotFound = () => {
  useEffect(() => {
    console.warn("Not found our this page not exist.");
  }, []);

  return <Section>404</Section>;
};

export default NotFound;
