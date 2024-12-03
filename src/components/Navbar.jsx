import { useEffect, useRef, useState } from 'react';
import ThemeController from './ThemeController';

function Navbar() {

  const navRef = useRef(null);
  const [activeItem, setActiveItem] = useState('inicio');

  useEffect(() => {
    const body = document.querySelector('body');
    const nav = navRef.current.offsetHeight;
    body.style.marginTop = `${nav}px`;
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Actualizar estado
    setActiveItem(targetId);
    
    // Cerrar el dropdown en mobile si está abierto
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.removeAttribute('open');
    }

    // Scroll suave al elemento
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div ref={navRef} className={`navbar bg-base-100 z-50 fixed top-0 left-0 right-0 backdrop-blur-lg bg-opacity-60`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className={activeItem === 'inicio' ? 'active' : ''}>
              <button onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</button>
            </li>
            <li className={activeItem === 'productos' ? 'active' : ''}>
              <button onClick={(e) => handleNavClick(e, 'productos')}>Platos</button>
            </li>
            <li className={activeItem === 'reportes' ? 'active' : ''}>
              <button onClick={(e) => handleNavClick(e, 'reportes')}>Reportes de ventas</button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">RESTAURANTE FLORES</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={activeItem === 'inicio' ? 'active' : ''}>
            <button onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</button>
          </li>
          <li className={activeItem === 'productos' ? 'active' : ''}>
            <button onClick={(e) => handleNavClick(e, 'productos')}>Platos</button>
          </li>
          <li className={activeItem === 'reportes' ? 'active' : ''}>
            <button onClick={(e) => handleNavClick(e, 'reportes')}>Reportes de ventas</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
        <a className="btn" onClick={(e) => handleNavClick(e, 'reportes')}>
          Reportes
        </a>
      </div>
    </div>
  );
}

export default Navbar;
