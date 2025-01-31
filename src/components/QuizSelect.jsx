import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const icons = [
  { name: "HTML", bgClass: "bg-icon-html bg-icon-html-opacity", path: "HTML" },
  { name: "CSS", bgClass: "bg-icon-css bg-icon-css-opacity", path: "CSS" },
  { name: "JavaScript", bgClass: "bg-icon-js bg-icon-js-opacity", path: "JavaScript" },
  { name: "Accessibility", bgClass: "bg-icon-accessibility bg-icon-accessibility-opacity", path: "Accessibility" }
];

const Objectives = ({ label, bgClass, path }) => {
  const isDarkMode = useSelector(isDarkModeSelector);
  return (
    <NavLink
      to={path}
      className={`pl-6 flex space-x-5 shadow-md ${isDarkMode? 'bg-[#3c4c67] text-white' : 'bg-nice text-white'} h-20 w-full rounded-3xl transition-all ease-in-out duration-1000`}
    >
      <Picture bgClass={bgClass} />
      <div className={`transition-all ease-in-out duration-1000  my-auto text-3xl font-medium ${isDarkMode? 'text-slate-100' : 'text-dark-gray'}`}>{label}</div>
    </NavLink>
  );
};

const Picture = ({ bgClass }) => {
  return (
    <div className={`h-8 w-8 bg-center bg-no-repeat ${bgClass} bg-contain bg-nice rounded-md my-auto p-1`} />
  );
};

const Options = () => {
  return (
    <div className="flex-col space-y-6 max-w-200 flex-grow min-w-72">
      {icons.map((icon, index) => (
        <Objectives key={index} label={icon.name} bgClass={icon.bgClass} path={icon.path} />
      ))}
    </div>
  );
};

export default Options;