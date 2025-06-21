import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";
import Background from "../components/Background";
import Body from "../components/Body";
import TopBar from "../components/TopBar";

const icons = [
  {
    name: "HTML",
    iconClass: "bg-icon-html bg-icon-html-opacity",
    path: "HTML",
    src: htmlIcon,
  },
  {
    name: "CSS",
    iconClass: "bg-icon-css bg-icon-css-opacity",
    path: "CSS",
    src: cssIcon,
  },
  {
    name: "JavaScript",
    iconClass: "bg-icon-js bg-icon-js-opacity",
    path: "JavaScript",
    src: javascriptIcon,
  },
  {
    name: "Accessibility",
    iconClass: "bg-icon-accessibility bg-icon-accessibility-opacity",
    path: "Accessibility",
    src: accessibilityIcon,
  },
];

const QuizResult = ({ score, totalQuestions, quizType }) => {
  const isDarkMode = useSelector(isDarkModeSelector);
  const navigate = useNavigate();

  return (
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
  );
};

export default QuizResult;