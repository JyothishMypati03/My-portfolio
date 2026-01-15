
import { Code, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-blue-500",
      skills: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 60 },
        { name: "TypeScript", level: 20 },
        { name: "Tailwind CSS", level: 40 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 60 },
        { name: "SpringBoot", level: 0 },
        { name: "REST API", level: 20 }
      ]
    },
    {
      title: "Databases",
      icon: Wrench,
      color: "text-purple-500",
      skills: [
        { name: "Mysql", level: 60 },
        { name: "MongoDB Atlas", level: 40 },
        { name: "AWS", level: 20 },
        { name: "SQL lite", level: 15 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My technical skills and tools I love to work with.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-8">
                  <category.icon className={`${category.color} bg-muted rounded-lg p-2`} size={40} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

