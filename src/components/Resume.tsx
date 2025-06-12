
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const Resume = () => {
  const highlights = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: Calendar,
      title: "20+ Projects Delivered",
      description: "From startups to enterprise applications"
    },
    {
      icon: MapPin,
      title: "Remote & On-site",
      description: "Flexible work arrangements available"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consistently delivering quality services to level your business experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume Highlights */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300">
                      <highlight.icon className="text-orange-500 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{highlight.title}</h4>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Download size={18} />
                  Download Resume
                </Button>
                <Button variant="outline" className="px-8 py-3 flex items-center gap-2 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300">
                  <ExternalLink size={18} />
                  View Online
                </Button>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-3 border-orange-500 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Senior Full Stack Developer</h4>
                    <p className="text-sm text-muted-foreground mb-2">TechCorp Inc. • 2022 - Present</p>
                    <p className="text-sm leading-relaxed">Led development of multiple web applications using React and Node.js, improving user engagement by 40%</p>
                  </div>
                  <div className="border-l-3 border-orange-300 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-300 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground mb-2">StartupXYZ • 2020 - 2022</p>
                    <p className="text-sm leading-relaxed">Built responsive web interfaces and improved user experience across 5+ products</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Education
                </h3>
                <div className="border-l-3 border-blue-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-lg">Computer Science, B.S.</h4>
                  <p className="text-sm text-muted-foreground mb-2">University of Technology • 2016 - 2020</p>
                  <p className="text-sm leading-relaxed">Graduated with honors, focus on web development and software engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
