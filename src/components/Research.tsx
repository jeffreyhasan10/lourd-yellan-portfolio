
import { Lightbulb, BookOpen, BarChart, PieChart, Microscope, Users } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="relative py-20 bg-opto-50 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] top-0 -right-64"></div>
      
      <div className="section-container">
        <h2 className="section-title">Research Project</h2>
        <p className="section-subtitle">
          Contributed to advancing the field of optometry through focused research on screening methodologies.
        </p>
        
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8 mt-8 opacity-0 animate-slideUp" style={{animationDelay: '0.4s'}}>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-opto-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-opto-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-center text-neutral-900 mb-6">
              Hyperopia Screening Methodologies in School Children
            </h3>
            
            <p className="text-neutral-700 text-center mb-12">
              An evidence-based evaluation of screening techniques to identify hyperopia in school-aged children, 
              analyzing data from 280 participants to determine the most effective protocols for early detection.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-opto-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Research Objective</h4>
                  <p className="text-sm text-neutral-600">
                    To compare the sensitivity and specificity of various hyperopia screening methods in school-aged children 
                    and establish evidence-based recommendations for school screening programs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart className="w-5 h-5 text-opto-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Methodology</h4>
                  <p className="text-sm text-neutral-600">
                    Conducted comparative analysis of multiple screening techniques including auto-refraction, 
                    plus lens test, and modified clinical techniques on 280 school children aged 7-14.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PieChart className="w-5 h-5 text-opto-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Key Findings</h4>
                  <p className="text-sm text-neutral-600">
                    Identified modified auto-refraction techniques with 92% sensitivity and 89% specificity for detecting 
                    clinically significant hyperopia, significantly higher than traditional methods.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Microscope className="w-5 h-5 text-opto-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Data Analysis</h4>
                  <p className="text-sm text-neutral-600">
                    Applied statistical methods to analyze screening outcomes against comprehensive examination gold standards, 
                    establishing ROC curves to determine optimal cut-off values.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-5 h-5 text-opto-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Public Health Impact</h4>
                  <p className="text-sm text-neutral-600">
                    Research findings contributed to the development of more effective school vision screening protocols, 
                    potentially improving early detection rates for hyperopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
