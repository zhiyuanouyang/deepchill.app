
import React, { useState, useRef, useEffect } from 'react';
import { GeminiAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiNavigator: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const assistant = useRef(new GeminiAssistant());

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        const recommendation = await assistant.current.recommendApp(input);

        const assistantMsg: ChatMessage = { role: 'assistant', text: recommendation };
        setMessages(prev => [...prev, assistantMsg]);
        setIsTyping(false);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-rose-500 shadow-2xl flex items-center justify-center text-3xl z-40 animate-glow transition-transform hover:scale-110"
            >
                🤖
            </button>

            {/* Drawer */}
            <div className={`fixed inset-0 z-50 transition-all duration-500 pointer-events-none ${isOpen ? 'bg-slate-950/40 backdrop-blur-sm pointer-events-auto' : ''}`}>
                <div className={`absolute top-0 right-0 h-full w-full max-w-md glass border-l border-white/10 transition-transform duration-500 shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">Deepchill Assistant</h3>
                            <p className="text-xs text-indigo-400">AI-Powered App Navigator</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10"
                        >
                            ✕
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-4xl mb-4">👋</div>
                                <h4 className="text-lg font-semibold text-white mb-2">How can I help you?</h4>
                                <p className="text-sm text-slate-400 px-8">Ask me which Deepchill app is best for your current task or project.</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-slate-900 text-slate-300 border border-white/5'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-slate-900 px-4 py-3 rounded-2xl flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 bg-slate-950/50 border-t border-white/5">
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Suggest an app for logo design..."
                                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 pr-14 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-white"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="absolute right-3 top-3 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-center mt-4 text-slate-500 uppercase tracking-widest font-bold">
                            Powered by Deepchill AI Engine
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AiNavigator;
