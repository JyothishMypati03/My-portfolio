
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:alex@mypati.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-primary-foreground/80 mb-6">
              Follow me on social media and let's build something amazing together.
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <button 
                onClick={scrollToTop}
                className="text-xl font-bold mb-4 md:mb-0 hover:text-primary-foreground/80 transition-colors"
              >
                mypati
              </button>
              
              <p className="text-primary-foreground/80 flex items-center gap-1">
                © 2024 Alex. Made with <Heart size={16} className="text-red-400" /> and lots of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
