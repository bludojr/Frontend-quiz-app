import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setQuestions, setLoading, setError } from "../features/questionsSlice";
import { isDarkModeSelector } from "../features/modeSlice";
import ProgressBar from "./ProgressBar";
import { correctIcon, incorrectIcon } from "../constants/icons";

const MCQ = ({ quizType }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionsState.questions);
  const status = useSelector((state) => state.questionsState.status);
  const error = useSelector((state) => state.questionsState.error);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const isDarkMode = useSelector(isDarkModeSelector);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get("/data.json");
        dispatch(setQuestions(response.data.quizzes));
      } catch (err) {
        dispatch(setError({ error: err }));
      }
    };

    if (status === "idle") {
      fetchQuestions();
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  const currentQuiz = questions.find((quiz) => quiz.title === quizType);
  const currentQuestions = currentQuiz?.questions || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;

  const handleSubmit = () => {
    const isAnswerCorrect =
      currentQuestion.options[selectedAnswer] === currentQuestion.answer;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 3000);
  };

  if (!currentQuestion) return null;

  return (
    <div className="lg:flex lg:flex-row lg:justify-between w-full lg:gap-x-20  xsm:flex-col xsm:space-y-2 sssm:space-y-2 ssm:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-0  ">
      {/* progress bar and question label */}
      <div className="lg:w-1/2 lg:order-0 lg:flex-col relative">
        {/* progressBar */}
        <div className="">
          <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            score={score}
          />
        </div>
        <div className=" space-y-6">
          {/* question label */}
          <h2
            className={`${
              isDarkMode ? "text-white" : "text-dark-gray"
            } lg:h-1/3 order-0 text-2xl md:text-3xl lg:text-4xl font-medium transition-all lg:absolute lg:top-24 duration-1000`}
          >
            {currentQuestion.question}
          </h2>
        </div>
      </div>

      <div className="lg:w-1/2 lg:order-1 space-y-6">
        {/* question options and submit button */}
        <div className=" flex-col xsm:space-y-2 sssm:space-y-2 ssm:space-y-6 sm:space-y-8 md:space-y-10  ">
          {/* question options */}
          {currentQuestion.options.map((option, optIndex) => (
            <button
              key={optIndex}
              className={` hover:opacity-80 group pl-6 flex xsm:gap-x-5  shadow-md ${
                isDarkMode
                  ? " bg-soft-gray border-soft-gray"
                  : " bg-white border-white"
              } shadow-md  md:min-h-20 xsm:min-h-16  w-full xsm:rounded-xl  sm:rounded-3xl border transition-all
                    
                    ${
                      showFeedback
                          ? option === currentQuestion.answer
                              ? "ring-[#4edc9a] ring-4" // Correct answer - green ring
                              : selectedAnswer === optIndex
                                  ? "ring-[#c85053] ring-4" // Wrong answer - red ring
                                  : "" // No ring for other options during feedback
                          : selectedAnswer === optIndex
                              ? "ring-hot-purple ring-4" // Selected before submission - purple ring
                              : "hover:border-hot-purple hover:border-4" // Default hover state
                  }
                    `}
              onClick={() => !showFeedback && setSelectedAnswer(optIndex)}
              disabled={showFeedback}
            >
              <div
                className={`py-3 w-12 flex-none my-auto p-1 text-center font-rubik md:text-2.5xl sm:text-2xl sm:py-2 xsm:px-1 font-semibold rounded-md ${
                  showFeedback
                      ? option === currentQuestion.answer
                          ? "bg-[#4edc9a] text-white" // Correct answer - green background
                          : selectedAnswer === optIndex
                              ? "bg-[#c85053] text-white" // Wrong answer - red background
                              : "bg-lightBlue text-gray-500" // Other options during feedback
                      : selectedAnswer === optIndex
                          ? "bg-hot-purple text-white" // Selected before submission
                          : "bg-lightBlue text-gray-500 group-hover:text-hot-purple" // Default state
              }`}
              >
                {String.fromCharCode(65 + optIndex)}
              </div> 
              <div
                className={`my-auto md:text-2.5xl sm:text-2xl  font-medium ${
                  isDarkMode ? "text-lightBlue" : "text-dark-gray"
                } break-words whitespace-normal text-balance text-center`}
              >
                {option}
              </div>
              <img
                className={`${
                  showFeedback
                    ? option === currentQuestion.answer
                      ? "block"
                      : optIndex === selectedAnswer
                      ? "hidden"
                      : "hidden"
                    : "hidden"
                }`}
                src={correctIcon}
                alt="Correct Icon"
              />
              <img
                className={`${
                  showFeedback
                    ? option === currentQuestion.answer
                      ? "hidden"
                      : optIndex === selectedAnswer
                      ? "block"
                      : "hidden"
                    : "hidden"
                }`}
                src={incorrectIcon}
                alt="Incorrect Icon"
              />
            </button>
          ))}
          {/* submit button */}
          <button
            className={`bg-hot-purple ${
              selectedAnswer === null ? "opacity-50" : "hover:bg-opacity-70"
            }
              text-white shadow-lg min-h-20 w-full rounded-3xl transition-all overflow-auto  text-center font-rubik text-2.5xl font-semibold  `}
            onClick={handleSubmit}
            disabled={selectedAnswer === null || showFeedback}
          >
            {showFeedback
              ? isCorrect
                ? "Correct!"
                : "Incorrect!"
              : "Submit Answer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
