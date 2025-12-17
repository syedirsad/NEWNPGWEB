import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; hoverClass: string }> = ({ href, icon, hoverClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center text-gray-400 bg-white/5 border border-white/5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-neon hover:text-white ${hoverClass}`}>
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-24 border-t border-white/5 bg-background-deep/50 backdrop-blur-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-neon/50 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
                <div className="mb-10">
                    <h3 className="text-2xl font-heading font-bold text-white mb-6 tracking-wide">Stay Connected</h3>
                    <div className="flex justify-center flex-wrap gap-x-10 gap-y-4 mb-10 text-gray-400">
                        <div className="flex items-center gap-3 transition-colors duration-300 hover:text-primary-neon group cursor-pointer p-2 rounded-lg hover:bg-white/5">
                            <i className="fas fa-phone transition-transform duration-300 group-hover:rotate-12"></i>
                            <span className="font-mono tracking-wider">+91 96018 27762</span>
                        </div>
                        <div className="flex items-center gap-3 transition-colors duration-300 hover:text-secondary-purple group cursor-pointer p-2 rounded-lg hover:bg-white/5">
                            <i className="fab fa-telegram transition-transform duration-300 group-hover:-rotate-12"></i>
                            <span className="font-mono tracking-wider">@neet_physics_gujarati</span>
                        </div>
                        <div className="flex items-center gap-3 transition-colors duration-300 hover:text-accent-pink group cursor-pointer p-2 rounded-lg hover:bg-white/5">
                            <i className="fab fa-instagram transition-transform duration-300 group-hover:scale-110"></i>
                            <span className="font-mono tracking-wider">@neet_physics.gujarati</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        <SocialLink href="https://www.youtube.com/@npgujarati" icon="fab fa-youtube" hoverClass="hover:bg-red-600 hover:border-red-500" />
                        <SocialLink href="https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm" icon="fab fa-whatsapp" hoverClass="hover:bg-green-500 hover:border-green-400" />
                        <SocialLink href="https://t.me/neet_physics_gujarati" icon="fab fa-telegram" hoverClass="hover:bg-sky-500 hover:border-sky-400" />
                        <SocialLink href="https://instagram.com/neet_physics.gujarati" icon="fab fa-instagram" hoverClass="hover:bg-pink-600 hover:border-pink-500" />
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-2">&copy; {new Date().getFullYear()} Syed Irsad. All rights reserved.</p>
                    <p className="text-gray-600 text-xs font-mono tracking-widest">DESIGNED FOR EXCELLENCE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
