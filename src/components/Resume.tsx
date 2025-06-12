
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const { toast } = useToast();
  
  const handleDownloadResume = () => {
    // Create a simple resume content
    const resumeContent = `
ALEX - FULL STACK DEVELOPER
Email: mjyothish04@gmail.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA

EXPERIENCE:
• Senior Full Stack Developer - TechCorp Inc. (2022 - Present)
  - Led development of multiple web applications using React and Node.js
  - Improved user engagement by 40%

• Frontend Developer - StartupXYZ (2020 - 2022)
  - Built responsive web interfaces
  - Improved user experience across 5+ products

EDUCATION:
• Computer Science, B.S. - University of Technology (2016 - 2020)
  - Graduated with honors
  - Focus on web development and software engineering

SKILLS:
• Frontend: React (90%), TypeScript (85%), Vue.js (80%), Tailwind CSS (95%)
• Backend: Node.js (88%), Python (82%), PostgreSQL (85%), MongoDB (78%)
• Tools: Git (92%), Docker (75%), AWS (70%), Figma (85%)
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Resume Downloaded! 📄",
      description: "Your resume has been downloaded as Alex_Resume.txt",
    });
  };

  const handleViewOnline = () => {
    // Create a new window with resume content
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Alex - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
            h1 { color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; }
            h2 { color: #333; margin-top: 30px; }
            .section { margin-bottom: 20px; }
            .job { margin-bottom: 15px; }
            .job-title { font-weight: bold; }
            .company { color: #666; }
            .skills { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill { background: #f3f4f6; padding: 5px 10px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <h1>ALEX - FULL STACK DEVELOPER</h1>
          
          <div class="section">
            <strong>Email:</strong> mjyothish04@gmail.com<br>
            <strong>Phone:</strong> +1 (555) 123-4567<br>
            <strong>Location:</strong> San Francisco, CA
          </div>

          <h2>EXPERIENCE</h2>
          <div class="job">
            <div class="job-title">Senior Full Stack Developer</div>
            <div class="company">TechCorp Inc. • 2022 - Present</div>
            <ul>
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Improved user engagement by 40%</li>
            </ul>
          </div>
          
          <div class="job">
            <div class="job-title">Frontend Developer</div>
            <div class="company">StartupXYZ • 2020 - 2022</div>
            <ul>
              <li>Built responsive web interfaces</li>
              <li>Improved user experience across 5+ products</li>
            </ul>
          </div>

          <h2>EDUCATION</h2>
          <div class="job">
            <div class="job-title">Computer Science, B.S.</div>
            <div class="company">University of Technology • 2016 - 2020</div>
            <ul>
              <li>Graduated with honors</li>
              <li>Focus on web development and software engineering</li>
            </ul>
          </div>

          <h2>SKILLS</h2>
          <div class="skills">
            <div class="skill">React (90%)</div>
            <div class="skill">TypeScript (85%)</div>
            <div class="skill">Vue.js (80%)</div>
            <div class="skill">Tailwind CSS (95%)</div>
            <div class="skill">Node.js (88%)</div>
            <div class="skill">Python (82%)</div>
            <div class="skill">PostgreSQL (85%)</div>
            <div class="skill">MongoDB (78%)</div>
            <div class="skill">Git (92%)</div>
            <div class="skill">Docker (75%)</div>
            <div class="skill">AWS (70%)</div>
            <div class="skill">Figma (85%)</div>
          </div>
        </body>
      </html>
    `;
    
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(resumeHTML);
      newWindow.document.close();
    }
    
    toast({
      title: "Resume Opened! 👀",
      description: "Your resume is now displayed in a new tab",
    });
  };

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
    <section id="resume" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
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
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
                <Button 
                  onClick={handleViewOnline}
                  variant="outline" 
                  className="px-8 py-3 flex items-center gap-2 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300 hover:scale-105"
                >
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
