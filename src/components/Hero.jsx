import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const Hero = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  return (
    <>
      <div className="mr-auto">
          <div className={`text-6.5xl leading-none  font-thin font-rubik ${ isDarkMode? 'text-white' : 'text-dark-gray'} text-nowrap`}>Welcome to the</div>
          <div className={`text-6.5xl leading-none font-medium font-rubik  ${ isDarkMode ? 'text-white':'text-dark-gray'} `}>Frontend Quiz!</div>
          <div className={`font-rubik-italic text-gray-500  mt-14`}>Pick a subject to get started</div>
      </div>
    </>
  );
};
export default Hero;