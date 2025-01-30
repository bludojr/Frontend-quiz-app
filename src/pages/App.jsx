import Background from "../components/Background"
import Hero from "../components/Hero";
import HeroBar from "../components/HeroBar";
import Body from "../components/Body";
import Options from "../components/QuizSelect";

const App = () => {
  return (
    <>
      <Background>
        <HeroBar />
        <Body>
          <Hero />
          <Options />
        </Body>
      </Background>
    </>
  );
};
export default App;
