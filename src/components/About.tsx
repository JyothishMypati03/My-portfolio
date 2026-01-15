
import { Code, BrainCircuitIcon,Palette,Book} from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code , label: "Development", color: "text-blue-500" },
    { icon: BrainCircuitIcon, label: "Technology", color: "text-purple-500" },
    { icon: Book, label: "Upskilling", color: "text-green-500" }, 
    { icon: Palette, label: "Designing", color: "text-green-500" }

    
    
    
  ];


  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m currently pursuing my final year of B.Tech and I’m passionate about becoming a Full Stack Web Developer. I enjoy building modern web applications and understanding how real-world systems work—from frontend UI to backend logic and databases.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m also doing an internship at Tap Academy as a Full Stack Web Developer Intern, where I’m strengthening my skills by working on projects, improving problem-solving, and learning the latest technologies..
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">What I'm passionate about</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <interest.icon size={20} className={interest.color} />
                        <span className="text-sm font-medium">{interest.label} </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-300">React</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300">JavaScript</span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300">Node.js</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300">Express.js</span>
                   <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300">MySQL</span>
                   <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-300">MongoDB</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="group w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
                  <div className="text-8xl animate-pulse"></div>
                  <img
                    src="/profile2.png"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover object-[0_10%] group-hover:object-[0_100%] transition-all duration-500 rounded-2xl"
                  />
                </div>     
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

