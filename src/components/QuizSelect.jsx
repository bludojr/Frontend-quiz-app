import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  accessibilityIcon,
} from "../constants/icons";

const icons = [
  {
    name: "HTML",
    iconClass: "bg-icon-html-opacity",
    path: "HTML",
    src: htmlIcon,
    alt: "HTML Icon",
  },
  {
    name: "CSS",
    iconClass: "bg-icon-css-opacity",
    path: "CSS",
    src: cssIcon,
    alt: "CSS Icon",
  },
  {
    name: "JavaScript",
    iconClass: "bg-icon-js-opacity",
    path: "JavaScript",
    src: javascriptIcon,
    alt: "JavaScript Icon",
  },
  {
    name: "Accessibility",
    iconClass: "bg-icon-accessibility-opacity",
    path: "Accessibility",
    src: accessibilityIcon,
    alt: "Accessibility Icon",
  },
];

const Objectives = ({ label, path, src, iconClass, alt }) => {
  const isDarkMode = useSelector(isDarkModeSelector);
  return (
    <NavLink
      to={path}
      className={`pl-6 flex space-x-5 shadow-md ${
        isDarkMode ? "bg-soft-gray text-white" : "bg-nice text-white"
      } h-20 w-full rounded-3xl transition-all  duration-300`}
    >
      
      
      <img src={src} alt={alt} className={`h-8 w-8  ${isDarkMode? "bg-nice" : iconClass} rounded-md my-auto p-1`} />
      
      <div
        className={`transition-all  duration-1000  my-auto text-3xl font-medium ${
          isDarkMode ? "text-slate-100" : "text-dark-gray"
        }`}
      >
        {label}
      </div>
    </NavLink>
  );
};


const Options = () => {
  return (
    <div className="flex-col space-y-6 max-w-200 flex-grow min-w-72">
      {icons.map((icon, index) => (
        <Objectives
          key={index}
          label={icon.name}
          iconClass={icon.iconClass}
          src={icon.src}
          path={icon.path}
          alt={icon.alt}
        />
      ))}
    </div>
  );
};

export default Options;
