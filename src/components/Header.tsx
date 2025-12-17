import React from 'react';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header className="glass-nav py-4 sticky top-0 z-50 shadow-neon">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-background-highlight to-background-surface flex items-center justify-center border border-primary-neon/30 overflow-hidden relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-neon">
                        <img src="https://cdn.jsdelivr.net/gh/syedirsad/CHAP1@main/logo.png" alt="NPG Logo" className="w-full h-full object-cover rounded-full" />
                        <div
                            className="absolute inset-0 bg-primary-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"
                        >
                        </div>
                    </div>
                    <div>
                        <h1 className="font-heading text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-primary-neon transition-colors duration-300 drop-shadow-md">
                            NEET PHYSICS <span className="text-primary-neon">GUJARATI</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-wider group-hover:text-gray-200 transition-colors">By Irshad Sir</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <a
                            href="https://syedirsad.github.io/march2026tips/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden bg-transparent text-white font-semibold py-2 px-6 rounded-full border border-secondary-purple/50 transition-all duration-300 hover:shadow-purple-glow hover:border-secondary-purple group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <i className="fas fa-rocket text-secondary-purple group-hover:animate-pulse"></i>
                                <span>Strategy 2026</span>
                            </span>
                            <div className="absolute inset-0 bg-secondary-purple/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>

                    <button
                        className="sm:hidden text-white text-2xl w-10 h-10 flex items-center justify-center hover:text-primary-neon transition-colors"
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
