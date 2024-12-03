import {useEffect} from "react";

function ThemeController() {

  
  {/* <html lang="es" data-theme="fantasy"></html> */}
  const changeTheme = (theme) => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    // almacenar el tema en el local storage
    localStorage.setItem('theme-pedregal-v1', theme);
  }
  const getTheme = () => {
    return localStorage.getItem('theme-pedregal-v1');
  }

  useEffect(() => {
    
    if (getTheme() === 'dracula' || getTheme() === 'emerald') {
      changeTheme(getTheme());
    } else {
      changeTheme('emerald');
    }
    // input clicked
    const themeController = document.querySelector('.theme-controller');
    themeController.checked = getTheme() === 'dracula';
  }
  , [])


  return (
    <label className="flex cursor-pointer gap-2 mx-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
        onChange={(e) => {
          const theme = e.target.checked ? 'dracula' : 'emerald';
          changeTheme(theme);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}

export default ThemeController;
