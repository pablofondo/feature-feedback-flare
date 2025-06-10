
import React, { useState } from 'react';
import { LogIn, Mail, Lock, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const LoginCTA = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Track engagement - this is a fake door test
    console.log('Login attempt tracked:', { email, timestamp: new Date() });
    
    // Close modal and show success message
    setIsOpen(false);
    alert('Thanks for your interest! We\'ll notify you when this feature is available.');
    
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/5 to-purple-600/5 relative overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Personalized Reports</h3>
              <p className="text-sm text-gray-600">Get insights tailored to your portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">AI Recommendations</h3>
              <p className="text-sm text-gray-600">Actionable steps to improve performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <LogIn className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Real-time Updates</h3>
              <p className="text-sm text-gray-600">Stay informed with live insights</p>
            </div>
          </div>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Sign In to View Your Properties
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
                  Welcome Back
                </DialogTitle>
                <p className="text-gray-600 text-center">
                  Sign in to access your personalized property insights
                </p>
              </DialogHeader>
              
              <form onSubmit={handleLogin} className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                
                <div className="text-center">
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Forgot your password?
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          
          <p className="text-sm text-gray-500 mt-4">
            Don't have an account? <button className="text-blue-600 hover:text-blue-800 font-medium">Sign up for free</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginCTA;
