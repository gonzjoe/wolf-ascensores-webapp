import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-auto text-slate-400">
            <div className="mx-auto max-w-[1440px] px-6 md:px-20 flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col gap-6 max-w-xs">
                    <div className="flex items-center gap-3 text-blue-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z"></path></svg>
                        <h2 className="text-slate-100 text-xl font-bold">Wolf Ascensores</h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Elevando los estándares de seguridad y eficiencia en transporte vertical industrial y comercial desde 1995.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="text-slate-100 font-bold">Servicios</h4>
                        <nav className="flex flex-col gap-2">
                            <Link className="hover:text-blue-500 transition-colors" to="/servicios">Inspecciones</Link>
                            <Link className="hover:text-blue-500 transition-colors" to="/servicios">Mantenimiento preventivo</Link>
                            <Link className="hover:text-blue-500 transition-colors" to="/servicios">Modernización</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="text-slate-100 font-bold">Soporte</h4>
                        <nav className="flex flex-col gap-2">
                            <Link className="hover:text-blue-500 transition-colors" to="/contacto">Contacto 24/7</Link>
                            <Link className="hover:text-blue-500 transition-colors" to="/contacto">Emergencias</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[1440px] px-6 md:px-20 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© {new Date().getFullYear()} Wolf Ascensores. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
