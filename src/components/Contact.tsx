import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Mail, Phone } from "lucide-react";
import React, { useEffect } from "react";

const ContactInfo = ({ icon, title, content, link }: { icon: React.ReactNode, title: string, content: string, link?: string }) => {
  return (
    <div className="flex items-center space-x-2 reveal">
      <div className="bg-primary/10 p-2 rounded-md mt-1">
        {icon}
      </div>
      <div>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 reveal delay-200">
            Let's <span className="text-primary">Connect</span>
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 reveal delay-100"></div>
          <p className="text-muted-foreground max-w-lg mx-auto reveal delay-300">
            Whether you're interested in English lessons or working together to grow your own business, I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 w-full max-w-md reveal delay-100">
            <div className="space-y-6">
              <ContactInfo 
                icon={<Mail className="text-primary" size={20} />}
                title="Email"
                content="emilydellacrawley@gmail.com"
                link="mailto:emilydellacrawley@gmail.com"
              />
              <ContactInfo 
                icon={<Phone className="text-primary" size={20} />}
                title="Phone"
                content="+39-347-432-8015"
              />
            </div>
            
            <div className="mt-8 reveal delay-300">
              <Button 
                onClick={() => window.location.href = 'mailto:emilydellacrawley@gmail.com'}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Mail className="mr-2" size={18} /> Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
