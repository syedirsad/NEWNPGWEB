import React from 'react';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header className="bg-[#1A202C] py-4 sticky top-0 z-50 shadow-md">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 overflow-hidden">
                        <img src="https://raw.githubusercontent.com/syedirsad/CHAP1/main/logo.png" alt="NPG Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-white">
                        <h1 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold tracking-wide">NEET PHYSICS GUJARATI</h1>
                        <p className="text-xs sm:text-sm opacity-80 font-medium">BY IRSHAD SIR</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <a href="https://syedirsad.github.io/march2026tips/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(7_191_255,0.5)] flex items-center gap-2">
                            <i className="fas fa-rocket"></i>
                            <span>Strategy 2026</span>
                        </a>
                    </div>
                    <button 
                        className="sm:hidden text-white text-2xl w-8 h-8"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;