
import { Gauge, Brain, Users, Database, FileText, Stethoscope, } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Stethoscope className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Clinical Assessment',
      skills: [
        'Comprehensive Eye Examinations',
        'Vision Assessment',
        'Binocular Vision Testing',
        'Contact Lens Fitting',
        'Optical Dispensing',
        'Low Vision ',
      ],
      delay: 'card-delay-1',
    },
    {
      icon: <Gauge className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Diagnostic Technology',
      skills: [
        'OCT Interpretation',
        'Visual Field Analysis',
        'Corneal Topography',
        'Retinal Imaging',
        'Aberrometry',
      ],
      delay: 'card-delay-2',
    },
    {
      icon: <FileText className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Documentation',
      skills: [
        'Electronic Medical Records',
        'Clinical Report Writing',
        'Prescription Formulation',
        'Referral Documentation',
        'Case History Recording',
      ],
      delay: 'card-delay-3',
    },
    {
      icon: <Users className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Patient Interaction',
      skills: [
        'Clear Communication',
        'Empathetic Care',
        'Patient Education',
        'Multilingual Communication',
        'Patient Counseling',
      ],
      delay: 'card-delay-4',
    },
    {
      icon: <Brain className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Technical Knowledge',
      skills: [
        'Ocular Pathology',
        'Refractive Errors',
        'Ocular Pharmacology',
        'Vision Therapy',
        'Low Vision Rehabilitation',
      ],
      delay: 'card-delay-1',
    },
    {
      icon: <Database className="w-12 h-12 text-opto-500 mb-4" />,
      title: 'Research Skills',
      skills: [
        'Data Collection',
        'Statistical Analysis',
        'Literature Review',
        'Research Methodology',
        'Scientific Writing',
      ],
      delay: 'card-delay-2',
    },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] bottom-0 -left-64"></div>
      
      <div className="section-container">
        <h2 className="section-title">Professional Skills</h2>
        <p className="section-subtitle">
          A comprehensive set of clinical and interpersonal skills gained through education and practical experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`card ${category.delay} text-center`}>
              <div className="flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-neutral-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
