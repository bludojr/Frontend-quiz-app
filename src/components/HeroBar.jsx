const HeroBar = () => {
  return (
    <>
      <div className="flex pt-20 relative mb-24">
        <img src="src\assets\images\icon-css.svg" alt="CSS icon" />
        <div className="flex space-x-3 absolute right-0 pl-0">
            <img
            className="w-6 hidden"
            src="src\assets\images\icon-sun-light.svg"
            alt="Sun icon light theme"
          />
          <img
            className="w-6"
            src="src\assets\images\icon-sun-dark.svg"
            alt="Sun icon dark theme"
          />

          <button className="rounded-full bg-hot-purple h-7 my-auto w-12 ">
            <div className="ml-1.3 active:ml-6 after:ml-6 w-5 h-5 bg-white rounded-3xl text-white my-auto"></div>
          </button>

          <img
            className="w-6 hidden"
            src="src\assets\images\icon-moon-light.svg"
            alt="Moon icon light theme"
          />
          <img
            className="w-6"
            src="src\assets\images\icon-moon-dark.svg"
            alt="Moon icon dark theme"
          />
        </div>
      </div>
    </>
  );
};
export default HeroBar;
