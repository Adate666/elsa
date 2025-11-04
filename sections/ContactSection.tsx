
import React from 'react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

const ContactSection = React.forwardRef<HTMLElement, ContactSectionProps>(({ onShowToast }, ref) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify will handle the form submission directly
  };

  return (
    <section ref={ref} id="contact" className="h-full w-full snap-start flex flex-col items-center justify-center p-8 pt-48 bg-[#F4F4F4] border-t border-[#1D1D1B]/10">
      <div className="w-full max-w-xl text-center">
        <h2 className="text-4xl font-extrabold text-[#12120D] mb-4">Get In Touch</h2>
        <p className="text-[#1D1D1B] mb-8">
          Have questions or feedback? We'd love to hear from you. Fill out the form below to reach our customer service team.
        </p>
        <form name="contact" method="POST" data-netlify="true" className="text-left space-y-6">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" name="name" id="name" required className="block w-full px-4 py-3 bg-white border border-[#1D1D1B]/20 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4C196] sm:text-sm text-[#12120D]" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="text" 
              inputMode="email"
              name="email" 
              id="email" 
              required 
              className="block w-full px-4 py-3 bg-white border border-[#1D1D1B]/20 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4C196] sm:text-sm text-[#12120D]" 
              placeholder="you@example.com" 
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
              title="Veuillez entrer une adresse e-mail valide (ex: nom@domaine.com)." />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows={4} required className="block w-full px-4 py-3 bg-white border border-[#1D1D1B]/20 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4C196] sm:text-sm text-[#12120D]" placeholder="Your message..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#F4C196] text-[#12120D] font-semibold py-3 px-8 rounded-full hover:bg-[#F4C196]/90 transition-colors w-full sm:w-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

export default ContactSection;