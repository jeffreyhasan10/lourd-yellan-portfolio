
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit the form data to Supabase
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: `${formData.subject}: ${formData.message}` 
          }
        ]);
        
      if (error) throw error;
      
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background blobs with enhanced animation */}
      <div className="blob w-[600px] h-[600px] -bottom-96 -right-32"></div>
      
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, projects, or just having a conversation about optometry.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="card card-delay-1 hover-lift">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-opto-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
                  <Mail className="w-5 h-5 text-opto-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Email</h4>
                  <a 
                    href="mailto:lourdyellan@gmail.com" 
                    className="text-opto-600 hover:text-opto-700 transition-colors"
                  >
                    lourdyellan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-opto-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
                  <Phone className="w-5 h-5 text-opto-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Phone</h4>
                  <a 
                    href="tel:+917339109985" 
                    className="text-opto-600 hover:text-opto-700 transition-colors"
                  >
                    (+91) 73391 09985
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-opto-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
                  <MapPin className="w-5 h-5 text-opto-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Location</h4>
                  <p className="text-neutral-700">
                    St. Xavier Street, Pozhikarai,<br />
                    Kanyakumari, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <h4 className="font-medium text-neutral-900 mb-4">Best time to contact:</h4>
              <p className="text-neutral-700">
                Monday to Friday: 9:00 AM - 6:00 PM (IST)<br />
                Saturday: 10:00 AM - 3:00 PM (IST)
              </p>
            </div>
          </div>
          
          <div className="card card-delay-2 hover-lift">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-opto-500 focus:border-opto-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-opto-500 focus:border-opto-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-opto-500 focus:border-opto-500 transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={isMobile ? 3 : 4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-opto-500 focus:border-opto-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-opto-600 text-white rounded-lg font-medium hover:bg-opto-700 transition-colors shadow-sm disabled:opacity-70 transform hover:-translate-y-1 active:translate-y-0 transition-transform"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
