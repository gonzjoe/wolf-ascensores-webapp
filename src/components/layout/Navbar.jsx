import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hexagon, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Ingeniería', path: '/servicios' },
        { name: 'Soporte 24/7', path: '/contacto' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center text-cyan-400">
                        <Hexagon className="w-10 h-10 stroke-[1.5] group-hover:stroke-indigo-400 transition-colors duration-500" />
                        <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-widest uppercase flex flex-col leading-none">
                        WOLF <span className="text-[0.6rem] text-cyan-500 font-light tracking-[0.3em]">Industrial</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                        {links.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-all duration-300 relative ${isActive ? 'text-white' : 'text-slate-400 hover:text-cyan-300'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <Link to="/contacto" className="relative group overflow-hidden rounded-full p-[1px]">
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity blur-[2px]"></span>
                        <div className="relative bg-slate-950 px-6 py-2.5 rounded-full flex items-center justify-center transition-all group-hover:bg-slate-900">
                            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
                                Auditoría Urgente
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden text-slate-300">
                    <Menu className="w-8 h-8" />
                </button>

            </div>
        </motion.nav>
    );
}
