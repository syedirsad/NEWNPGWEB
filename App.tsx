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

    const handleSetView = (newView: ViewType, materialScreen: MaterialScreen = 'main') => {
        setView(newView);
        setInitialMaterialScreen(materialScreen);
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
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <div className="bg-animated-gradient fixed inset-0 z-[-1]"></div>
            <Header />
            <Navigation currentView={view} setView={handleSetView} />
            <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;