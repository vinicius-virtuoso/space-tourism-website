import Header from "./components/Header";
import MainRoutes from "./routes";
import GlobalStyle from "./Styles/global";
import { Section } from "./Styles/styles";
import data from "./services/data.json";

function App() {
  return (
    <Section>
      <GlobalStyle />
      <Header />
      <MainRoutes data={data} />
    </Section>
  );
}

export default App;
