
import React from 'react';
import Navbar from '@/app/components/Navbar';
import AppGallery from '@/app/components/AppGallery';
// import AiNavigator from '@/app/components/AiNavigator';
// import Footer from '@/app/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Noise Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navbar />

      <main>
        {/* Main Content Area */}
        <section className="relative min-h-screen">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <AppGallery />
        </section>
      </main>

      {/* <Footer /> */}

      {/* AI Assistant for intelligent discovery */}
      {/* <AiNavigator /> */}
    </div>
  );
};

export default App;
