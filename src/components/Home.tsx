import React from 'react';
import { ViewType, MaterialScreen } from '../types';

interface HomeProps {
    setView: (view: ViewType, materialScreen?: MaterialScreen) => void;
}

const ActionButton: React.FC<{ onClick?: () => void; href?: string; children: React.ReactNode; className?: string; type?: 'primary' | 'secondary' }> = ({ onClick, href, children, className = '', type = 'primary' }) => {
    const commonClasses = `w-full font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 group transition-all duration-300 ${type === 'primary'
        ? 'btn-primary'
        : 'btn-secondary'
        } ${className}`;

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
    iconColorClass: string;
    buttonText?: string;
    badge?: string;
    badgeColorClass?: string;
    onClick?: () => void;
    href?: string;
    children?: React.ReactNode;
}> = ({ title, description, icon, iconColorClass, buttonText, badge, badgeColorClass, onClick, href, children }) => (
    <div className="glass-panel p-8 card-hover-effect flex flex-col relative overflow-hidden group">
        {/* Glow Effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${iconColorClass.replace('text-', 'bg-')}`}></div>

        <div className="flex items-start justify-between mb-6 relative z-10">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/10 ${iconColorClass} bg-white/5`}>
                <i className={icon}></i>
            </div>
            {badge && (
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColorClass} bg-opacity-10 backdrop-blur-sm`}>
                    {badge}
                </div>
            )}
        </div>
        <div className="flex-grow text-left relative z-10">
            <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-primary-neon transition-colors">{title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
        </div>
        <div className="mt-auto relative z-10">
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
    colorClass: string;
}> = ({ title, description, icon, buttonText, link, colorClass }) => (
    <div className="glass-panel p-6 text-center card-hover-effect group relative overflow-hidden border-t-2 border-transparent hover:border-white/20">
        <div className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-background-deep ${colorClass} bg-white transition-transform group-hover:scale-110 group-hover:rotate-6`}>
            <i className={icon}></i>
        </div>
        <div className="flex-grow">
            <h3 className="font-heading text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-6 text-sm">{description}</p>
        </div>
        <div className="mt-auto">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorClass.replace('text-', 'bg-')} hover:brightness-110`}
            >
                <span>{buttonText}</span>
                <i className="fas fa-external-link-alt text-sm"></i>
            </a>
        </div>
    </div>
);

const Home: React.FC<HomeProps> = ({ setView }) => {
    return (
        <div className="animate-fade-in-up">
            <section className="text-center py-20 sm:py-32 relative parallax-section z-10" data-parallax-speed="0.3">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mesh opacity-30 blur-3xl rounded-full pointer-events-none"></div>

                <div className="relative z-10 space-y-8">
                    {/* Main Title with Holographic Effect */}
                    <h1 className="font-heading text-6xl sm:text-8xl font-black mb-6 tracking-tighter relative inline-block">
                        <span className="absolute inset-0 text-primary-neon opacity-20 blur-xl animate-pulse">NEET PHYSICS</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_25px_rgba(0,242,255,0.4)] relative z-10">NEET PHYSICS</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-secondary-purple drop-shadow-neon text-5xl sm:text-7xl">GUJARATI</span>
                    </h1>

                    {/* Subheading - Tech/Mission Style */}
                    <p className="text-sm sm:text-lg text-cyan-100/70 font-mono uppercase tracking-[0.2em] max-w-2xl mx-auto border-x border-primary-neon/20 px-4 py-2 bg-background-deep/50 backdrop-blur-sm">
                        Master Physics <span className="text-primary-neon">•</span> Ultimate Learning Platform <span className="text-primary-neon">•</span> Gujarati Medium
                    </p>

                    <div className="flex justify-center pt-8 pb-4">
                        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary-neon to-transparent opacity-70"></div>
                    </div>
                </div>

                {/* New Feature Badge - SciFi Version */}
                <div className="flex justify-center mt-8">
                    <a
                        href="https://npgpapergen.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between gap-6 bg-black/40 border border-primary-neon/30 backdrop-blur-md px-2 py-2 pr-8 rounded-full transition-all duration-300 hover:scale-105 hover:border-primary-neon hover:shadow-[0_0_40px_rgba(0,242,255,0.2)]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary-neon/10 border border-primary-neon/50 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-neon opacity-20"></span>
                                <i className="fas fa-rocket text-primary-neon text-lg"></i>
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-primary-neon animate-pulse">New Feature</span>
                                <span className="block text-sm font-bold text-white group-hover:text-cyan-100 transition-colors">Free Paper Generator <span className="text-xs font-normal text-gray-400 ml-1">(GSEB & CBSE)</span></span>
                            </div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="text-primary-neon text-sm font-bold group-hover:translate-x-1 transition-transform">
                            TRY NOW <i className="fas fa-chevron-right ml-1 text-xs"></i>
                        </div>
                    </a>
                </div>

                {/* Store Button */}
                <div className="flex justify-center mt-6">
                    <a
                        href="https://npgstore.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between gap-6 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-2 py-2 pr-8 rounded-full transition-all duration-300 hover:scale-105 hover:border-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                                <i className="fas fa-book-open text-amber-500 text-lg"></i>
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-500">Exam Oriented</span>
                                <span className="block text-sm font-bold text-white group-hover:text-amber-100 transition-colors">Buy Our Books <span className="text-xs font-normal text-gray-400 ml-1">(Both Medium)</span></span>
                            </div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="text-amber-500 text-sm font-bold group-hover:translate-x-1 transition-transform">
                            VISIT STORE <i className="fas fa-chevron-right ml-1 text-xs"></i>
                        </div>
                    </a>
                </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 parallax-section" data-parallax-speed="0.1">
                <ResourceCard
                    title="Chapterwise Quizzes"
                    description="Test your knowledge with adaptive quizzes for every chapter of Class 11 & 12."
                    icon="fas fa-brain"
                    iconColorClass="text-amber-500"
                    buttonText="Start Practicing"
                    onClick={() => setView('quizzes')}
                />
                <ResourceCard
                    title="NEET Materials"
                    description="Comprehensive chapter-wise preparation materials tailored for NEET aspirants."
                    icon="fas fa-microscope"
                    iconColorClass="text-pink-500"
                    badge="PREMIUM"
                    badgeColorClass="border-pink-500 text-pink-400"
                    buttonText="Explore Materials"
                    onClick={() => setView('materials', 'neet')}
                />
                <ResourceCard
                    title="NCERT Materials"
                    description="Complete NCERT Physics notes and solutions for Class 11 & 12."
                    icon="fas fa-book-reader"
                    iconColorClass="text-indigo-400"
                    badge="ESSENTIAL"
                    badgeColorClass="border-indigo-400 text-indigo-300"
                    buttonText="View Library"
                    onClick={() => setView('materials', 'ncert')}
                />
                <ResourceCard
                    title="GSEB Question Bank"
                    description="Official board question banks with detailed step-by-step solutions."
                    icon="fas fa-university"
                    iconColorClass="text-cyan-400"
                    buttonText="View Solutions"
                    onClick={() => setView('question-bank')}
                />
                <ResourceCard
                    title="GSEB Blueprint 2026"
                    description="Strategic Exam Blueprint & Preparation Guide for Class 12 Physics."
                    icon="fas fa-chess-knight"
                    iconColorClass="text-emerald-400"
                    badge="STRATEGY"
                    badgeColorClass="border-emerald-400 text-emerald-300"
                    buttonText="View Blueprint"
                    href="https://syedirsad.github.io/march2026tips/"
                />
                <ResourceCard
                    title="Board Exam Papers"
                    description="Archive of GSEB Physics Papers (2018-2025) for both mediums."
                    icon="fas fa-history"
                    iconColorClass="text-slate-200"
                    badge="DOWNLOAD"
                    badgeColorClass="border-slate-400 text-slate-300"
                >
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <ActionButton href="https://github.com/syedirsad/allpdf/raw/main/EM%20PHYSICS%20BOARDS%20PAPER.pdf" type="secondary" className="!py-2 !px-3 !text-sm">
                            <i className="fas fa-download"></i><span>English</span>
                        </ActionButton>
                        <ActionButton href="https://github.com/syedirsad/allpdf/raw/main/GM%20PHYSICS%20BOARDS%20PAPER.pdf" type="secondary" className="!py-2 !px-3 !text-sm">
                            <i className="fas fa-download"></i><span>Gujarati</span>
                        </ActionButton>
                    </div>
                </ResourceCard>
            </section>

            <div className="relative py-12 mb-12">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-neon/50 to-transparent shadow-neon"></div>
                <div className="relative z-10 flex justify-center">
                    <span className="px-6 py-2 bg-background-deep text-primary-neon border border-primary-neon/30 rounded-full font-mono text-sm tracking-widest uppercase shadow-neon">Community</span>
                </div>
            </div>

            <section className="parallax-section" data-parallax-speed="0.05">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">Join The Revolution</h2>
                    <p className="text-xl text-gray-400">Connect with thousands of aspirants. Learn, Share, Succeed.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CommunityCard
                        title="YouTube"
                        description="High-quality video lectures & PYQ solutions."
                        icon="fab fa-youtube"
                        buttonText="Subscribe"
                        link="https://www.youtube.com/@npgujarati"
                        colorClass="text-red-600"
                    />
                    <CommunityCard
                        title="WhatsApp"
                        description="Real-time doubts & study group."
                        icon="fab fa-whatsapp"
                        buttonText="Join Group"
                        link="https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm"
                        colorClass="text-green-500"
                    />
                    <CommunityCard
                        title="Telegram"
                        description="Notes, PDFs & Important alerts."
                        icon="fab fa-telegram"
                        buttonText="Join Channel"
                        link="https://t.me/neet_physics_gujarati"
                        colorClass="text-sky-500"
                    />
                    <CommunityCard
                        title="Instagram"
                        description="Daily motivation & quick tips."
                        icon="fab fa-instagram"
                        buttonText="Follow"
                        link="https://instagram.com/neet_physics.gujarati"
                        colorClass="text-pink-600"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;