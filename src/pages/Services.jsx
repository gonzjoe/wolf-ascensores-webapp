import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="flex-1 px-6 md:px-20 py-16 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                    Nuestros Servicios Especializados
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Soluciones integrales de ingeniería para el transporte vertical industrial, garantizando seguridad, eficiencia y continuidad operativa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group flex flex-col bg-slate-900 border border-slate-800 p-8 rounded-xl transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5">
                    <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg bg-blue-500/10 text-blue-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Mantenimiento Preventivo</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">
                        Inspecciones regulares y técnicas de diagnóstico predictivo para garantizar la longevidad y seguridad de sus equipos industriales.
                    </p>
                    <div className="mt-auto">
                        <Link className="inline-flex items-center text-blue-500 font-bold hover:gap-2 transition-all" to="/contacto">
                            Saber Más
                            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>

                <div className="group flex flex-col bg-slate-900 border border-slate-800 p-8 rounded-xl transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5">
                    <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg bg-red-500/10 text-red-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Respuesta Correctiva</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">
                        Reparaciones rápidas 24/7 con repuestos originales ante cualquier falla técnica, minimizando los tiempos de inactividad operativa.
                    </p>
                    <div className="mt-auto">
                        <Link className="inline-flex items-center text-blue-500 font-bold hover:gap-2 transition-all" to="/contacto">
                            Solicitar Rescate
                            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>

                <div className="group flex flex-col bg-slate-900 border border-slate-800 p-8 rounded-xl transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5">
                    <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg bg-green-500/10 text-green-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Modernización de Equipos</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">
                        Actualización tecnológica de sistemas de control y tracción para mejorar la eficiencia energética y el rendimiento general.
                    </p>
                    <div className="mt-auto">
                        <Link className="inline-flex items-center text-blue-500 font-bold hover:gap-2 transition-all" to="/contacto">
                            Pedir Presupuesto
                            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-20 rounded-2xl overflow-hidden relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee82522bdc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}></div>
                <div className="relative z-20 flex flex-col justify-center h-full px-10 max-w-xl">
                    <h2 className="text-white text-3xl font-bold mb-4">¿Necesita un diagnóstico técnico?</h2>
                    <p className="text-slate-300 mb-8">Nuestros ingenieros están listos para evaluar sus sistemas y proponer el mejor plan de mantenimiento.</p>
                    <div className="flex gap-4">
                        <Link to="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-colors">Contactar Ingeniería</Link>
                        <Link to="/contacto" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-lg font-bold transition-colors">Línea de Emergencia</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
