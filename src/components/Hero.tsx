
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/10 to-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Hi, I'm <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Alex</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              A passionate full-stack developer crafting beautiful, functional web experiences that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="px-10 py-4 text-lg font-semibold border-2 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300 hover:scale-105"
            >
              Let's Chat
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="flex flex-col items-center text-muted-foreground hover:text-orange-500 transition-colors duration-300">
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ArrowDown size={24} className="animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
