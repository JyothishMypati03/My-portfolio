
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Consistently delivering quality services to level your business experience.
          </p>
          
          <div className="bg-background rounded-lg shadow-lg p-8 mb-8">
            <div className="aspect-[8.5/11] bg-muted/50 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <p className="text-muted-foreground">Resume Preview</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </Button>
              <Button variant="outline" className="px-6 py-3 flex items-center gap-2">
                <ExternalLink size={18} />
                View Online
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-medium">Senior Full Stack Developer</h4>
                  <p className="text-sm text-muted-foreground">TechCorp Inc. • 2022 - Present</p>
                  <p className="text-sm mt-2">Led development of multiple web applications using React and Node.js</p>
                </div>
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">StartupXYZ • 2020 - 2022</p>
                  <p className="text-sm mt-2">Built responsive web interfaces and improved user experience</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-medium">Computer Science, B.S.</h4>
                  <p className="text-sm text-muted-foreground">University of Technology • 2016 - 2020</p>
                  <p className="text-sm mt-2">Graduated with honors, focus on web development and software engineering</p>
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
