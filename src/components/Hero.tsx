
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="home"
    >
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] top-1/4 -left-64"></div>
      <div className="blob w-[600px] h-[600px] bottom-0 -right-80"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-opto-100 text-opto-700 text-xs font-medium mb-4 opacity-0 animate-fadeIn" style={{animationDelay: '0.1s'}}>
            Optometry Professional
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight opacity-0 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            Lourd Yellan <span className="text-opto-600">Ga</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg opacity-0 animate-fadeIn" style={{animationDelay: '0.5s'}}>
            Dedicated optometry professional with expertise in clinical eye care, diagnostic technologies, and patient-centered services.
          </p>
          <div className="flex space-x-4 opacity-0 animate-fadeIn" style={{animationDelay: '0.7s'}}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-opto-600 text-white rounded-lg font-medium hover:bg-opto-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 border border-neutral-300 text-neutral-800 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative opacity-0 animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-opto-400/20 to-opto-500/10 rounded-2xl blur-md transform rotate-6"></div>
            <div className="relative overflow-hidden w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white p-2 border border-neutral-200 shadow-lg">
              <img 
                src="/lovable-uploads/545a8d80-779e-4987-b4bc-237208053630.png" 
                alt="Lourd Yellan Ga" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-500 hover:text-opto-600 transition-colors animate-bounce"
        style={{animationDuration: '2s'}}
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
