
import { Eye, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Eye className="h-6 w-6 text-opto-400 mr-2" strokeWidth={2.5} />
            <span className="text-lg font-semibold">Lourd Yellan Ga</span>
          </div>
          
          <div className="text-neutral-400 text-sm">
            <p>Bachelor of Optometry | Clinical Excellence | Patient-Centered Care</p>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Lourd Yellan Ga. All rights reserved.
          </p>
          
          <div className="flex items-center text-neutral-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-opto-500" />
            <span>for better vision care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
