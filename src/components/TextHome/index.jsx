import { ContainerText, TitleHome, ParagraphHome } from "./style";
import { useState, useEffect } from "react";

const TextHome = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <ContainerText>
      <TitleHome animation={animation} delay={0.2}>
        So, you want to travel to <span>Space</span>
      </TitleHome>
      <ParagraphHome animation={animation} delay={0.4}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </ParagraphHome>
    </ContainerText>
  );
};

export default TextHome;
