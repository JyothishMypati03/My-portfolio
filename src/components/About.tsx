
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or hiking in the mountains. I believe that great software comes from understanding both the technical and human sides of development.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Python</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
