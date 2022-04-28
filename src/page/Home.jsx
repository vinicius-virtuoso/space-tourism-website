import { useNavigate } from "react-router-dom";
import { BoxFade } from "../Styles/animates";
import { Button, Column, Container, SectionHome, Text } from "../Styles/styles";
import { Title } from "./../Styles/styles";

const Home = () => {
  const navigation = useNavigate();

  return (
    <SectionHome initial="hidden" animate="visible" variants={BoxFade}>
      <Container>
        <Column>
          <div>
            <Title>
              So, you want to travel to <span>Space</span>
            </Title>
            <Text>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Text>
          </div>
          <Button onClick={() => navigation("/destination")}>Explore</Button>
        </Column>
      </Container>
    </SectionHome>
  );
};

export default Home;
