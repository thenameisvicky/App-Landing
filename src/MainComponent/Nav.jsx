import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="px-4 py-4 md:px-8 md:py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/"><img src={headerLogo} alt="logo" width={130} height={29} className="justify-start" /> </a>
        <ul className="hidden md:flex md:flex-1 md:justify-end md:gap-8 lg:gap-16 items-center">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="text-slate-gray font-montserrat leading-normal text-lg underline-link" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="block md:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} onClick={toggleSidebar} />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-black  w-1/2 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex flex-col items-start p-4">
          <button onClick={toggleSidebar} className="self-end mb-4">Close</button>
          {navLinks.map((item) => (
            <a
              key={item.label}
              className="text-white font-montserrat leading-normal text-lg underline-link py-2"
              href={item.href}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
