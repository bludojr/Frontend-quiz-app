import { useSelector } from "react-redux"
import { isDarkModeSelector } from "../features/modeSlice"

const Background = ({children}) => {
  const isDarkMode = useSelector(isDarkModeSelector)
  
  return (
    <div className={`transition-all ease-in-out duration-1000 bg-fixed bg-cover bg-center bg-no-repeat  ${isDarkMode ?' ssm:bg-mobile-dark ssm:bg-dark-gray sm:bg-mobile-dark sm:bg-dark-gray  md:bg-tablet-dark lg:bg-desktop-dark bg-dark-gray transition-all ease-in-out duration-500':'sm:bg-mobile-light md:bg-tablet-light lg:bg-desktop-light transition-all duration-150 bg-nice' }   bg-cover bg-center  font-rubik lg:px-36 md:px-16 ssm:px-4 bg-no-repeat transition-all ease-in-out duration-500`}>
    {children}
   </div>
  )
}
export default Background