import Background from "./components/Background";
import Hero from "./components/Hero";
import HeroBar from "./components/HeroBar";
import Main from "./components/Main";
import Options from "./components/Options";

const App = () => {
  return (
    <>
      <Background>
        <HeroBar />
        <Main>
          <Hero />
          <Options />
        </Main>
      </Background>
    </>
  );
};
export default App;
