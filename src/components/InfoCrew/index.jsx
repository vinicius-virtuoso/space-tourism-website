import { useEffect, useState } from "react";
import { RoleText, NameText, ContainerInfo, BioText } from "./style";

const InfoCrew = ({ crew, people }) => {
  const [character, setCharacter] = useState(crew[0]);
  const [animation, setAnimation] = useState(false);

  const timer = 0;

  useEffect(() => {
    if (people.includes("douglas")) {
      setCharacter(crew[0]);
      setAnimation(false);
      setTimeout(() => {
        setAnimation(true);
      }, timer);
    } else if (people.includes("mark")) {
      setCharacter(crew[1]);
      setAnimation(false);
      setTimeout(() => {
        setAnimation(true);
      }, timer);
    } else if (people.includes("anousheh")) {
      setCharacter(crew[2]);
      setAnimation(false);
      setTimeout(() => {
        setAnimation(true);
      }, timer);
    } else if (people.includes("victor")) {
      setCharacter(crew[3]);
      setAnimation(false);
      setTimeout(() => {
        setAnimation(true);
      }, timer);
    }
  }, [crew, people]);

  return (
    <ContainerInfo>
      <RoleText animation={animation} delay={0.1}>
        {character.role}
      </RoleText>
      <NameText animation={animation} delay={0.3}>
        {character.name}
      </NameText>
      <BioText animation={animation} delay={0.5}>
        {character.bio}
      </BioText>
    </ContainerInfo>
  );
};

export default InfoCrew;
