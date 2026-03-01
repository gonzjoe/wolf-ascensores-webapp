import { motion } from 'framer-motion';
import { Target, Users, History, Award, Building2, CheckCircle2 } from 'lucide-react';

const values = [
    {
        icon: <Target className="w-8 h-8 text-cyan-400" />,
        title: "Misión",
        description: "Garantizar la seguridad y eficiencia del transporte vertical mediante soluciones de ingeniería predictiva y soporte técnico de clase mundial."
    },
    {
        icon: <Users className="w-8 h-8 text-indigo-400" />,
        title: "Equipo",
        description: "Contamos con un escuadrón de ingenieros certificados y técnicos especializados con más de 15 años de experiencia en el sector industrial."
    },
    {
        icon: <History className="w-8 h-8 text-emerald-400" />,
        title: "Trayectoria",
        description: "Más de dos décadas elevando estándares en centros corporativos, complejos industriales y residencias de lujo en toda la región."
    }
];

const stats = [
    { label: "Años de Experiencia", value: "25+" },
    { label: "Proyectos Completados", value: "1,200+" },
    { label: "Técnicos Certificados", value: "45" },
    { label: "Disponibilidad", value: "24/7" }
];

export default function About() {
    return (
        <div className="flex-1 w-full bg-slate-950 text-slate-100 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                                Elevamos más que <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                                    simples cabinas.
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                                Wolf Industrial nació de la necesidad de profesionalizar el mantenimiento de ascensores con un enfoque puramente orientado a la ingeniería y la seguridad extrema.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-900/50 border border-white/5 py-2 px-4 rounded-full">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm font-medium">ISO 9001 Certified</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-900/50 border border-white/5 py-2 px-4 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="text-sm font-medium">SGS Verified</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-2xl rounded-[2rem]"></div>
                            <img
                                src="https://images.unsplash.com/photo-1541888086225-ee82522bdc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Ingeniería Wolf"
                                className="relative rounded-[2rem] border border-white/10 shadow-2xl object-cover h-[500px] w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Nuestro ADN Corporativo</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group"
                            >
                                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                <p className="text-slate-400 font-light leading-relaxed">
                                    {v.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Section */}
            <section className="py-32 bg-slate-900/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Técnico"
                                    className="rounded-2xl border border-white/5 h-64 w-full object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Maquinaria"
                                    className="rounded-2xl border border-white/5 h-64 w-full object-cover mt-8"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl font-black mb-8">Infraestructura de Vanguardia</h2>
                            <p className="text-lg text-slate-400 font-light mb-6">
                                No solo reparamos, innovamos. Disponemos de laboratorios móviles y herramientas de diagnóstico digital que nos permiten ver el futuro de su equipo.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Monitoreo remoto en tiempo real",
                                    "Stock permanente de repuestos originales",
                                    "Brigadas de emergencia motorizadas",
                                    "Software de mantenimiento predictivo propio"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                        <span className="text-slate-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
