import Background from "../components/Background";
import TopBar from "../components/TopBar";
import Body from "../components/Body";
import MCQ from "../components/MCQ";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const HTML = () => {
  const isDarkMode = useSelector(isDarkModeSelector);

  return (
    <Background>
      <TopBar />
      <Body>
        <MCQ quizType="JavaScript" />
      </Body>
    </Background>
  );
};

export default HTML;
