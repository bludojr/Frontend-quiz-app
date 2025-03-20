import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const ProgressBar = ({ currentQuestion, totalQuestions, score }) => {
  const isDarkMode = useSelector(isDarkModeSelector);

  return (
    <div className="w-full space-y-4 transition-all  duration-1000 ease-in-out xsm:mb-3 lg:mb-0 ">
      <div className="transition-all  duration-1000 ">
        <span className={` transition-all  duration-1000 font-rubik-italic text-dark-gray xsm:text-sm sm:text-base md:text-xl `}>
          Question {currentQuestion} of {totalQuestions}
        </span>
      </div>
      <div className={`transition-all  duration-1000 w-full xsm:h-2 sm:h-3 lg:min-w-124 shadow-lg  ${isDarkMode? "bg-soft-gray":"bg-nice"} rounded-full lg:absolute lg:bottom-24`}>
        <div 
        className="  duration-1000 h-full  rounded-full bg-hot-purple transition-all  ease-in-out"
          style={{ width: `${(score / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
