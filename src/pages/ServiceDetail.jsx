import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, Zap, ShieldCheck, Mail } from 'lucide-react';

export default function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
                <h1 className="text-4xl font-black mb-4">Servicio no encontrado</h1>
                <Link to="/servicios" className="text-cyan-400 hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Volver a Servicios
                </Link>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full bg-slate-950 text-slate-100 overflow-hidden pb-24">
            {/* Hero Banner */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30 grayscale-[0.8]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center px-6 max-w-4xl"
                >
                    <Link to="/servicios" className="inline-flex items-center gap-2 text-cyan-400 mb-8 hover:translate-x-[-4px] transition-transform font-bold uppercase tracking-widest text-sm">
                        <ArrowLeft className="w-4 h-4" /> Servicios
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                        {service.title}
                    </h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-[-50px] relative z-20">

                {/* Left: Detail Content */}
                <div className="lg:col-span-2 space-y-16">
                    {service.content.map((block, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">{block.subtitle}</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                {block.text}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-white">Especificaciones Técnicas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.fullFeatures.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 bg-slate-900/30 p-5 rounded-2xl border border-white/5 group hover:bg-slate-800/50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <span className="text-slate-300 font-light">{f}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Sidebar / CTA */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="sticky top-32 bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl"
                    >
                        <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-black text-white mb-4">¿Necesita una cotización?</h3>
                        <p className="text-indigo-200/70 text-sm font-light mb-8">
                            Nuestro departamento de ingeniería evaluará su equipo y le entregará un plan de acción detallado en menos de 24 horas.
                        </p>

                        <div className="space-y-4">
                            <Link to="/contacto" className="flex items-center justify-center gap-2 w-full bg-cyan-400 text-slate-950 py-4 rounded-xl font-black hover:bg-cyan-300 transition-all">
                                <Mail className="w-5 h-5" /> Solicitar Presupuesto
                            </Link>
                            <a href="tel:555" className="flex items-center justify-center gap-2 w-full border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                                <Zap className="w-5 h-5 text-yellow-400" /> Línea de Ingeniería
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-[0.7rem] text-slate-500 uppercase tracking-widest font-bold mb-4">Garantías Wolf</p>
                            <ul className="space-y-2">
                                <li className="text-xs text-slate-400 flex items-center gap-2">✓ Repuestos Originales</li>
                                <li className="text-xs text-slate-400 flex items-center gap-2">✓ Seguro de Responsabilidad Civil</li>
                                <li className="text-xs text-slate-400 flex items-center gap-2">✓ Certificación de Seguridad Industrial</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

            </section>
        </div>
    );
}
