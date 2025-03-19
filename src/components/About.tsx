
import { GraduationCap, MapPin, CalendarDays, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[400px] h-[400px] top-1/3 -right-64"></div>
      
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate optometry professional dedicated to providing exceptional eye care and patient services.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="card card-delay-1">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Professional Summary</h3>
            <p className="text-neutral-700 mb-6">
              Dedicated and skilled optometry professional with a comprehensive foundation in clinical eye care 
              and patient services. Recent Bachelor of Optometry graduate with a year of intensive internship 
              experience at Sankara Nethralaya, one of India's premier eye care institutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-opto-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900">Education</h4>
                  <p className="text-sm text-neutral-600">
                    Bachelor of Optometry, Elite School of Optometry and Sankara Nethralaya (2021-2025)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CalendarDays className="w-5 h-5 text-opto-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900">Experience</h4>
                  <p className="text-sm text-neutral-600">
                    Internship at Sankara Nethralaya, one of India's premier eye care institutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-opto-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900">Email</h4>
                  <p className="text-sm text-neutral-600">lourdyellan@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-opto-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900">Phone</h4>
                  <p className="text-sm text-neutral-600">(+91) 73391 09985</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-opto-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900">Location</h4>
                  <p className="text-sm text-neutral-600">
                    St. Xavier Street, Pozhikarai, Kanyakumari, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="card card-delay-2">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-neutral-700 font-medium">Tamil</span>
                  <div className="h-2 bg-neutral-200 rounded-full mt-1">
                    <div className="h-full bg-opto-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-neutral-700 font-medium">English</span>
                  <div className="h-2 bg-neutral-200 rounded-full mt-1">
                    <div className="h-full bg-opto-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-neutral-700 font-medium">Malayalam</span>
                  <div className="h-2 bg-neutral-200 rounded-full mt-1">
                    <div className="h-full bg-opto-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-neutral-700 font-medium">Hindi</span>
                  <div className="h-2 bg-neutral-200 rounded-full mt-1">
                    <div className="h-full bg-opto-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card card-delay-3">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Contact Lens Fitting</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Binocular Vision</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Vision Therapy</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Clinical Diagnostics</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Pediatric Optometry</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Community Eye Care</span>
                <span className="px-3 py-1 bg-opto-100 text-opto-700 rounded-full text-sm">Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
