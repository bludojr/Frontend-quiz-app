const icons = [
  { name: "HTML", bgClass: "bg-icon-html" },
  { name: "CSS", bgClass: "bg-icon-css" },
  { name: "JavaScript", bgClass: "bg-icon-js" },
  { name: "Accessibility", bgClass: "bg-icon-accessibility" }
];

// Objectives component to display each icon and label
const Objectives = ({ label, bgClass }) => {
  return (
    <div className="flex space-x-3 shadow-sm bg-white h-[72px] w-[50rem] rounded-3xl border border-white hover:border-fuchsia-500 hover:border-2">
      {/* Display the icon with Picture */}
      <Picture bgClass={bgClass} />

      {/* Display label */}
      <div className="my-auto text-3xl font-medium text-dark-gray">{label}</div>
    </div>
  );
};

// Picture component using Tailwind classes for background image
const Picture = ({ bgClass }) => {
  return (
    <div
      className={`h-14 w-14 bg-center bg-no-repeat ${bgClass} my-auto`}
    ></div>
  );
};

// Options component to map each icon to Objectives
const Options = () => {
  return (
    <div className="flex-col space-y-6">
      {/* Map icons to Objectives components */}
      {icons.map((icon, index) => (
        <Objectives key={index} label={icon.name} bgClass={icon.bgClass} />
      ))}
    </div>
  );
};

export default Options;
