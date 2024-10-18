const SideBar = () => {
    return (
      <aside className="hidden md:block md:w-72 bg-gray-100 dark:bg-gray-900 p-4 shadow-md">
        <ul className="space-y-4">
          <li>
            <a href="#" className="block text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white p-2 rounded-md">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white p-2 rounded-md">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white p-2 rounded-md">
              Profile
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default SideBar;
  