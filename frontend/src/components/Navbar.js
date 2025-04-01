import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QuestionMarkCircleIcon, GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full z-50 flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-3 min-w-[240px]">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 overflow-hidden relative">
            <img 
              src="/images/1262db649ab56f41b9565c4b583cf909.webp" 
              alt="Aggie Class Alert Logo" 
              className="absolute w-[200%] h-[200%] object-cover -top-[50%] left-[5%]"
            />
          </div>
          <h1 className="text-2xl font-bold text-maroon">Aggie Class Alert</h1>
        </Link>
      </div>

      {/* Center Navigation */}
      <div className="hidden lg:flex justify-center flex-1 items-center">
        <div className="flex space-x-4">
          <Link 
            to="/dashboard" 
            className={`px-4 py-1 text-sm font-medium rounded transition-colors ${
              location.pathname === '/dashboard' 
                ? 'bg-maroon/5 text-maroon' 
                : 'text-maroon hover:bg-maroon/5'
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/my-alerts" 
            className={`px-4 py-1 text-sm font-medium rounded transition-colors ${
              location.pathname === '/my-alerts' 
                ? 'bg-maroon/5 text-maroon' 
                : 'text-maroon hover:bg-maroon/5'
            }`}
          >
            My Alerts
          </Link>
          <Link 
            to="/search" 
            className={`px-4 py-1 text-sm font-medium rounded transition-colors ${
              location.pathname === '/search' 
                ? 'bg-maroon/5 text-maroon' 
                : 'text-maroon hover:bg-maroon/5'
            }`}
          >
            Search Professors
          </Link>
          <Link 
            to="/settings" 
            className={`px-4 py-1 text-sm font-medium rounded transition-colors ${
              location.pathname === '/settings' 
                ? 'bg-maroon/5 text-maroon' 
                : 'text-maroon hover:bg-maroon/5'
            }`}
          >
            Settings
          </Link>
          <button className="px-4 py-1 text-sm font-medium text-maroon hover:bg-maroon/5 rounded">Help</button>
        </div>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-4 min-w-[240px] justify-end">
        <QuestionMarkCircleIcon className="h-6 w-6 text-maroon" />
        <GlobeAltIcon className="h-6 w-6 text-maroon" />
        <UserCircleIcon className="h-6 w-6 text-maroon" />
      </div>
    </nav>
  );
};

export default Navbar; 