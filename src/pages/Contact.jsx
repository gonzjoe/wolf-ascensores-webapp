import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
    const [formData, setFormData] = useState({
        empresa: '',
        telefono: '',
        tipo_servicio: 'preventivo',
        descripcion: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const { data, error } = await supabase
            .from('leads_mantenimiento')
            .insert([
                {
                    empresa: formData.empresa,
                    telefono: formData.telefono,
                    tipo_servicio: formData.tipo_servicio,
                    descripcion: formData.descripcion
                }
            ]);

        if (error) {
            console.error('Error insertando lead:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Error al enviar la solicitud');
        } else {
            setStatus('success');
            setFormData({ empresa: '', telefono: '', tipo_servicio: 'preventivo', descripcion: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center py-12 px-6">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-white text-5xl font-black leading-tight tracking-tight mb-4">Contacto Industrial</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">Atención técnica especializada y respuesta inmediata para mantenimiento de ascensores y emergencias 24/7.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Section: Form */}
                    <div className="lg:col-span-2 bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-blue-500 text-3xl">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            </span>
                            <h2 className="text-white text-2xl font-bold tracking-tight">Solicitud de Inspección o Emergencia</h2>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="text-white text-xl font-bold mb-2">¡Solicitud Enviada con Éxito!</h3>
                                <p className="text-green-400">Nuestro equipo de soporte se pondrá en contacto con usted en breve.</p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-200 text-sm font-semibold uppercase tracking-wider">Nombre de la Empresa *</span>
                                        <input
                                            required
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            className="w-full rounded-lg text-white border-slate-700 bg-slate-950 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-14 px-4 placeholder:text-slate-500"
                                            placeholder="Ej: Aceros Industriales S.A."
                                            type="text"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-200 text-sm font-semibold uppercase tracking-wider">Teléfono de Contacto *</span>
                                        <input
                                            required
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="w-full rounded-lg text-white border-slate-700 bg-slate-950 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-14 px-4 placeholder:text-slate-500"
                                            placeholder="+57 300 000 0000"
                                            type="tel"
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-200 text-sm font-semibold uppercase tracking-wider">Tipo de Servicio</span>
                                    <div className="relative">
                                        <select
                                            name="tipo_servicio"
                                            value={formData.tipo_servicio}
                                            onChange={handleChange}
                                            className="w-full rounded-lg text-slate-300 border-slate-700 bg-slate-950 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-14 px-4"
                                        >
                                            <option value="preventivo">Preventivo (Mantenimiento programado)</option>
                                            <option value="correctivo">Correctivo (Reparación no crítica)</option>
                                            <option value="emergencia">Emergencia (Respuesta inmediata 24h)</option>
                                        </select>
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-200 text-sm font-semibold uppercase tracking-wider">Descripción del Problema</span>
                                    <textarea
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        className="w-full rounded-lg text-white border-slate-700 bg-slate-950 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[150px] p-4 placeholder:text-slate-500"
                                        placeholder="Describa brevemente el fallo o requerimiento técnico..."
                                    ></textarea>
                                </label>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">{errorMessage}</p>
                                )}

                                <button
                                    disabled={status === 'loading'}
                                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-lg font-black text-lg uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                                    type="submit"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud Urgente'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Section: Sidebar Information */}
                    <div className="space-y-6">
                        <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                Atención Directa 24/7
                            </h3>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg h-fit text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Línea de Emergencia</p>
                                        <p className="text-white text-lg font-bold">+57 300 123 456</p>
                                        <p className="text-slate-500 text-sm">Disponible todos los días</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg h-fit text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Correo Electrónico</p>
                                        <p className="text-white text-lg font-bold">emergencia@wolf.com</p>
                                        <p className="text-slate-500 text-sm">Respuesta en menos de 2h</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg h-fit text-blue-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Oficinas</p>
                                        <p className="text-white text-lg font-bold">Zona Industrial</p>
                                        <p className="text-slate-500 text-sm">Bogotá D.C., Colombia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl text-center">
                            <p className="text-blue-500 font-bold text-sm tracking-wide">Certificación ISO 9001:2015</p>
                            <p className="text-slate-400 text-xs mt-1">Garantía de calidad en mantenimiento vertical</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
