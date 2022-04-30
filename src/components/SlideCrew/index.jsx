import { useState, useEffect } from "react";
import { ContainerSlide, ImgCrew, Select, Flex } from "./style";

import hurley from "../../image/crew/image-douglas-hurley.png";
import shuttleworth from "../../image/crew/image-mark-shuttleworth.png";
import ansari from "../../image/crew/image-anousheh-ansari.png";
import glover from "../../image/crew/image-victor-glover.png";
import InfoCrew from "./../InfoCrew/index";

const SlideCrew = ({ people, setPeople, crew }) => {
  const [animation, setAnimation] = useState(false);
  const timer = 0;
  const [images, setImages] = useState([
    { url: hurley, active: true },
    { url: shuttleworth, active: false },
    { url: ansari, active: false },
    { url: glover, active: false },
  ]);

  const handleImage = (index) => {
    setPeople(images[index].url);
  };

  useEffect(() => {
    if (people === "" || people === hurley) {
      setPeople(hurley);
      setImages([
        { url: hurley, active: true },
        { url: shuttleworth, active: false },
        { url: ansari, active: false },
        { url: glover, active: false },
      ]);
    } else if (people === shuttleworth) {
      setImages([
        { url: hurley, active: false },
        { url: shuttleworth, active: true },
        { url: ansari, active: false },
        { url: glover, active: false },
      ]);
    } else if (people === ansari) {
      setImages([
        { url: hurley, active: false },
        { url: shuttleworth, active: false },
        { url: ansari, active: true },
        { url: glover, active: false },
      ]);
    } else if (people === glover) {
      setImages([
        { url: hurley, active: false },
        { url: shuttleworth, active: false },
        { url: ansari, active: false },
        { url: glover, active: true },
      ]);
    }
  }, [people, setImages, setPeople]);

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, timer);
  }, [people]);

  return (
    <ContainerSlide>
      <ImgCrew src={people} alt={people} animation={animation} delay={0.4} />
      <Flex>
        {images.map((image, index) => (
          <Select
            key={index}
            active={image.active}
            onClick={() => handleImage(index)}
          />
        ))}
      </Flex>
      <InfoCrew people={people} crew={crew} />
    </ContainerSlide>
  );
};

export default SlideCrew;
