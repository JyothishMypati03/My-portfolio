
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Create a proper mailto link with corrected email
      const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const body = encodeURIComponent(
        `Hello Alex,\n\nYou have received a new message from your portfolio contact form:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from your portfolio website`
      );
      
      // Open mail client with corrected email
      const mailtoLink = `mailto:mjyothish04@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Message Prepared! 📧",
        description: "Your default mail client will open with the message ready to send.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mjyothish04@gmail.com",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: MessageSquare,
      label: "Phone",
      value: "+91 6300351586",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "BTM Layout , Karnataka, India",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium header with animations */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6 animate-bounce-gentle">
              <CheckCircle size={16} />
              Ready to Connect
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900 bg-clip-text text-transparent leading-tight">
              Let's Create
              <br />
              <span className="text-orange-500">Something Amazing</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
          
          <div className="grid xl:grid-cols-5 gap-16 items-start">
            {/* Contact info sidebar */}
            <div className="xl:col-span-2 space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Have a project in mind? I'm always excited to hear about new opportunities and challenges. Let's turn your ideas into reality.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`group p-6 ${info.bgColor} ${info.borderColor} border-2 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${info.color} p-3 bg-white rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-lg">{info.label}</p>
                        <p className="text-slate-600 font-medium">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Premium contact form */}
            <div className="xl:col-span-3">
              <Card className="shadow-2xl border-0 backdrop-blur-lg bg-white/80 rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Send a Message</h3>
                    <p className="text-slate-600 text-lg">Fill out the form below and I'll get back to you within 24 hours.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Your Name</label>
                        <Input
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`h-14 text-lg border-2 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-400'}`}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm font-medium flex items-center gap-2">⚠ {errors.name}</p>}
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`h-14 text-lg border-2 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-400'}`}
                          required
                        />
                        {errors.email && <p className="text-red-500 text-sm font-medium flex items-center gap-2">⚠ {errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Subject</label>
                      <Input
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`h-14 text-lg border-2 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${errors.subject ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-400'}`}
                        required
                      />
                      {errors.subject && <p className="text-red-500 text-sm font-medium flex items-center gap-2">⚠ {errors.subject}</p>}
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`text-lg border-2 rounded-xl resize-none transition-all duration-300 focus:scale-105 focus:shadow-lg ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-orange-400'}`}
                        required
                      />
                      {errors.message && <p className="text-red-500 text-sm font-medium flex items-center gap-2">⚠ {errors.message}</p>}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-16 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      <Send className="mr-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
                      {isSubmitting ? 'Opening Mail Client...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

