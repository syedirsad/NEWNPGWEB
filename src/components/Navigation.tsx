import React from 'react';
import { ViewType } from '../types';

interface NavigationProps {
    currentView: ViewType;
    setView: (view: ViewType) => void;
    isMenuOpen: boolean;
}

const NavItem: React.FC<{
    label: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform border ${isActive
                ? 'bg-primary-neon/10 border-primary-neon text-primary-neon shadow-neon scale-105'
                : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
            }`}
    >
        <i className={icon}></i>
        <span className="text-sm sm:text-base tracking-wide">{label}</span>
    </button>
);

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, isMenuOpen }) => {
    const navLinks = [
        { label: "Home", icon: "fas fa-home", view: 'home' as ViewType },
        { label: "Quizzes", icon: "fas fa-question-circle", view: 'quizzes' as ViewType },
        { label: "Materials", icon: "fas fa-book-open", view: 'materials' as ViewType },
        { label: "Question Bank", icon: "fas fa-archive", view: 'question-bank' as ViewType },
        { label: "Simulations", icon: "fas fa-flask", view: 'simulations' as ViewType },
    ];

    return (
        <nav className={`transition-all duration-300 ${isMenuOpen ? 'bg-background-deep/95 backdrop-blur-xl' : 'glass-nav'} sticky top-[88px] z-40 border-b border-white/5`}>
            {/* Desktop Navigation */}
            <div className={`max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8 ${isMenuOpen ? 'hidden sm:block' : ''}`}>
                <div className="hidden sm:flex justify-start py-3 space-x-3 overflow-x-auto no-scrollbar">
                    {navLinks.map((link) => (
                        <NavItem
                            key={link.view}
                            label={link.label}
                            icon={link.icon}
                            isActive={currentView === link.view}
                            onClick={() => setView(link.view)}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="sm:hidden border-t border-white/5 animate-shimmer">
                    <div className="px-4 py-4 space-y-2 bg-background-deep/90 backdrop-blur-xl">
                        {navLinks.map((link) => (
                            <button
                                key={link.view}
                                onClick={() => setView(link.view)}
                                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-medium text-left transition-all duration-200 border ${currentView === link.view
                                        ? 'bg-primary-neon/10 border-primary-neon text-primary-neon shadow-neon'
                                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${currentView === link.view ? 'bg-primary-neon/20' : 'bg-white/5'}`}>
                                    <i className={`${link.icon} text-lg`}></i>
                                </div>
                                <span className="text-lg">{link.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
