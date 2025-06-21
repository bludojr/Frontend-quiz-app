import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const Background = ({ children }) => {
  const isDarkMode = useSelector(isDarkModeSelector);

  return (
    <div
      className={`transition-all min-h-lvh duration-300 bg-fixed bg-cover bg-center bg-no-repeat ${
        isDarkMode
          ? "sssm:bg-mobile-dark sssm:bg-dark-gray sm:bg-mobile-dark sm:bg-dark-gray md:bg-tablet-dark lg:bg-desktop-dark bg-dark-gray"
          : "sssm:bg-mobile-light sm:bg-mobile-light md:bg-tablet-light lg:bg-desktop-light bg-nice"
      } font-rubik xlg:px-36 lg:px-32 md:px-20 ssm:px-4 sssm:px-2`}
    >
      {children}
    </div>
  );
};

export default Background;
