import { NavLink, Outlet } from "react-router-dom";

const icons = [
  { name: "HTML", bgClass: "bg-icon-html bg-icon-html-opacity", path: "html" },
  { name: "CSS", bgClass: "bg-icon-css bg-icon-css-opacity", path: "css" },
  { name: "JavaScript", bgClass: "bg-icon-js bg-icon-js-opacity", path: "js" },
  { name: "Accessibility", bgClass: "bg-icon-accessibility bg-icon-accessibility-opacity", path: "accessibility" }
];

const Objectives = ({ label, bgClass, path }) => {
  return (
    <NavLink
      to={path}
      className="pl-6 flex space-x-5 shadow-md bg-white h-[75px] w-full rounded-3xl border border-white hover:border-fuchsia-500 hover:border-2"
    >
      <Picture bgClass={bgClass} />
      <div className="my-auto text-3xl font-medium text-dark-gray">{label}</div>
    </NavLink>
  );
};

const Picture = ({ bgClass }) => {
  return (
    <div className={`h-8 w-8 bg-center bg-no-repeat ${bgClass} bg-contain rounded-md my-auto p-1`} />
  );
};

const Options = () => {
  return (
    <div className="flex-col space-y-6 max-w-200 flex-grow min-w-72">
      {icons.map((icon, index) => (
        <Objectives key={index} label={icon.name} bgClass={icon.bgClass} path={icon.path} />
      ))}
      <Outlet /> {/* This renders the nested routes within Options */}
    </div>
  );
};

export default Options;