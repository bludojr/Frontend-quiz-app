import { useSelector } from "react-redux"
import { isDarkModeSelector } from "../features/modeSlice"


const LoadingComponent = () => {
    const isDarkMode = useSelector(isDarkModeSelector)
  return (
    <div className="lg:flex lg:flex-row lg:justify-between w-full lg:gap-x-20 xsm:flex-col xsm:space-y-2 sssm:space-y-2 ssm:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-0">
      {/* Left side - Progress bar and question */}
      <div className="lg:w-1/2 lg:order-0 lg:flex-col relative">
        {/* Progress bar skeleton */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className={`h-6 w-24 rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
            <div className={`h-6 w-20 rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
          {/* Progress bar */}
          <div className={`h-4 w-full rounded-full relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className={`h-full w-1/3 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
        
        {/* Question text skeleton */}
        <div className="space-y-4 lg:absolute lg:top-24">
          <div className={`h-8 w-5/6 rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
          <div className={`h-8 w-full rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
          <div className={`h-8 w-4/5 rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Right side - Options and submit button */}
      <div className="lg:w-1/2 lg:order-1 space-y-6">
        <div className="flex-col xsm:space-y-2 sssm:space-y-2 ssm:space-y-6 sm:space-y-8 md:space-y-10">
          {/* Option skeletons - 4 options */}
          {[...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className={`pl-6 flex xsm:gap-x-5 shadow-md ${
                isDarkMode ? "bg-soft-gray" : "bg-white"
              } md:min-h-20 xsm:min-h-16 w-full xsm:rounded-xl sm:rounded-3xl border transition-all relative overflow-hidden`}
            >
              {/* Option letter box */}
              <div className={`py-3 w-12 flex-none my-auto p-1 text-center rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
              </div>
              
              {/* Option text */}
              <div className="my-auto w-4/5">
                <div className={`h-6 w-full rounded-md relative overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
            </div>
          ))}
          
          {/* Submit button skeleton */}
          <div className="bg-hot-purple opacity-50 text-white shadow-lg min-h-20 w-full rounded-3xl transition-all overflow-hidden relative">
            <div className={`h-8 w-40 mx-auto my-6 rounded-md ${isDarkMode ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-30'}`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoadingComponent