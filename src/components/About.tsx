import { Code, Cpu, Database, Layers, Server, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <img
                src="/images/emily-como.jpg"
                alt="Emily Crawley in Como, Italy"
                className="rounded-xl relative shadow-lg w-full h-[500px] object-cover object-center"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2 reveal">About Me</h2>
            <div className="h-1 w-20 bg-primary mb-6 reveal delay-100"></div>
            <p className="text-muted-foreground mb-6 reveal delay-300">
              I'm a writer, speaker, and dedicated English teacher with a diverse client base ranging from children to university professors, lawyers, and other professionals. With an undergraduate degree in International Relations from Queen's University and a Master's in History and Global Cultures, I bring real-world relevance to my lessons.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center reveal delay-400">
                <Cpu className="text-primary mr-2" size={20} />
                <span>Multilevel Teaching</span>
              </div>
              <div className="flex items-center reveal delay-400">
                <Code className="text-primary mr-2" size={20} />
                <span>Business English</span>
              </div>
              <div className="flex items-center reveal delay-400">
                <Server className="text-primary mr-2" size={20} />
                <span>Client Acquisition</span>
              </div>
              <div className="flex items-center reveal delay-400">
                <Database className="text-primary mr-2" size={20} />
                <span>Marketing & Design</span>
              </div>
              <div className="flex items-center reveal delay-400">
                <Layers className="text-primary mr-2" size={20} />
                <span>Business Growth</span>
              </div>
              <div className="flex items-center reveal delay-400">
                <Shield className="text-primary mr-2" size={20} />
                <span>Long-term Relationships</span>
              </div>
            </div>
            <p className="text-muted-foreground italic reveal delay-300">
              From zero clients to over 1,500 lessons per year, I've built my teaching business through dedication, quality instruction, and entrepreneurial drive — all while maintaining long-term relationships with students who have been with me for several years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
