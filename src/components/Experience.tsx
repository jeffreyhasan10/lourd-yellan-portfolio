
import { useState } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('clinical');
  
  const tabs = [
    { id: 'clinical', label: 'Clinical Excellence' },
    { id: 'patient', label: 'Patient-Centered Care' },
    { id: 'community', label: 'Community Impact' },
  ];
  
  const experiences = {
    clinical: {
      title: 'Clinical Excellence',
      description: 'Performed 500+ comprehensive vision assessments across diverse patient demographics, developing proficiency in advanced diagnostic technologies.',
      achievements: [
        'Conducted comprehensive eye examinations using state-of-the-art equipment',
        'Performed OCT scans and interpretations for retinal and optic nerve assessment',
        'Executed peripheral vision assessments to identify visual field defects',
        'Conducted corneal mapping for contact lens fitting and keratoconus detection',
        'Assisted in specialized contact lens fitting procedures for complex cases',
        'Performed binocular vision assessments and vision therapy sessions',
        'Managed optical dispensing and frame adjustments for patients',
      ],
    },
    patient: {
      title: 'Patient-Centered Care',
      description: 'Committed to relationship-centered care with a focus on compassionate patient communication.',
      achievements: [
        'Developed strong rapport with patients across diverse demographics and age groups',
        'Translated complex eye health concepts into accessible information for patients',
        'Created personalized eye care plans based on individual patient needs',
        'Improved treatment adherence through clear, empathetic communication',
        'Coordinated care between optometry and ophthalmology for complex cases',
        'Provided emotional support to patients receiving difficult diagnoses',
        'Maintained detailed documentation in electronic medical records',
      ],
    },
    community: {
      title: 'Community Impact',
      description: 'Actively participated in community outreach initiatives and school screening programs, demonstrating commitment to preventative eye care.',
      achievements: [
        'Conducted vision screenings at local schools, identifying children needing intervention',
        'Participated in rural eye camps providing care to underserved communities',
        'Delivered educational presentations on eye health and safety practices',
        'Contributed to research on hyperopia screening methodologies in school children',
        'Analyzed data from 280 participants to identify effective screening protocols',
        'Collaborated with public health officials on community eye health initiatives',
        'Advocated for accessible eye care services in underserved communities',
      ],
    },
  };

  return (
    <section id="experience" className="relative py-20 bg-opto-50 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] -top-64 -left-32"></div>
      
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey across clinical practice, patient care, and community service demonstrates my dedication to excellence in optometry.
        </p>
        
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden mt-12 opacity-0 animate-slideUp" style={{animationDelay: '0.4s'}}>
          {/* Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-neutral-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors',
                  activeTab === tab.id
                    ? 'text-opto-600 border-b-2 border-opto-500'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Briefcase className="w-5 h-5 text-opto-500 mr-3" />
              <h3 className="text-xl font-semibold text-neutral-900">{experiences[activeTab as keyof typeof experiences].title}</h3>
            </div>
            
            <p className="text-neutral-700 mb-6">{experiences[activeTab as keyof typeof experiences].description}</p>
            
            <div className="space-y-3">
              {experiences[activeTab as keyof typeof experiences].achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-opto-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-neutral-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
