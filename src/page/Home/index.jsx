import TextHome from "../../components/TextHome";
import { BoxFade } from "../../Styles/animates";
import { Column, Container, SectionHome } from "../../Styles/styles";
import ButtonHome from "../../components/ButtonHome/index";

const Home = () => {
  return (
    <SectionHome initial="hidden" animate="visible" variants={BoxFade}>
      <Container>
        <Column>
          <TextHome />
          <ButtonHome />
        </Column>
      </Container>
    </SectionHome>
  );
};

export default Home;
