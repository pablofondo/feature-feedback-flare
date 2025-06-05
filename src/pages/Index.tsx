
import React from 'react';
import Header from '../components/Header';
import GraphFeature from '../components/GraphFeature';
import FeatureVoting from '../components/FeatureVoting';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Introducing Our New
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Analytics Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're excited to show you our upcoming analytics dashboard feature. This powerful tool will help you visualize your data like never before, with interactive charts, real-time updates, and customizable views.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            🚀 Coming Soon - Help us shape this feature with your feedback!
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Preview</h2>
            <p className="text-lg text-gray-600">
              Here's what the new analytics dashboard will look like
            </p>
          </div>
          <GraphFeature />
        </div>
      </section>

      {/* Voting Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Opinion Matters</h2>
            <p className="text-lg text-gray-600">
              Let us know if you're excited about this feature
            </p>
          </div>
          <FeatureVoting />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Help Us Improve</h2>
            <p className="text-lg text-gray-600">
              Share your detailed thoughts and suggestions with our team
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-semibold">FeatureLab</span>
          </div>
          <p className="text-gray-400">
            Building the future of analytics, one feature at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
