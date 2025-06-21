import { useSelector } from "react-redux"
import { isDarkModeSelector } from "../features/modeSlice"

const FailedLoading = () => {
    isDarkMode = useSelector(isDarkModeSelector)
    const error = useSelector((state) => state.questionsState.error);

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8 transition-all duration-1000">
      <div
        className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
          isDarkMode ? "bg-soft-gray" : "bg-white"
        } shadow-lg`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-hot-purple"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1
        className={`text-4xl font-bold text-center ${
          isDarkMode ? "text-white" : "text-dark-gray"
        }`}
      >
        Oops! Something went wrong
      </h1>

      <p
        className={`text-xl text-center max-w-md ${
          isDarkMode ? "text-lightBlue" : "text-dark-gray"
        }`}
      >
        We couldn't load the quiz questions. Please check your connection and
        try again.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={() => window.location.reload()}
          className={`pl-6 flex space-x-5 shadow-md hover:opacity-80 
            ${isDarkMode ? "bg-soft-gray" : "bg-white"}
            h-16 w-64 rounded-xl transition-all duration-300 
            items-center justify-center`}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-hot-purple mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span
              className={`text-xl font-medium ${
                isDarkMode ? "text-white" : "text-dark-gray"
              }`}
            >
              Try Again
            </span>
          </div>
        </button>

        <button
          onClick={() => navigate("/")}
          className="pl-6 flex space-x-5 shadow-xl hover:opacity-80 
            bg-hot-purple text-white h-16 w-64 rounded-xl transition-all duration-300 
            items-center justify-center"
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"
              />
            </svg>
            <span className="text-xl font-medium text-white">Back to Home</span>
          </div>
        </button>
      </div>

      {error && (
        <div
          className={`mt-6 p-4 rounded-lg max-w-md ${
            isDarkMode ? "bg-soft-gray" : "bg-white"
          } shadow-md`}
        >
          <p
            className={`text-sm font-medium ${
              isDarkMode ? "text-lightBlue" : "text-dark-gray"
            }`}
          >
            Error details: {error.message || "Failed to fetch quiz data"}
          </p>
        </div>
      )}
    </div>
  )
}
export default FailedLoading