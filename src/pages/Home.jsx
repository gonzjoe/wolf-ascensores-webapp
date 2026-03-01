import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Clock, PenTool, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';

const stats = [
    { id: 1, value: '+500', label: 'Equipos Mantenidos', suffix: '' },
    { id: 2, value: '< 2h', label: 'Tiempo de Respuesta', suffix: '' },
    { id: 3, value: '99%', label: 'Uptime Garantizado', suffix: '%' },
    { id: 4, value: '24/7', label: 'Soporte Continuo', suffix: '' },
];

const pillars = [
    {
        icon: <Clock className="w-8 h-8 text-cyan-400" />,
        title: 'Monitorización 24/7',
        description: 'Nuestra red de técnicos opera mediante centros de control predictivo asegurando respuesta antes de que ocurra la falla.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
        title: 'Ingeniería Certificada',
        description: 'Personal técnico avalado por normativas internacionales (ISO 9001/OIT). Especialistas en protocolos de seguridad extrema.'
    },
    {
        icon: <PenTool className="w-8 h-8 text-indigo-400" />,
        title: 'Tecnología Predictiva',
        description: 'Instalamos sensores IoT para medir desgaste de poleas y cables milimétricamente. Programamos el arreglo antes de la rottura.'
    }
];

export default function Home() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="flex-1 w-full overflow-hidden bg-slate-950 relative selection:bg-cyan-500/30">

            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20">
                <motion.div
                    style={{ y: yHero, opacity: opacityHero }}
                    className="max-w-5xl mx-auto text-center z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Unidades de Emergencia Activas</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8"
                    >
                        El Futuro del <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                            Transporte Vertical.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Garantizamos maniobras perfectas, fiabilidad industrial y protección absoluta para sus activos residenciales y corporativos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link to="/contacto" className="group relative px-8 py-4 bg-white text-slate-950 text-lg font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Programar Auditoría <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <a href="tel:555" className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-white text-lg font-bold rounded-xl backdrop-blur-md hover:bg-slate-800 transition-all flex items-center gap-2 hover:border-slate-500">
                            <Zap className="w-5 h-5 text-yellow-400" /> Línea Roja 24/7
                        </a>
                    </motion.div>
                </motion.div>

                {/* Hero Decorative Image/Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0"
                />
            </section>

            {/* Stats Divider Section */}
            <section className="relative z-10 mt-[-50px] border-y border-white/5 bg-slate-950/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center justify-center text-center px-4"
                            >
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-slate-400 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Pillars */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
                    >
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ingeniería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Precisión</span></h2>
                            <p className="text-xl text-slate-400 font-light">
                                No somos simples reparadores. Somos arquitectos de la continuidad operativa. Construimos esquemas de mantenimiento inquebrantables.
                            </p>
                        </div>
                        <Link to="/servicios" className="group flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                            Explorar Framework Técnico <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="group relative bg-slate-900/40 border border-white/5 rounded-3xl p-10 hover:bg-slate-800/50 transition-colors overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    {pillar.icon}
                                </div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section Premium */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900 overflow-hidden relative border border-white/10 shadow-2xl shadow-cyan-900/20"
                >
                    {/* Noise/Texture filter effect optional */}
                    <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
                        <Target className="w-16 h-16 text-cyan-400 mb-8" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Asegure su infraestructura hoy.
                        </h2>
                        <p className="text-xl text-indigo-200/80 font-light max-w-2xl mx-auto mb-10">
                            Cientos de corporaciones nos han confiado el pulso de sus edificios. Solicite un análisis predictivo de ingeniería sin costo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link to="/contacto" className="px-10 py-5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-lg font-black rounded-2xl shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-1">
                                Iniciar Diagnóstico Gratuito
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
