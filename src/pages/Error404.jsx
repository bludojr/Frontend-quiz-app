import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isDarkModeSelector } from '../features/modeSlice';
import Background from '../components/Background';
import Body from '../components/Body';
import HeroBar from '../components/HeroBar';

const Error404 = () => {
  const isDarkMode = useSelector(isDarkModeSelector);
  const navigate = useNavigate();

  return (
    <Background>
      <HeroBar />
      <Body>
        <div className="flex flex-col items-center justify-center w-full space-y-8 ease-in-out transition-all duration-1000">
          <h1 className={`text-8xl font-bold ${isDarkMode ? 'text-white' : 'text-dark-gray'}`}>
            404
          </h1>
          <p className={`text-2xl ${isDarkMode ? 'text-white' : 'text-dark-gray'}`}>
            Oops! Page not found
          </p>
          <button
            onClick={() => navigate('/')}
            className={`pl-6 flex space-x-5 shadow-md ${
              isDarkMode ? 'bg-[#3c4c67]' : 'bg-nice'
            } text-white h-20 w-64 rounded-3xl transition-all ease-in-out duration-1000 items-center justify-center`}
          >
            <span className={`text-xl font-medium ${isDarkMode ? 'text-white':'text-dark-gray'}`}>Back to Home</span>
          </button>
        </div>
      </Body>
    </Background>
  );
};

export default Error404;