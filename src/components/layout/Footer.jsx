import { Link } from 'react-router-dom';
import { Hexagon, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/5 py-24 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[50px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center xl:items-start xl:flex-row justify-between gap-16">

                {/* Brand Section */}
                <div className="flex flex-col gap-6 max-w-sm text-center xl:text-left items-center xl:items-start">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center text-cyan-400">
                            <Hexagon className="w-10 h-10 stroke-[2] group-hover:stroke-indigo-400 transition-colors duration-500" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-widest uppercase flex flex-col leading-none">
                            WOLF <span className="text-[0.6rem] text-cyan-500 font-light tracking-[0.3em]">Industrial</span>
                        </span>
                    </Link>
                    <p className="text-slate-400 font-light leading-relaxed">
                        Elevando los estándares de seguridad y eficiencia en transporte vertical industrial y comercial a nivel global. Operaciones 24/7 sin descanso.
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 w-full xl:w-auto text-center sm:text-left border-l border-white/5 pl-0 xl:pl-20">

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm flex items-center gap-2 justify-center sm:justify-start">
                            <span>Marco Operativo</span>
                        </h4>
                        <nav className="flex flex-col gap-4">
                            <Link className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start" to="/servicios">
                                Matriz Preventiva <ExternalLink className="w-3 h-3 opacity-50" />
                            </Link>
                            <Link className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start" to="/servicios">
                                Arquitectura de Modernización <ExternalLink className="w-3 h-3 opacity-50" />
                            </Link>
                            <Link className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start" to="/servicios">
                                Respuesta Crítica <ExternalLink className="w-3 h-3 opacity-50" />
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm flex items-center gap-2 justify-center sm:justify-start">
                            <span>Nervio Central</span>
                        </h4>
                        <nav className="flex flex-col gap-4">
                            <a className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start" href="tel:+1">
                                <Phone className="w-4 h-4" /> +57 300 000 0000
                            </a>
                            <a className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start" href="mailto:soporte@wolf.com">
                                <Mail className="w-4 h-4" /> ingeniería@wolf.com
                            </a>
                            <span className="text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all text-sm font-light flex items-center gap-2 justify-center sm:justify-start">
                                <MapPin className="w-4 h-4" /> Nodo Central Operativo, Bogotá
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600 font-light tracking-wide">
                <p>© {new Date().getFullYear()} WOLF ASCENSORES ENGINEERING. Protocolo de Seguridad Activo.</p>
                <div className="flex gap-6">
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Términos Legales</Link>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Política de Datos</Link>
                </div>
            </div>
        </footer>
    );
}
