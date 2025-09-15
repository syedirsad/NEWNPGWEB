import React from 'react';
import { ViewType, MaterialScreen } from '../types';

interface HomeProps {
    setView: (view: ViewType, materialScreen?: MaterialScreen) => void;
}

const ActionButton: React.FC<{ onClick?: () => void; href?: string; children: React.ReactNode; className?: string; type?: 'primary' | 'secondary' }> = ({ onClick, href, children, className = '', type = 'primary' }) => {
    const commonClasses = `w-full text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 group btn-glossy ${type === 'primary' ? 'active' : ''} ${className}`;
    
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
                {children}
            </a>
        );
    }
    
    return (
        <button onClick={onClick} className={commonClasses}>
            {children}
        </button>
    );
};


const ResourceCard: React.FC<{
    title: string;
    description: string;
    icon: string;
    iconBgClass: string;
    buttonText?: string;
    badge?: string;
    badgeBgClass?: string;
    onClick?: () => void;
    href?: string;
    children?: React.ReactNode;
}> = ({ title, description, icon, iconBgClass, buttonText, badge, badgeBgClass, onClick, href, children }) => (
    <div className="card-3d flex flex-col p-6">
        <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md ${iconBgClass}`}>
                <i className={icon}></i>
            </div>
            {badge && <div className={`px-3 py-1 rounded-full text-xs font-bold ${badgeBgClass}`}>{badge}</div>}
        </div>
        <div className="flex-grow text-left">
            <h3 className="font-poppins text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto">
            {children}
            {buttonText && (
                <ActionButton onClick={onClick} href={href}>
                    <span>{buttonText}</span>
                    <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </ActionButton>
            )}
        </div>
    </div>
);

const CommunityCard: React.FC<{
    title: string;
    description: string;
    icon: string;
    buttonText: string;
    link: string;
    iconBgClass: string;
    buttonBgClass: string;
}> = ({ title, description, icon, buttonText, link, iconBgClass, buttonBgClass }) => (
    <div className="card-3d flex flex-col text-center p-6">
        <div className="mx-auto mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-md ${iconBgClass}`}>
                <i className={icon}></i>
            </div>
        </div>
        <div className="flex-grow">
            <h3 className="font-poppins text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 mb-6 text-sm">{description}</p>
        </div>
        <div className="mt-auto">
            <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group ${buttonBgClass}`}
            >
                <span>{buttonText}</span>
                <i className="fas fa-external-link-alt transform group-hover:scale-110 transition-transform"></i>
            </a>
        </div>
    </div>
);

const Home: React.FC<HomeProps> = ({ setView }) => {
    return (
        <div>
            <section className="text-center py-20 sm:py-28 relative parallax-section" data-parallax-speed="0.3">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
                    <img src="https://cdn.jsdelivr.net/gh/syedirsad/CHAP1@main/logo.png" alt="" className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-pulse" style={{ animationDuration: '4s' }} />
                </div>
                <div className="relative z-10">
                    <h1 className="font-poppins text-4xl sm:text-6xl font-extrabold mb-4 text-white animate-glow">
                        NEET PHYSICS GUJARATI
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-3xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Learn Smarter
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 parallax-section" data-parallax-speed="0.1">
                 <ResourceCard
                    title="Chapterwise Quizzes"
                    description="Test your knowledge with quizzes for every chapter of Class 11 & 12."
                    icon="fas fa-question-circle"
                    iconBgClass="bg-gradient-to-br from-amber-500 to-red-500"
                    buttonText="Start Practicing"
                    onClick={() => setView('quizzes')}
                />
                <ResourceCard
                    title="NEET Materials"
                    description="Complete chapter-wise NEET preparation materials for Class 11 & 12."
                    icon="fas fa-graduation-cap"
                    iconBgClass="bg-gradient-to-br from-rose-500 to-pink-600"
                    badge="NEET"
                    badgeBgClass="bg-pink-100 text-pink-800"
                    buttonText="Explore Materials"
                    onClick={() => setView('materials', 'neet')}
                />
                <ResourceCard
                    title="NCERT Materials"
                    description="Complete NCERT Physics notes for Class 11 & 12 in English Medium."
                    icon="fas fa-book"
                    iconBgClass="bg-gradient-to-br from-purple-500 to-indigo-600"
                    badge="PDF"
                    badgeBgClass="bg-purple-100 text-purple-800"
                    buttonText="View Materials"
                    onClick={() => setView('materials', 'ncert')}
                />
                <ResourceCard
                    title="GSEB Question Bank"
                    description="Solve official board question banks with detailed, section-wise solutions."
                    icon="fas fa-university"
                    iconBgClass="bg-gradient-to-br from-sky-500 to-cyan-600"
                    buttonText="View Solutions"
                    onClick={() => setView('question-bank')}
                />
                 <ResourceCard
                    title="GSEB Blueprint 2026"
                    description="Complete Exam Blueprint & Strategy for the Class 12 Physics Exam."
                    icon="fas fa-chart-line"
                    iconBgClass="bg-gradient-to-br from-emerald-500 to-green-600"
                    badge="Essential"
                    badgeBgClass="bg-green-100 text-green-800"
                    buttonText="View Blueprint"
                    href="https://syedirsad.github.io/march2026tips/"
                />
                <ResourceCard
                    title="Board Exam Papers"
                    description="GSEB Physics Papers (2018-2025) for English & Gujarati medium."
                    icon="fas fa-file-alt"
                    iconBgClass="bg-gradient-to-br from-slate-500 to-slate-700"
                    badge="Download"
                    badgeBgClass="bg-slate-100 text-slate-800"
                >
                    <div className="space-y-3">
                        <ActionButton href="https://github.com/syedirsad/allpdf/raw/main/EM%20PHYSICS%20BOARDS%20PAPER.pdf" type="secondary">
                             <i className="fas fa-download"></i><span>English Medium</span>
                        </ActionButton>
                         <ActionButton href="https://github.com/syedirsad/allpdf/raw/main/GM%20PHYSICS%20BOARDS%20PAPER.pdf" type="secondary">
                             <i className="fas fa-download"></i><span>ગુજરાતી માધ્યમ</span>
                        </ActionButton>
                    </div>
                </ResourceCard>
            </section>

             <hr className="glowing-divider" />

             <section className="parallax-section" data-parallax-speed="0.05">
                <div className="text-center mb-12">
                     <h2 className="section-title text-3xl sm:text-4xl">Join Our Learning Community</h2>
                    <p className="section-subtitle text-lg">Connect with thousands of NEET aspirants and get your doubts solved.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <CommunityCard 
                        title="YouTube"
                        description="Watch NEET Physics content, live sessions, and PYQ walkthroughs."
                        icon="fab fa-youtube"
                        buttonText="Subscribe Now"
                        link="https://www.youtube.com/@npgujarati"
                        iconBgClass="bg-red-600"
                        buttonBgClass="bg-red-500 hover:bg-red-600 hover:shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                    />
                     <CommunityCard 
                        title="WhatsApp"
                        description="Join our active study group for peer discussions and important updates."
                        icon="fab fa-whatsapp"
                        buttonText="Join Group"
                        link="https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm"
                        iconBgClass="bg-green-500"
                        buttonBgClass="bg-green-500 hover:bg-green-600 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]"
                    />
                     <CommunityCard 
                        title="Telegram"
                        description="Get instant updates, study materials, and important notices."
                        icon="fab fa-telegram"
                        buttonText="Join Channel"
                        link="https://t.me/neet_physics_gujarati"
                        iconBgClass="bg-sky-500"
                        buttonBgClass="bg-sky-500 hover:bg-sky-600 hover:shadow-[0_0_15px_rgba(14,165,233,0.7)]"
                    />
                     <CommunityCard 
                        title="Instagram"
                        description="Follow for quick tips, visual learning content, and daily motivation."
                        icon="fab fa-instagram"
                        buttonText="Follow Us"
                        link="https://instagram.com/neet_physics.gujarati"
                        iconBgClass="bg-gradient-to-br from-purple-600 to-pink-600"
                        buttonBgClass="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-[0_0_15px_rgba(219,39,119,0.7)]"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
