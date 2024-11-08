import Background from "../components/Background";
import HeroBar from "../components/HeroBar";
import Body from "../components/Body";

const HTML = () => {
  return (
    <>
      <Background>
        <HeroBar />
        <Body>
          <div className="mr-auto">
            <div className="font-rubik-italic text-dark-gray text-xl">
              Question {} of 10
            </div>
          </div>

          <div className="flex-col space-y-6 max-w-200 flex-grow min-w-72 ">
            {/* INDIVIDUAL QUESTIONS */}
            <button className="pl-6 flex gap-x-5 shadow-md bg-white min-h-28 w-full rounded-3xl border border-white hover:border-hot-purple hover:border-4 focus:border-hot-purple focus:border-4 py-3 transition-all ease-in duration-300">
              {/* MCQ LABEL */}
              <div className="py-3 w-12 flex-none bg-lightBlue  my-auto p-1 text-center font-rubik text-2.5xl font-semibold rounded-md text-gray-500 hover:text-hot-purple focus:text-white focus:bg-hot-purple">
                A
              </div>
              {/* MCQ QUESTION */}
              <div className="my-auto text-2.5xl font-medium text-dark-gray  break-words whitespace-normal  text-balance text-center">
              </div>
              <div className=" w-24 h-10 my-auto">
                {/* CORRECT ICON */}
                <img src="src\assets\images\icon-correct.svg" alt="Correct Icon" className="hidden w-full"/>
                {/* INCORRECT ICON */}
                <img src="src\assets\images\icon-incorrect.svg" alt="Incorrect Icon" className="hidden w-full"/>
            
              </div>
            </button>


            <button className="pl-6 flex gap-x-5 shadow-md bg-white min-h-28 w-full rounded-3xl border border-white hover:border-hot-purple hover:border-4 focus:border-hot-purple focus:border-4 py-3 transition-all ease-in-out duration-300">
              {/* MCQ LABEL */}
              <div className="py-3 w-12 flex-none bg-lightBlue  my-auto p-1 text-center font-rubik text-2.5xl font-semibold rounded-md text-gray-500">
                B
              </div>
              {/* MCQ QUESTION */}
              <div className="my-auto text-2.5xl font-medium text-dark-gray  break-words whitespace-normal  text-balance text-center">
              </div>
              <div className=" w-24 h-10 my-auto">
                {/* CORRECT ICON */}
                <img src="src\assets\images\icon-correct.svg" alt="Correct Icon" className="hidden w-full"/>
                {/* INCORRECT ICON */}
                <img src="src\assets\images\icon-incorrect.svg" alt="Incorrect Icon" className="hidden w-full"/>
              </div>
            </button>


            <button className="pl-6 flex gap-x-5 shadow-md bg-white min-h-28 w-full rounded-3xl border border-white hover:border-hot-purple hover:border-4 focus:border-hot-purple focus:border-4 py-3 transition-all ease-in-out duration-300">
              {/* MCQ LABEL */}
              <div className="py-3 w-12 flex-none bg-lightBlue  my-auto p-1 text-center font-rubik text-2.5xl font-semibold rounded-md text-gray-500">
                C
              </div>
              {/* MCQ QUESTION */}
              <div className="my-auto text-2.5xl font-medium text-dark-gray  break-words whitespace-normal  text-balance text-center">
              </div>
              <div className=" w-24 h-10 my-auto">
                {/* CORRECT ICON */}
                <img src="src\assets\images\icon-correct.svg" alt="Correct Icon" className="hidden w-full"/>
                {/* INCORRECT ICON */}
                <img src="src\assets\images\icon-incorrect.svg" alt="Incorrect Icon" className="hidden w-full"/>
              </div>
            </button>


            <button className="pl-6 flex gap-x-5 shadow-md bg-white min-h-28 w-full rounded-3xl border border-white hover:border-hot-purple hover:border-4 focus:border-hot-purple focus:border-4 py-3 transition-all ease-in-out duration-300">
              {/* MCQ LABEL */}
              <div className="py-3 w-12 flex-none bg-lightBlue  my-auto p-1 text-center font-rubik text-2.5xl font-semibold rounded-md text-gray-500">
                D
              </div>
              {/* MCQ QUESTION */}
              <div className="my-auto text-2.5xl font-medium text-dark-gray  break-words whitespace-normal  text-balance text-center">
              </div>
              <div className=" w-24 h-10 my-auto">
                {/* CORRECT ICON */}
                <img src="src\assets\images\icon-correct.svg" alt="Correct Icon" className="hidden w-full"/>
                {/* INCORRECT ICON */}
                <img src="src\assets\images\icon-incorrect.svg" alt="Incorrect Icon" className="hidden w-full"/>
              </div>
            </button>

            <button className="bg-hot-purple hover:bg-opacity-70 text-white shadow-md min-h-24 w-full rounded-3xl transition-all py-3 text-center font-rubik text-2.5xl font-semibold ease-in-out duration-300">
              Submit Answer
            </button>         
            
          </div>
        </Body>
      </Background>
    </>
  );
};
export default HTML;
