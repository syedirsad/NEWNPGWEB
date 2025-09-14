
import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; brandClass: string }> = ({ href, icon, brandClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${brandClass}`}>
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2C3E50] text-white pt-12 pb-8 mt-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8 text-white/80">
                        <div className="flex items-center gap-2">
                            <i className="fas fa-phone"></i>
                            <span>+91 96018 27762</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fab fa-telegram"></i>
                            <span>@neet_physics_gujarati</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fab fa-instagram"></i>
                            <span>@neet_physics.gujarati</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <SocialLink href="https://www.youtube.com/@npgujarati" icon="fab fa-youtube" brandClass="bg-red-600" />
                        <SocialLink href="https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm" icon="fab fa-whatsapp" brandClass="bg-green-500" />
                        <SocialLink href="https://t.me/neet_physics_gujarati" icon="fab fa-telegram" brandClass="bg-sky-500" />
                        <SocialLink href="https://instagram.com/neet_physics.gujarati" icon="fab fa-instagram" brandClass="bg-pink-600" />
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 mt-8">
                    <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Syed Irsad. Contact: SYED.IRSAD@GMAIL.COM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
