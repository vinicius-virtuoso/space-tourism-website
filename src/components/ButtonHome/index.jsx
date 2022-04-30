import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./style";

const ButtonHome = () => {
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <Button
      onClick={() => navigate("/destination")}
      animation={animation}
      delay={0.2}
    >
      Explore
    </Button>
  );
};

export default ButtonHome;
