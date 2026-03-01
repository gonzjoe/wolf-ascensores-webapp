import { motion } from 'framer-motion';
import { Settings, ShieldAlert, Cpu, CheckCircle2, ArrowRight, Zap, ZapOff, HardHat, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "Mantenimiento Preventivo",
        id: "preventivo",
        icon: <Settings className="w-10 h-10 text-blue-400" />,
        image: "https://images.unsplash.com/photo-1541888086225-ee82522bdc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Protocolos de inspección exhaustivos diseñados para adelantarse a cualquier fallo mecánico o eléctrico en su sistema vertical.",
        features: ["Ajuste de guías y poleas", "Lubricación especializada", "Pruebas de seguridad de frenado", "Limpieza técnica de cabina y foso"]
    },
    {
        title: "Respuesta Correctiva (24h)",
        id: "correctivo",
        icon: <ZapOff className="w-10 h-10 text-red-500" />,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Brigadas de respuesta inmediata listas para resolver averías críticas y rescates en tiempo récord, minimizando el tiempo de inactividad.",
        features: ["Cambio de cables de tracción", "Reparación de tarjetas electrónicas", "Atención de emergencias 24/7", "Repuestos originales garantizados"]
    },
    {
        title: "Modernización de Equipos",
        id: "modernizacion",
        icon: <Cpu className="w-10 h-10 text-cyan-400" />,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Transformamos su ascensor antiguo en un equipo de última generación con eficiencia energética y tecnología inteligente.",
        features: ["Sistemas de control VVVF", "Iluminación LED inteligente", "Paneles táctiles de alta resolución", "Mejora del confort de viaje"]
    }
];

export default function Services() {
    return (
        <div className="flex-1 w-full bg-slate-950 text-slate-100 overflow-hidden pb-24">
            {/* Header */}
            <section className="relative py-32 px-6 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <span className="text-blue-500 font-black tracking-[0.4em] uppercase text-sm mb-4 block">Ingeniería Wolf</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8">Nuestros Servicios de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Mantenimiento Élite</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl font-light">Especialistas en la salud técnica de su edificio, asegurando que cada viaje sea seguro, silencioso y eficiente.</p>
                </motion.div>
            </section>

            {/* Services Loop */}
            <section className="max-w-7xl mx-auto px-6 space-y-32">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="relative rounded-[2.5rem] border border-white/10 shadow-2xl h-[450px] w-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute top-8 left-8 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                    {service.icon}
                                </div>
                            </div>
                        </div>

                        <div className={`space-y-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                            <h2 className="text-4xl font-black">{service.title}</h2>
                            <p className="text-lg text-slate-400 font-light leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-white/5">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span className="text-sm font-medium text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                                Cotizar este servicio <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Trust Grid */}
            <section className="max-w-7xl mx-auto px-6 mt-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5 text-center">
                        <HardHat className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold mb-4">Personal Certificado</h3>
                        <p className="text-slate-400 text-sm font-light">Todo nuestro equipo cuenta con licencias técnicas vigentes y seguros de riesgo certificados.</p>
                    </div>
                    <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5 text-center">
                        <Cog className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold mb-4">Maquinaria de Punta</h3>
                        <p className="text-slate-400 text-sm font-light">Utilizamos herramientas de diagnóstico láser y software de análisis predictivo único en el mercado.</p>
                    </div>
                    <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5 text-center">
                        <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold mb-4">Soporte Express</h3>
                        <p className="text-slate-400 text-sm font-light">Línea directa de ingeniería para resolver dudas técnicas críticas en menos de 15 minutos.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
