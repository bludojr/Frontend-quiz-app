import Background from "../components/Background";
import HeroBar from "../components/HeroBar";
import Body from "../components/Body";
import MCQ from "../components/MCQ";
import { useSelector } from "react-redux";
import { isDarkModeSelector } from "../features/modeSlice";

const HTML = () => {
    const isDarkMode = useSelector(isDarkModeSelector);
    
    return (
        <Background>
            <HeroBar />
            <Body>
                <div className="mr-auto">
                    <div className={`font-rubik-italic ${isDarkMode ? 'text-white' : 'text-dark-gray'} text-xl`}>
                        Question {} of 10
                    </div>
                </div>
                <MCQ quizType="JavaScript" />
            </Body>
        </Background>
    );
};

export default HTML;
