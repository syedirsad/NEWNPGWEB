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

    return <div>{renderContent()}</div>;
};

const ViewHeader: React.FC<{title: string, subtitle: string, onBack?: () => void}> = ({ title, subtitle, onBack }) => (
    <div className="mb-12">
        {onBack && (
             <button onClick={onBack} className="flex items-center gap-2 font-semibold text-white/80 hover:text-white mb-6 transition-colors [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Class Selection</span>
            </button>
        )}
        <div className="text-center">
            <h1 className="font-poppins text-4xl sm:text-5xl font-extrabold mb-4 text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">{title}</h1>
            <p className="text-lg sm:text-xl text-white/90 font-medium max-w-3xl mx-auto [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">{subtitle}</p>
        </div>
    </div>
);

const SelectionCard: React.FC<{title: string, description: string, icon: string, onClick: () => void}> = ({ title, description, icon, onClick }) => (
     <div onClick={onClick} className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center cursor-pointer">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl shadow-md bg-gradient-to-br from-emerald-500 to-green-600 mb-6">
            <i className={icon}></i>
        </div>
        <h3 className="font-poppins text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
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
                    <div key={unit.unitName} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                        <h3 className="font-poppins text-2xl font-bold mb-4 text-gray-800 border-b-2 border-cyan-500/30 pb-3">{unit.unitName}</h3>
                        <ul className="space-y-3">
                            {unit.simulations.map(sim => (
                                <li key={sim.topic} className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-white/40">
                                    <span className="font-semibold text-gray-700">{sim.topic}</span>
                                    <a 
                                        href={sim.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 group"
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