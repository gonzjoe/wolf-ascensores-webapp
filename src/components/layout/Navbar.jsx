import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between whitespace-nowrap border-b border-slate-800 px-6 md:px-20 py-4 bg-slate-950 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-blue-500">
                <div className="size-8 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z"></path></svg>
                </div>
                <Link to="/" className="text-slate-100 text-xl font-bold leading-tight tracking-tight hover:text-blue-500 transition-colors">
                    Wolf Ascensores
                </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-slate-400 text-sm font-medium hover:text-blue-500 transition-colors">Inicio</Link>
                    <Link to="/servicios" className="text-slate-400 text-sm font-medium hover:text-blue-500 transition-colors">Servicios</Link>
                    <Link to="/contacto" className="text-slate-400 text-sm font-medium hover:text-blue-500 transition-colors">Contacto</Link>
                </div>
                <Link to="/contacto" className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all">
                    Solicitar Inspección
                </Link>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center text-slate-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>
        </nav>
    );
}
