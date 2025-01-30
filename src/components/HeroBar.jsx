import { useDispatch, useSelector } from "react-redux";
import { isDarkModeSelector, toggleMode } from "../features/modeSlice";



const HeroBar = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  const dispatch = useDispatch() 
   
  return (
    <>
      <div className="flex lg:pt-20 md:pt-20 sm:pt-12 px-4  justify-end mb-28 transition-all ease-in-out duration-1000">
        <img src="src\assets\images\icon-css.svg" alt="CSS icon" className="mr-auto justify-start"/>
        <div className="flex space-x-3 absolute  pl-0">
            <img
            className={`w-6.5 ${isDarkMode? 'block' : 'hidden'} transition-all ease-in-out duration-1000`}
            src="src\assets\images\icon-sun-light.svg"
            alt="Sun icon light theme"
          />
          <img
            className={`w-6 ${isDarkMode? 'hidden' : 'block'} transition-all ease-in-out duration-1000`}
            src="src\assets\images\icon-sun-dark.svg"
            alt="Sun icon dark theme"
          />

          <button 
          className="rounded-full bg-hot-purple h-7 my-auto w-12 transition-all ease-in-out duration-300"
          onClick={()=>dispatch(toggleMode())}
          >
            <div className={`ml-1.3 w-5 h-5 ${isDarkMode ? 'ml-6':'ml-1.3'} bg-white rounded-3xl text-white my-auto transition-all ease-in-out duration-1000`}></div>
          </button>

          <img
            className={`w-6.5 ${isDarkMode? 'block' : 'hidden'} transition-all ease-in-out duration-1000`}
            src="src\assets\images\icon-moon-light.svg"
            alt="Moon icon light theme"
          />
          <img
            className={`w-6 ${isDarkMode? 'hidden' : 'block'} transition-all ease-in-out duration-1000`}
            src="src\assets\images\icon-moon-dark.svg"
            alt="Moon icon dark theme"
          />
        </div>
      </div>
    </>
  );
};
export default HeroBar;