
const Background = ({children}) => {
  return (
   <div className="sm:bg-mobile-light md:bg-tablet-light lg:bg-desktop-light bg-nice bg-cover bg-center h-screen font-rubik lg:px-36 bg-no-repeat">
    {children}
   </div>
  )
}
export default Background