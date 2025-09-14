import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import QuizView from './components/QuizView';
import MaterialsView from './components/MaterialsView';
import QuestionBankView from './components/QuestionBankView';
import Footer from './components/Footer';
import { ViewType, MaterialScreen } from './types';

const App: React.FC = () => {
    const [view, setView] = useState<ViewType>('home');
    const [initialMaterialScreen, setInitialMaterialScreen] = useState<MaterialScreen>('main');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetView = (newView: ViewType, materialScreen: MaterialScreen = 'main') => {
        setView(newView);
        setInitialMaterialScreen(materialScreen);
        setIsMenuOpen(false); // Close mobile menu on navigation
    };

    const renderView = () => {
        switch (view) {
            case 'quizzes':
                return <QuizView />;
            case 'materials':
                return <MaterialsView initialScreen={initialMaterialScreen} />;
            case 'question-bank':
                return <QuestionBankView />;
            case 'home':
            default:
                return <Home setView={handleSetView} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Navigation currentView={view} setView={handleSetView} isMenuOpen={isMenuOpen} />
            <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;