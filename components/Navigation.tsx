import React from 'react';
import { ViewType } from '../types';

interface NavigationProps {
    currentView: ViewType;
    setView: (view: ViewType) => void;
}

const NavItem: React.FC<{
    label: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 sm:flex-none sm:px-6 py-3 rounded-full flex items-center justify-center gap-3 transition-all duration-300 ${
            isActive
                ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg scale-105'
                : 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-md'
        }`}
    >
        <i className={icon}></i>
        <span className="font-semibold text-sm sm:text-base">{label}</span>
    </button>
);

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
    return (
        <nav className="bg-white/50 backdrop-blur-lg sticky top-[96px] z-40 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center sm:justify-start py-2 space-x-2 sm:space-x-4">
                    <NavItem label="Home" icon="fas fa-home" isActive={currentView === 'home'} onClick={() => setView('home')} />
                    <NavItem label="Quizzes" icon="fas fa-question-circle" isActive={currentView === 'quizzes'} onClick={() => setView('quizzes')} />
                    <NavItem label="Materials" icon="fas fa-book-open" isActive={currentView === 'materials'} onClick={() => setView('materials')} />
                    <NavItem label="Question Bank" icon="fas fa-archive" isActive={currentView === 'question-bank'} onClick={() => setView('question-bank')} />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
