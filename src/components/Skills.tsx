import { Database, Code, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      color: "text-blue-500",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "PySpark", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "Apache Spark", level: "Intermediate" },
        { name: "ETL/ELT", level: "Intermediate" },
        { name: "Databricks", level: "Intermediate" },
        { name: "Delta Lake", level: "Intermediate" },
        { name: "Azure Data Factory", level: "Intermediate" }
      ]
    },
    {
      title: "Full Stack",
      icon: Code,
      color: "text-green-500",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Hibernate / JPA", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      color: "text-purple-500",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Azure SQL Database", level: "Intermediate" },
        { name: "ADLS Gen2", level: "Intermediate" },
        { name: "Azure Storage", level: "Intermediate" },
        { name: "Unity Catalog", level: "Beginner" },
        { name: "Git / GitHub", level: "Advanced" }
      ]
    }
  ];

  const levelStyles = {
    Beginner: "bg-yellow-100 text-yellow-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-green-100 text-green-800"
  };

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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${levelStyles[skill.level]}`}>
                        {skill.level}
                      </span>
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
