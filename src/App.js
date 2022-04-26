import Header from "./components/Header";
import MainRoutes from "./routes";
import GlobalStyle from "./Styles/global";
import { Section } from "./Styles/styles";

function App() {
  return (
    <Section>
      <GlobalStyle />
      <Header />
      <MainRoutes />
    </Section>
  );
}

export default App;
