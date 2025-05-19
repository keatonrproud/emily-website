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
    quote: "<strong>My daughter has been studying with Emily for a few years, and we couldn't be more happy</strong>. In fact, after class my daughter never wants her to leave and could continuing studying for hours.\n\nEmily is a fantastic teacher: patient, responsible and professional. She's always thinking of how to make the lessons more fun and appreciated by the children.\n<strong>I strongly suggest her as your English teacher!</strong>",
    author: "Gloria",
    role: "Mother of a student",
    company: "",
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
    <section id="recommendations" className="pt-12 pb-16 bg-white relative scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 reveal delay-200">
            What <span className="text-primary">Students Say</span>
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 reveal delay-100"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg reveal delay-300 border border-blue-100">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white p-3 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
              </div>
            </div>
            
            <div className="flex justify-center mb-8 mt-4">
              {Array(recommendations[currentRecommendation].rating).fill(0).map((_, i) => (
                <Star key={i} size={24} className="text-yellow-500 fill-yellow-500 drop-shadow-sm" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl font-normal text-center mb-8 text-gray-700 whitespace-pre-line leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: recommendations[currentRecommendation].quote }}>
            </p>
            
            <div className="text-center mb-4">
              <p className="font-bold text-foreground text-lg">{recommendations[currentRecommendation].author}</p>
              <p className="text-sm text-muted-foreground">
                {recommendations[currentRecommendation].company 
                  ? `${recommendations[currentRecommendation].role} at ${recommendations[currentRecommendation].company}`
                  : recommendations[currentRecommendation].role}
              </p>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors shadow-sm border-blue-100"
                onClick={prevRecommendation}
              >
                <ChevronLeft size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors shadow-sm border-blue-100"
                onClick={nextRecommendation}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
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
