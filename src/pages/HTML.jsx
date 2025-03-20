import Background from "../components/Background";
import TopBar from "../components/TopBar";
import Body from "../components/Body";
import MCQ from "../components/MCQ";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";
import { selectCurrentQuestionIndex } from "../features/questionsSlice";

const HTML = () => {
  const isDarkMode = useSelector(isDarkModeSelector);
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  return (
    <Background>
      <TopBar />
      <Body>
        <MCQ quizType="HTML"/>
      </Body>
    </Background>
  );
};

export default HTML;
