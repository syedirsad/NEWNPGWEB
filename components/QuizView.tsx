import React from 'react';
import { class11Quizzes, class12Quizzes } from '../data/quizzes';
import { Quiz } from '../types';

const QuizCard: React.FC<{ quiz: Quiz }> = ({ quiz }) => (
    <div className={`bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col ${quiz.isComingSoon ? 'opacity-90' : ''}`}>
        <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md ${quiz.iconBgClass}`}>
                <i className={quiz.icon}></i>
            </div>
            {quiz.isComingSoon && <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Coming Soon</div>}
        </div>
        <div className="flex-grow">
            <h3 className="font-poppins text-xl font-bold mb-2 text-gray-800">{quiz.title}</h3>
            <p className="text-gray-700 mb-1">{quiz.description}</p>
            <span className="text-sm text-gray-600 font-medium">{quiz.chapterInfo}</span>
        </div>
        <div className="mt-6">
            <a 
                href={quiz.isComingSoon ? undefined : quiz.link} 
                target={quiz.isComingSoon ? undefined : "_blank"} 
                rel={quiz.isComingSoon ? undefined : "noopener noreferrer"}
                className={`w-full font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group ${
                    quiz.isComingSoon 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-white/80 text-gray-800 border-2 border-white/50 hover:bg-white hover:text-[#1D3557] hover:shadow-lg'
                }`}
                onClick={(e) => quiz.isComingSoon && e.preventDefault()}
            >
                <span>{quiz.isComingSoon ? 'Coming Soon' : 'Start Quiz'}</span>
                <i className={quiz.isComingSoon ? 'fas fa-clock' : 'fas fa-play'}></i>
            </a>
        </div>
    </div>
);


const QuizSection: React.FC<{ title: string, quizzes: Quiz[] }> = ({ title, quizzes }) => (
    <section className="mb-16">
        <h2 className="font-poppins text-3xl font-bold mb-8 text-center text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
                <QuizCard key={quiz.title} quiz={quiz} />
            ))}
        </div>
    </section>
);


const QuizView: React.FC = () => {
    return (
        <div>
            <section className="text-center py-12 sm:py-16">
                <h1 className="font-poppins text-4xl sm:text-6xl font-extrabold mb-4 text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
                    NEET/JEE Chapterwise Quizzes
                </h1>
                <p className="text-lg sm:text-xl text-white/90 font-medium max-w-3xl mx-auto [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                    Select your class to start practicing with our chapter-specific quizzes.
                </p>
            </section>
            
            <div className="space-y-16">
                <QuizSection title="Class 11 Quizzes" quizzes={class11Quizzes} />
                <QuizSection title="Class 12 Quizzes" quizzes={class12Quizzes} />
            </div>
        </div>
    );
};

export default QuizView;