import React, { useState } from 'react';
import { simulationData } from '../data/simulations';
import { SimulationUnit } from '../types';

type ViewStep = 'class' | 'simulations';
type ClassNumber = '11' | '12';

const SimulationsView: React.FC = () => {
    const [step, setStep] = useState<ViewStep>('class');
    const [selectedClass, setSelectedClass] = useState<ClassNumber | null>(null);

    const handleClassSelect = (classNum: ClassNumber) => {
        setSelectedClass(classNum);
        setStep('simulations');
    };

    const handleBack = () => {
        setStep('class');
        setSelectedClass(null);
    };
    
    const renderContent = () => {
        switch (step) {
            case 'simulations':
                return selectedClass && <SimulationList classNum={selectedClass} onBack={handleBack} />;
            case 'class':
            default:
                return <ClassSelection onSelect={handleClassSelect} />;
        }
    };

    return <div className="parallax-section" data-parallax-speed="0.1">{renderContent()}</div>;
};

const ViewHeader: React.FC<{title: string, subtitle: string, onBack?: () => void}> = ({ title, subtitle, onBack }) => (
    <div className="mb-12">
        {onBack && (
             <button onClick={onBack} className="interactive-link-text flex items-center gap-2 font-semibold text-white/80 mb-6">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Class Selection</span>
            </button>
        )}
        <div className="text-center">
            <h1 className="section-title text-4xl sm:text-5xl mb-4">{title}</h1>
            <p className="section-subtitle text-lg sm:text-xl">{subtitle}</p>
        </div>
    </div>
);

const SelectionCard: React.FC<{title: string, description: string, icon: string, onClick: () => void}> = ({ title, description, icon, onClick }) => (
     <div onClick={onClick} className="card-3d p-8 flex flex-col items-center text-center cursor-pointer">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl shadow-md bg-gradient-to-br from-emerald-500 to-green-600 mb-6">
            <i className={icon}></i>
        </div>
        <h3 className="font-poppins text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
    </div>
);

const ClassSelection: React.FC<{onSelect: (classNum: ClassNumber) => void}> = ({ onSelect }) => (
    <div>
        <ViewHeader title="Physics Simulations" subtitle="Select your class to explore interactive PhET simulations." />
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <SelectionCard title="Class 11" description="Explore simulations for Standard 11 topics" icon="fas fa-atom" onClick={() => onSelect('11')} />
            <SelectionCard title="Class 12" description="Explore simulations for Standard 12 topics" icon="fas fa-bolt" onClick={() => onSelect('12')} />
        </div>
    </div>
);

const SimulationList: React.FC<{classNum: ClassNumber, onBack: () => void}> = ({ classNum, onBack }) => {
    const units = simulationData[classNum];

    return (
        <div>
            <ViewHeader 
                title={`Class ${classNum} Simulations`} 
                subtitle="Interactive simulations organized by NCERT units." 
                onBack={onBack}
            />
            <div className="space-y-10">
                {units.map((unit: SimulationUnit) => (
                    <div key={unit.unitName} className="card-3d p-6">
                        <h3 className="font-poppins text-2xl font-bold mb-4 text-white border-b-2 border-cyan-500/30 pb-3">{unit.unitName}</h3>
                        <ul className="space-y-3">
                            {unit.simulations.map(sim => (
                                <li key={sim.topic} className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-black/20 group">
                                    <span className="font-semibold text-white/90 transition-colors duration-300 group-hover:text-cyan-300">{sim.topic}</span>
                                    <a 
                                        href={sim.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(7,191,255,0.7)] flex items-center justify-center gap-2 group"
                                    >
                                        <span>Launch</span>
                                        <i className="fas fa-external-link-alt transform group-hover:scale-110 transition-transform"></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SimulationsView;