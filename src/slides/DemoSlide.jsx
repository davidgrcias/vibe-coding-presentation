import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { PlayCircle, MessageSquare, Users, Zap, ShieldCheck } from 'lucide-react';

const DemoSlide = () => {
    return (
        <Slide title="Live Showdown">
            <div className="flex flex-col items-center justify-center h-full gap-10 max-w-4xl mx-auto">
                
                {/* Visual Icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />
                    <PlayCircle size={100} className="text-blue-500 relative z-10" />
                </motion.div>

                {/* Main Text */}
                <div className="text-center space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest"
                    >
                        The 10-Minute MVP Challenge
                    </motion.div>
                    <h2 className="text-5xl font-black text-white tracking-tighter">
                        Real-time Multi-room Chat
                    </h2>
                    <p className="text-xl text-slate-400">
                        Watch an Agent build a <span className="text-white font-bold">production-ready app</span> from scratch.
                    </p>
                </div>

                {/* MVP Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {[
                        { icon: <Zap size={18} className="text-yellow-400" />, label: "WebSockets", sub: "Real-time sync" },
                        { icon: <Users size={18} className="text-blue-400" />, label: "Multi-room", sub: "Public & Private" },
                        { icon: <ShieldCheck size={18} className="text-green-400" />, label: "Auth", sub: "User session" },
                        { icon: <MessageSquare size={18} className="text-purple-400" />, label: "Persistence", sub: "Chat history" }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-white/5 border border-white/10 p-4 rounded-xl text-center flex flex-col items-center gap-2 group hover:border-blue-500/30 transition-colors"
                        >
                            <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-tight">{feature.label}</h4>
                                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-tighter">{feature.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion footer */}
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-center w-full">
                    <p className="text-slate-400 text-sm">
                        Total Code Generated: <span className="text-blue-400 font-mono">1,500+ lines</span> 
                        &nbsp; | &nbsp; 
                        Build Time: <span className="text-white font-bold">&lt; 10 Minutes</span>
                    </p>
                </div>

            </div>
        </Slide>
    );
};

export default DemoSlide;
