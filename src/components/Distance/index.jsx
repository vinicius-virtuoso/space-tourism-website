import { Space, DistanceText } from "./style";
import { useState, useEffect } from "react";

const Distance = ({ destiny }) => {
  const [animation, setAnimation] = useState(false);
  const timer = 0;

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, timer);
  }, [destiny]);

  return (
    <Space>
      <DistanceText animation={animation} delay={0.2}>
        avg, distance{" "}
        <span animation={animation} delay={0.4}>
          {destiny.distance}
        </span>
      </DistanceText>
      <DistanceText animation={animation} delay={0.6}>
        Est. travel time{" "}
        <span animation={animation} delay={0.8}>
          {destiny.travel}
        </span>
      </DistanceText>
    </Space>
  );
};

export default Distance;
