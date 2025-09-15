import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; hoverClass: string }> = ({ href, icon, hoverClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center text-white/70 bg-white/10 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverClass}`}>
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/30 text-white pt-12 pb-8 mt-16">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8 text-white/60">
                        <div className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-300 group cursor-default">
                            <i className="fas fa-phone transition-transform duration-300 group-hover:scale-110"></i>
                            <span>+91 96018 27762</span>
                        </div>
                        <div className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-300 group cursor-default">
                            <i className="fab fa-telegram transition-transform duration-300 group-hover:scale-110"></i>
                            <span>@neet_physics_gujarati</span>
                        </div>
                        <div className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-300 group cursor-default">
                            <i className="fab fa-instagram transition-transform duration-300 group-hover:scale-110"></i>
                            <span>@neet_physics.gujarati</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <SocialLink href="https://www.youtube.com/@npgujarati" icon="fab fa-youtube" hoverClass="hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
                        <SocialLink href="https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm" icon="fab fa-whatsapp" hoverClass="hover:bg-green-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
                        <SocialLink href="https://t.me/neet_physics_gujarati" icon="fab fa-telegram" hoverClass="hover:bg-sky-500 hover:text-white hover:shadow-[0_0_15px_rgba(14,165,233,0.7)]" />
                        <SocialLink href="https://instagram.com/neet_physics.gujarati" icon="fab fa-instagram" hoverClass="hover:bg-pink-600 hover:text-white hover:shadow-[0_0_15px_rgba(219,39,119,0.7)]" />
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 mt-8">
                    <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Syed Irsad. Contact: SYED.IRSAD@GMAIL.COM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
