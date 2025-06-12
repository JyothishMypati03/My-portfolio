
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-orange-500">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate full-stack developer crafting beautiful, functional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3"
            >
              Let's Chat
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
