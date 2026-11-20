import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    const resumeContent = `
JYOTHISH MYPATI - DATA ENGINEER | FULL STACK DEVELOPER
Email: jyothish1315@gmail.com
Phone: +91 6300351586
Location: India

PROFILE:
B.Tech graduate (Artificial Intelligence & Data Science) passionate about Data Engineering and Full Stack Development. Experienced in building reliable data pipelines and REST APIs using Python, PySpark, Databricks, Java, and Spring Boot.

EXPERIENCE:
• Java Full Stack Developer Intern (Onsite) - BridgeLabz Solutions LLP, Bengaluru (May 2026 - Oct 2026)
  - Built backend REST APIs using Java, Spring Boot, Hibernate/JPA, and PostgreSQL.
  - Implemented CRUD operations, validation, exception handling, and authentication.
  - Followed Agile practices and used Git/GitHub for version control.

• Full Stack Web Developer Intern - TAP Academy (Jan 2026 - Present)
  - Working on full-stack web development projects and strengthening problem-solving skills.

PROJECTS:
• E-Commerce Data Engineering Pipeline - PySpark, Databricks, Delta Lake, Unity Catalog
  - Built Bronze/Silver/Gold Medallion Architecture pipeline with incremental loading via Delta Lake.

• Azure Data Factory Incremental Load Pipeline - ADF, PostgreSQL, Azure SQL
  - Designed watermark-based incremental ETL pipeline using Lookup and Copy Data activities.

• Employee Leave & Attendance Management System - Java, Spring Boot, Spring Security, PostgreSQL, JWT
  - Role-based authorization for Employee, HR, and Admin workflows.

EDUCATION:
• B.Tech, Artificial Intelligence & Data Science - Sri Venkatesvaraa College of Technology (2022 - 2026), CGPA: 8.1

SKILLS:
• Data Engineering: Python, PySpark, SQL, Apache Spark, Databricks, Delta Lake, ETL/ELT, Azure Data Factory
• Backend: Java, Spring Boot, Hibernate/JPA, REST APIs, JWT
• Databases: PostgreSQL, MySQL, Azure SQL Database
• Frontend: React.js, HTML5, CSS3, JavaScript
• Tools: Git, GitHub, Azure (ADLS Gen2, Storage)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jyothish_Mypati_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Resume Downloaded! 📄",
      description: "Your resume has been downloaded as Jyothish_Mypati_Resume.txt",
    });
  };

  const handleViewOnline = () => {
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Jyothish Mypati - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; color: #222; }
            h1 { color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; }
            h2 { color: #333; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
            .section { margin-bottom: 20px; }
            .job { margin-bottom: 15px; }
            .job-title { font-weight: bold; }
            .company { color: #666; }
            .skills { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill { background: #f3f4f6; padding: 5px 10px; border-radius: 5px; font-size: 14px; }
          </style>
        </head>
        <body>
          <h1>Jyothish Mypati — Data Engineer | Full Stack Developer</h1>

          <div class="section">
            <strong>Email:</strong> jyothish1315@gmail.com<br>
            <strong>Phone:</strong> +91 6300351586<br>
            <strong>Location:</strong> India
          </div>

          <h2>PROFILE</h2>
          <p>B.Tech graduate (Artificial Intelligence &amp; Data Science) passionate about Data Engineering and Full Stack Development. Experienced in building reliable data pipelines and REST APIs using Python, PySpark, Databricks, Java, and Spring Boot.</p>

          <h2>EXPERIENCE</h2>
          <div class="job">
            <div class="job-title">Java Full Stack Developer Intern (Onsite)</div>
            <div class="company">BridgeLabz Solutions LLP, Bengaluru • May 2026 - Oct 2026</div>
            <ul>
              <li>Built backend REST APIs using Java, Spring Boot, Hibernate/JPA, and PostgreSQL.</li>
              <li>Implemented CRUD operations, validation, exception handling, and authentication.</li>
              <li>Followed Agile practices and used Git/GitHub for version control.</li>
            </ul>
          </div>
          <div class="job">
            <div class="job-title">Full Stack Web Developer Intern</div>
            <div class="company">TAP Academy • Jan 2026 - Present</div>
            <ul>
              <li>Working on full-stack web development projects and strengthening problem-solving skills.</li>
            </ul>
          </div>

          <h2>PROJECTS</h2>
          <div class="job">
            <div class="job-title">E-Commerce Data Engineering Pipeline</div>
            <div class="company">PySpark, Databricks, Delta Lake, Unity Catalog</div>
            <ul>
              <li>Built Bronze/Silver/Gold Medallion Architecture pipeline with incremental loading via Delta Lake.</li>
            </ul>
          </div>
          <div class="job">
            <div class="job-title">Azure Data Factory Incremental Load Pipeline</div>
            <div class="company">Azure Data Factory, PostgreSQL, Azure SQL Database</div>
            <ul>
              <li>Designed watermark-based incremental ETL pipeline using Lookup and Copy Data activities.</li>
            </ul>
          </div>
          <div class="job">
            <div class="job-title">Employee Leave &amp; Attendance Management System</div>
            <div class="company">Java, Spring Boot, Spring Security, PostgreSQL, JWT</div>
            <ul>
              <li>Role-based authorization for Employee, HR, and Admin workflows.</li>
            </ul>
          </div>

          <h2>EDUCATION</h2>
          <div class="job">
            <div class="job-title">B.Tech, Artificial Intelligence &amp; Data Science</div>
            <div class="company">Sri Venkatesvaraa College of Technology • 2022 - 2026</div>
            <ul>
              <li>CGPA: 8.1</li>
            </ul>
          </div>

          <h2>SKILLS</h2>
          <div class="skills">
            <div class="skill">Python</div>
            <div class="skill">PySpark</div>
            <div class="skill">SQL</div>
            <div class="skill">Apache Spark</div>
            <div class="skill">Databricks</div>
            <div class="skill">Delta Lake</div>
            <div class="skill">ETL/ELT</div>
            <div class="skill">Azure Data Factory</div>
            <div class="skill">Java</div>
            <div class="skill">Spring Boot</div>
            <div class="skill">REST APIs</div>
            <div class="skill">PostgreSQL</div>
            <div class="skill">MySQL</div>
            <div class="skill">React.js</div>
            <div class="skill">Git / GitHub</div>
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
      title: "2 Internships",
      description: "Onsite Java Full Stack at BridgeLabz + Full Stack at TAP Academy"
    },
    {
      icon: Calendar,
      title: "4+ Projects",
      description: "Data engineering pipelines and full-stack backend applications"
    },
    {
      icon: MapPin,
      title: "Remote & On-site",
      description: "Flexible work arrangements available"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building reliable data pipelines and modern full-stack applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
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

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-3 border-orange-500 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Java Full Stack Developer Intern (Onsite)</h4>
                    <p className="text-sm text-muted-foreground mb-2">BridgeLabz Solutions LLP, Bengaluru • May 2026 - Oct 2026</p>
                    <p className="text-sm leading-relaxed">Built Spring Boot REST APIs with PostgreSQL, implementing CRUD operations, validation, authentication, and following Agile/Git workflows.</p>
                  </div>
                  <div className="border-l-3 border-orange-300 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-300 rounded-full"></div>
                    <h4 className="font-semibold text-lg">Full Stack Web Developer Intern</h4>
                    <p className="text-sm text-muted-foreground mb-2">TAP Academy • Jan 2026 - Present</p>
                    <p className="text-sm leading-relaxed">Working on full-stack web development projects, strengthening problem-solving skills, and learning the latest technologies.</p>
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
                  <h4 className="font-semibold text-lg">B.Tech, Artificial Intelligence &amp; Data Science</h4>
                  <p className="text-sm text-muted-foreground mb-2">Sri Venkatesvaraa College of Technology • 2022 - 2026 • CGPA: 8.1</p>
                  <p className="text-sm leading-relaxed">Focus on Data Engineering and Full-Stack Development.</p>
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
