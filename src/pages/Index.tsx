import React from 'react';
import Header from '../components/Header';
import GraphFeature from '../components/GraphFeature';
import FeatureVoting from '../components/FeatureVoting';
import LoginCTA from '../components/LoginCTA';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            🚀 Coming Soon - Shape the Future with Your Feedback
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-8">
            Revolutionary
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Performance Insights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the future of property management with our AI-powered insights engine. 
            Automatically identify underperforming listings and get <span className="font-semibold text-blue-600">actionable recommendations</span> to boost your leads by up to <span className="font-bold text-green-600">300%</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg">
              Get Early Access
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
      
      {/* Feature Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              EXCLUSIVE PREVIEW
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See the Future in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a sneak peek at how our AI will transform your property management workflow
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl transform rotate-1"></div>
            <div className="relative">
              <GraphFeature />
            </div>
          </div>
        </div>
      </section>

      {/* Login CTA - Now positioned right after feature preview */}
      <LoginCTA />

      {/* Social Proof & Voting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/70 to-blue-50/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join 1,200+ Property Managers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of the exclusive group shaping the future of property management technology
            </p>
          </div>
          
          <FeatureVoting />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help Us Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your insights will directly influence the features we prioritize. Share your thoughts and be the first to experience the future of property management.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">FeatureLab</span>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Building the future of property management, one feature at a time. Join thousands of property managers already using our platform.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Request Demo
              </button>
              <button className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 FeatureLab. All rights reserved. • Privacy Policy • Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
