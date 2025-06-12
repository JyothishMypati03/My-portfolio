
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "TypeScript", "Firebase"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Chart.js", "OpenWeather API"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const techColors: { [key: string]: string } = {
    "React": "bg-blue-100 text-blue-800 border-blue-200",
    "Node.js": "bg-green-100 text-green-800 border-green-200",
    "PostgreSQL": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "TypeScript": "bg-purple-100 text-purple-800 border-purple-200",
    "Firebase": "bg-orange-100 text-orange-800 border-orange-200",
    "Vue.js": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Chart.js": "bg-pink-100 text-pink-800 border-pink-200",
    "OpenWeather API": "bg-cyan-100 text-cyan-800 border-cyan-200"
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} />
                    Featured
                  </div>
                )}
                
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="mb-3 text-xl group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-height-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${
                          techColors[tech] || "bg-muted text-muted-foreground border-border"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-muted hover:border-muted-foreground transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
