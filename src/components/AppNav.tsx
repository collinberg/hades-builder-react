// Desc: App Navigation Bar
//
// This is the navigation bar for the app. It contains the app logo and a button to open the sidebar.
interface Props {
  onResetClick?: () => void;
}
const AppNav = ({onResetClick} : Props ) => {

  const handleClick = () => {
    if (onResetClick) {
      onResetClick();
    }
  };


  return (
    <nav className="fixed z-30 w-full">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
        <button 
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>                
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white ml-2">Hades Builder</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button type="button" className="btn btn-primary text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleClick}>Reset</button>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default AppNav