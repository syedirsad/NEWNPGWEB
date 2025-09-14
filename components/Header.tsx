
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-[#1D3557] py-6 sticky top-0 z-50 shadow-lg transition-transform duration-300">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 overflow-hidden">
                        <img src="https://raw.githubusercontent.com/syedirsad/CHAP1/main/logo.png" alt="NPG Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-white">
                        <h1 className="font-poppins text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">NEET PHYSICS GUJARATI</h1>
                        <p className="text-sm sm:text-base opacity-90 font-medium">BY IRSHAD SIR</p>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <a href="https://syedirsad.github.io/march2026tips/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 animate-pulse-btn">
                        <i className="fas fa-rocket"></i>
                        <span>Strategy 2026</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
