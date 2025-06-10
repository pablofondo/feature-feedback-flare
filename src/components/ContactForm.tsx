
import React, { useState } from 'react';
import { Send, User, Mail, Building, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    feedback: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback! We\'ll be in touch within 24 hours.');
    setFormData({ name: '', email: '', company: '', feedback: '' });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto border border-gray-100/50">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Share Your Vision
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your insights shape our roadmap. Tell us what you think about this feature and how it could better serve your needs.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                placeholder="your.email@company.com"
              />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
            Company (Optional)
          </label>
          <div className="relative">
            <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
              placeholder="Your company name"
            />
          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-3">
            Your Feedback *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea
              id="feedback"
              name="feedback"
              required
              rows={5}
              value={formData.feedback}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50/50 hover:bg-white"
              placeholder="Tell us what you think about this feature. How would you use it? What would you change? What other features would complement this?"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            <span>Send Feedback</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
