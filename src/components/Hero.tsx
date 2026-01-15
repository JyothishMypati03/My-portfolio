
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/20 to-emerald-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-orange-600 rounded-full text-sm font-semibold mb-8 shadow-lg border border-orange-200 animate-bounce-gentle">
              <Sparkles size={16} className="animate-spin" />
               Let’s build the future, not just watch it happen.
            </div>

            {/* Hero heading with premium typography */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              <span className="block text-slate-900">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent animate-pulse pb-5">
                Jyothish
              </span>
            </h1>

            {/* Premium subtitle */}
            <div className="mb-12 space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-700 font-light leading-relaxed">
                 Aspiring <span className="text-orange-500 font-semibold">Full-Stack</span> Developer 
              </p>
              
              
               
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mt-8">
               Building innovative, AI-powered web experiences that will inspire and engage. 
               Let’s turn your vision into reality.
              </p>
            </div>
          </div>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="group relative px-12 py-6 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl shadow-2xl hover:shadow-orange-200 transition-all duration-500 hover:scale-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                View My Work
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="group px-12 py-6 text-xl font-bold border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-2xl shadow-xl transition-all duration-500 hover:scale-110 backdrop-blur-sm bg-white/50"
            >
              <span className="flex items-center gap-3">
                Let's Connect
                <Sparkles size={20} className="group-hover:animate-spin" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Premium scroll indicator */}
        <div className="absolute bottom-19 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group " onClick={() => scrollToSection('about')}>
          <div className="flex flex-col items-center text-slate-600 hover:text-orange-500 transition-colors duration-300">
            <span className="text-sm font-semibold mb-4 uppercase tracking-wider group-hover:text-orange-500">Discover More</span>
            <div className="w-8 h-12 border-2 border-slate-400 group-hover:border-orange-500 rounded-full flex justify-center transition-colors duration-300">
              <ArrowDown size={20} className="mt-2 animate-pulse group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

