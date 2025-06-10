
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const LoginCTA = () => {
  const handleLoadListings = () => {
    // Track engagement - this is a fake door test
    console.log('Load listings button clicked:', { timestamp: new Date() });
    
    // Show success message
    alert('Thanks for your interest! We\'ll notify you when this feature is available.');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/5 to-purple-600/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Get Personalized Insights
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to see <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">your properties</span>?
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Sign in to get AI-powered insights for your specific listings. Discover which properties need attention and get actionable recommendations to boost your leads.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200/50 shadow-xl">
          <Button 
            onClick={handleLoadListings}
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Load your listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginCTA;
