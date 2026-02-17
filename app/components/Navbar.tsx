
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-start glass rounded-2xl px-6 py-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                        N
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">DEEPCHILL</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
