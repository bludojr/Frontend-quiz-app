import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";
import Background from "./Background";
import Body from "./Body";
import TopBar from "./TopBar";

const QuizResult = ({ score, totalQuestions, quizType }) => {
  const isDarkMode = useSelector(isDarkModeSelector);
  const navigate = useNavigate();

  return (
    <Background>
      <TopBar />
      <Body>
        <div className="flex flex-col max-h-200 items-center justify-center w-full space-y-8 transition-all duration-1000">
          <h1 className={`text-6xl font-bold ${isDarkMode ? "text-white" : "text-dark-gray"}`}>
            Quiz Complete!
          </h1>
          
          <div className="flex flex-col items-center space-y-4">
            <p className={`text-4xl font-medium ${isDarkMode ? "text-white" : "text-dark-gray"}`}>
              {quizType}
            </p>
            <p className={`text-2xl ${isDarkMode ? "text-white" : "text-dark-gray"}`}>
              You scored {score} out of {totalQuestions}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className={`pl-6 flex space-x-5 shadow-2xl hover:opacity-55 
              ${isDarkMode ? "bg-soft-gray" : "bg-nice"}
              text-white h-20 w-64 rounded-3xl transition-all duration-1000 
              items-center justify-center`}
          >
            <span className={`text-xl font-medium ${isDarkMode ? "text-white" : "text-dark-gray"}`}>
              Play Again
            </span>
          </button>
        </div>
      </Body>
    </Background>
  );
};

export default QuizResult;