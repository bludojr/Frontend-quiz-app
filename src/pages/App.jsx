import Background from "../components/Background";
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";
import Body from "../components/Body";
import Options from "../components/QuizSelect";

const App = () => {
  return (
    <>
      <Background>
        <TopBar />
        <Body>
          <Hero />
          <Options />
        </Body>
      </Background>
    </>
  );
};
export default App;
