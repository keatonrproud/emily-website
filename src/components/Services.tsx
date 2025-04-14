import { CloudCog, Database, Layers, Server, Terminal } from "lucide-react";
import React, { useEffect } from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const SkillCard = ({ icon, title, description, delay }: SkillCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] reveal ${delay}`}>
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Skills = () => {
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
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 reveal delay-200">
            Teaching <span className="text-primary">Expertise</span>
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto reveal delay-300">
          <div className="h-1 w-20 bg-primary mx-auto mb-6 reveal delay-100"></div>
            From zero clients to over 1,500 lessons annually, I've built a thriving English teaching business. <br></br>I deliver personalized instruction while handling all aspects of marketing and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
              icon={<Database size={32} />}
              title="Beginners & Intermediate"
              description="Structured curriculum for those new to English or looking to build upon their foundation with confidence-building exercises."
              delay="delay-300"
            />
          <SkillCard
            icon={<Terminal size={32} />}
            title="Business Growth Expertise"
            description="Beyond teaching: marketing, client acquisition, and business development skills that have grown my business."
            delay="delay-300"
          />
          <SkillCard
            icon={<Database size={32} />}
            title="Children & Youth"
            description="Fun, age-appropriate activities and planned development paths for young learners, making English engaging while building core language skills."
            delay="delay-300"
          />
          <SkillCard
            icon={<CloudCog size={32} />}
            title="Advanced Business English"
            description="Tailored instruction for professionals who use English as a second language in their workplace and want to refine their skills."
            delay="delay-200"
          />
          <SkillCard
            icon={<Layers size={32} />}
            title="Honest Communication"
            description="Transparent and consistent updates on lesson progress, detailed learning plans, and goals and achievements for every student."
            delay="delay-200"
          />
          <SkillCard
            icon={<Server size={32} />}
            title="Professional Development"
            description="Specialized English instruction for lawyers, professors, and business professionals looking to enhance their communication skills."
            delay="delay-200"
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;
