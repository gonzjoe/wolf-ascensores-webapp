import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex-1">
            {/* Hero Section */}
            <div className="relative overflow-hidden w-full">
                <div className="mx-auto max-w-[1440px] px-6 md:px-20 py-12 md:py-24">
                    <div className="relative flex min-h-[520px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center overflow-hidden p-8 text-center"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(16, 25, 34, 0.8), rgba(16, 25, 34, 0.95)), url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <span className="inline-block mx-auto px-4 py-1 rounded-full bg-blue-600/20 text-blue-500 border border-blue-500/30 text-xs font-bold uppercase tracking-widest mb-2">
                                Seguridad Certificada
                            </span>
                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Mantenimiento de Ascensores <br /> Seguridad Industrial
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">
                                Garantizamos la máxima fiabilidad y seguridad en cada trayecto con soporte técnico especializado disponible en todo momento.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contacto" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-600 text-white text-base font-bold shadow-xl shadow-blue-600/30 hover:scale-[1.02] hover:bg-blue-500 transition-all">
                                Solicitar Inspección Rápida
                            </Link>
                            <Link to="/servicios" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/5 text-white text-base font-bold backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                                Ver Nuestros Planes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Propositions */}
            <div className="mx-auto max-w-[1440px] px-6 md:px-20 py-16">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-slate-100 text-3xl md:text-4xl font-bold leading-tight">Nuestros Pilares de Confianza</h2>
                            <p className="text-slate-400 text-lg leading-normal">
                                Líderes en el sector de mantenimiento industrial con un enfoque obsesivo en la prevención y respuesta inmediata ante cualquier incidencia.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-blue-500/50 transition-colors group">
                            <div className="size-14 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-slate-100 text-xl font-bold">Soporte 24/7</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Atención inmediata para emergencias en cualquier momento del día. Disponemos de brigadas móviles siempre activas para su tranquilidad.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-blue-500/50 transition-colors group">
                            <div className="size-14 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-slate-100 text-xl font-bold">Técnicos Certificados</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Personal altamente calificado bajo normativas internacionales de seguridad (ISO/OIT). Formación continua en las últimas tecnologías.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-blue-500/50 transition-colors group">
                            <div className="size-14 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-slate-100 text-xl font-bold">Mantenimiento Preventivo</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Programas personalizados mediante análisis predictivo para extender la vida útil de sus equipos y evitar paradas innecesarias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mx-auto max-w-[1440px] px-6 md:px-20 py-16 mb-10">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 md:p-16 border border-slate-800">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 size-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 size-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 flex flex-col items-center text-center gap-8">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">¿Necesita una revisión técnica urgente?</h2>
                            <p className="text-slate-400 text-lg">
                                Nuestro equipo de ingenieros y especialistas está listo para asegurar el funcionamiento óptimo de sus instalaciones.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link to="/contacto" className="flex min-w-[240px] items-center justify-center rounded-lg h-14 px-8 bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] hover:bg-blue-500 transition-all">
                                Contactar Ahora
                            </Link>
                            <a href="tel:5551234567" className="flex min-w-[240px] items-center justify-center rounded-lg h-14 px-8 bg-transparent border border-slate-700 text-white text-base font-bold hover:bg-slate-800 hover:border-slate-600 transition-colors">
                                Llamada de Emergencia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
