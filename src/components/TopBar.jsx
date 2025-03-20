import { useDispatch, useSelector } from "react-redux";
import { isDarkModeSelector, toggleMode } from "../features/modeSlice";
import { useNavigate } from "react-router-dom";
import { cssIcon,sunDarkIcon,sunLightIcon,moonDarkIcon,moonLightIcon } from "../constants/icons";

const TopBar = (Icon) => {
  const isDarkMode = useSelector(isDarkModeSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <>
      <div className="ml-[-0.5rem]  flex lg:pt-20 md:pt-20 sm:pt-12 ssm:pt-4 sssm:pt-2 py-1 h-16  justify-end lg:mb-20 md:mb-24 sm:mb-12 sssm:mb-6 transition-all  duration-1000">
        <button className="pl-0  justify-start mr-auto " onClick={()=>navigate('/')}>
          <img src={cssIcon} className={`hidden`}/>
        </button>
        <div className="flex space-x-3 absolute py-1  ">
          <img
            className={`w-6.5 ${
              isDarkMode ? "block" : "hidden"
            } transition-all  duration-1000`}
            src={sunLightIcon}
            alt="Sun icon light theme"
          />
          <img
            className={`w-6 ${
              isDarkMode ? "hidden" : "block"
            } transition-all  duration-1000`}
            src={sunDarkIcon}
            alt="Sun icon dark theme"
          />

          <button
            className="rounded-full bg-hot-purple h-7 my-auto w-12 transition-all  "
            onClick={() => dispatch(toggleMode())}
          >
            <div
              className={`ml-1.3 w-5 h-5 ${
                isDarkMode ? "ml-6" : "ml-1.3"
              } bg-white rounded-3xl text-white my-auto transition-all  duration-1000`}
            ></div>
          </button>

          <img
            className={`w-6.5 ${
              isDarkMode ? "block" : "hidden"
            } transition-all  duration-1000`}
            src={moonLightIcon}
            alt="Moon icon light theme"
          />
          <img
            className={`w-6 ${
              isDarkMode ? "hidden" : "block"
            } transition-all  duration-1000`}
            src={moonDarkIcon}
            alt="Moon icon dark theme"
          />
        </div>
      </div>
    </>
  );
};
export default TopBar;
