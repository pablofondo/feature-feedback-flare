
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                FeatureLab
              </span>
              <div className="text-xs text-gray-500 font-medium">BETA ACCESS</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Get Access
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
