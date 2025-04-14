
const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-4">
              <span className="text-primary">Emily Crawley</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg">
              Writer | English Teacher | Business Growth
            </p>
            <p className="text-md text-muted-foreground max-w-lg">
              Helping professionals and beginners master English with personalized instruction. Teaching over 1,500 lessons a year through self-driven marketing and client development.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
              <img 
                src="/images/emily-headshot.jpg" 
                alt="Emily Crawley Headshot"
                className="w-full h-[450px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
