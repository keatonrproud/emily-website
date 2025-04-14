import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface RecommendationProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const recommendations: RecommendationProps[] = [
  {
    quote: "Emily has been teaching my 11-year-old daughter for two years now, and the progress has been remarkable. She's patient, adapts her teaching style perfectly to children, and genuinely cares about her students' development. My daughter now speaks English with confidence.",
    author: "Marco Bianchi",
    role: "Parent",
    company: "Milan, Italy",
    rating: 5
  },
  {
    quote: "As a lawyer who needs English daily, Emily's professional approach has been invaluable. She created a customized curriculum addressing my specific workplace needs. Her drive and commitment are evident in every lesson, and I've been her student for over three years.",
    author: "Sofia Ricci",
    role: "Corporate Lawyer",
    company: "Rome, Italy",
    rating: 5
  },
  {
    quote: "Emily helped me go from basic English to presenting confidently at international conferences. As a university professor, I appreciate her academic background and business mindset. She commits fully to her students' goals, and her ability to build her teaching practice from scratch demonstrates her entrepreneurial spirit.",
    author: "Luca Romano",
    role: "University Professor",
    company: "University of Bologna",
    rating: 5
  }
];

const Recommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  
  const nextRecommendation = () => {
    setCurrentRecommendation((prev) => 
      prev === recommendations.length - 1 ? 0 : prev + 1
    );
  };

  const prevRecommendation = () => {
    setCurrentRecommendation((prev) => 
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextRecommendation();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
    <section id="recommendations" className="pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 reveal delay-200">
            What <span className="text-primary">Students Say</span>
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 reveal delay-100"></div>
          </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-50 rounded-2xl p-8 md:p-12 shadow-md reveal delay-300">
            <div className="flex justify-center mb-6">
              {Array(recommendations[currentRecommendation].rating).fill(0).map((_, i) => (
                <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium text-center mb-8 italic text-foreground">
              "{recommendations[currentRecommendation].quote}"
            </p>
            <div className="text-center">
              <p className="font-bold text-foreground">{recommendations[currentRecommendation].author}</p>
              <p className="text-sm text-muted-foreground">
                {recommendations[currentRecommendation].role} at {recommendations[currentRecommendation].company}
              </p>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                onClick={prevRecommendation}
              >
                <ChevronLeft size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                onClick={nextRecommendation}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRecommendation(index)}
                className={`h-2.5 w-2.5 rounded-full mx-1 transition-all ${
                  index === currentRecommendation ? 'bg-primary w-5' : 'bg-gray-300'
                }`}
                aria-label={`View recommendation ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
