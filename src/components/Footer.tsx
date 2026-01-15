 
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/JyothishMypati03", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jyothish-mypati-479085255/?originalSubdomain=in", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:mjyothish04@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Resume", href: "resume" },
    { label: "Contact", href: "contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Jyothish Mypati</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating beautiful, functional web experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Let's Connect</h4>
              <p className="text-primary-foreground/80 mb-4">
                Follow me on social media and let's build something amazing together.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80 flex items-center gap-2 text-center md:text-left">
                © 2026 Jyothish Mypati.  <Heart size={16} className="text-red-400 animate-pulse" /> 
              </p>
              
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Back to top</span>
                <ArrowUp size={16} className="group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

