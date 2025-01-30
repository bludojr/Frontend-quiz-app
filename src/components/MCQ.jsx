import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setQuestions, setLoading, setError } from '../features/questionsSlice';

const MCQ = ({ quizType }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionsState.questions);
  const status = useSelector((state) => state.questionsState.status);
  const error = useSelector((state) => state.questionsState.error);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get('/data.json');
        dispatch(setQuestions(response.data.quizzes));
      } catch (err) {
        dispatch(setError({ error: err }));
      }
    };

    if (status === 'idle') {
      fetchQuestions();
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  const currentQuiz = questions.find(quiz => quiz.title === quizType);
  const currentQuestions = currentQuiz?.questions || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;

  const handleSubmit = () => {
    // Check if selected answer matches the correct answer text
    const isAnswerCorrect = currentQuestion.options[selectedAnswer] === currentQuestion.answer;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    if (isAnswerCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 1500);
  };

  if (!currentQuestion) return null;

  return (
    <div className="flex-col space-y-6 max-w-200 flex-grow min-w-72">
      <div className="space-y-6">
        <h2 className="text-2xl font-medium text-dark-gray">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, optIndex) => (
            <button 
              key={optIndex}
              className={`pl-6 flex gap-x-5 shadow-md min-h-28 w-full rounded-3xl border transition-all ease-in duration-300
                ${selectedAnswer === optIndex ? 'border-hot-purple border-4' : 'border-white hover:border-hot-purple hover:border-4'}
                ${showFeedback ? 
                  option === currentQuestion.answer ? 'bg-green-200' :
                  optIndex === selectedAnswer ? 'bg-red-200' : 'bg-white' 
                  : 'bg-white'}`}
              onClick={() => !showFeedback && setSelectedAnswer(optIndex)}
              disabled={showFeedback}
            >
              <div className="py-3 w-12 flex-none bg-lightBlue my-auto p-1 text-center font-rubik text-2.5xl font-semibold rounded-md text-gray-500">
                {String.fromCharCode(65 + optIndex)}
              </div>
              <div className="my-auto text-2.5xl font-medium text-dark-gray break-words whitespace-normal text-balance text-center">
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>

      <button 
        className={`bg-hot-purple ${selectedAnswer === null ? 'opacity-50' : 'hover:bg-opacity-70'} 
          text-white shadow-md min-h-24 w-full rounded-3xl transition-all py-3 text-center font-rubik text-2.5xl font-semibold ease-in-out duration-300`}
        onClick={handleSubmit}
        disabled={selectedAnswer === null || showFeedback}
      >
        {showFeedback ? (isCorrect ? 'Correct!' : 'Incorrect!') : 'Submit Answer'}
      </button>

    </div>
  );
};

export default MCQ;