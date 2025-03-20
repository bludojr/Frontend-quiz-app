import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const Hero = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  return (
    <>
      <div className="mr-auto ">
          <div className={`text-6.5xl leading-none  font-thin font-rubik ${ isDarkMode? 'text-white' : 'text-dark-gray'} sm:whitespace-nowrap sssm:text-5xl xsm:text-4.5xl `}>Welcome to the</div>
          <div className={`text-6.5xl leading-none font-medium font-rubik  ${ isDarkMode ? 'text-white':'text-dark-gray'} md:whitespace-nowrap sm:text-6xl sssm:text-5xl xsm:text-4.5xl `}>Frontend Quiz!</div>
          <div className={`font-rubik-italic text-gray-500 sm:mb-0 sm:mt-14 ssm:mt-10  sssm:mt-8 xsm:mt-2`}>Pick a subject to get started</div>
      </div>
    </>
  );
};
export default Hero;