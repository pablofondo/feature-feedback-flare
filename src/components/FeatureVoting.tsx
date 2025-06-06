
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

const FeatureVoting = () => {
  const [upvotes, setUpvotes] = useState(287);
  const [downvotes, setDownvotes] = useState(23);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      // Remove vote
      if (type === 'up') {
        setUpvotes(prev => prev - 1);
      } else {
        setDownvotes(prev => prev - 1);
      }
      setUserVote(null);
    } else {
      // Add new vote and remove old one if exists
      if (userVote === 'up') {
        setUpvotes(prev => prev - 1);
        setDownvotes(prev => prev + 1);
      } else if (userVote === 'down') {
        setDownvotes(prev => prev - 1);
        setUpvotes(prev => prev + 1);
      } else {
        // No previous vote
        if (type === 'up') {
          setUpvotes(prev => prev + 1);
        } else {
          setDownvotes(prev => prev + 1);
        }
      }
      setUserVote(type);
    }
  };

  const totalVotes = upvotes + downvotes;
  const approvalRate = Math.round((upvotes / totalVotes) * 100);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto border border-gray-100/50">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4 mr-2" />
          Community Feedback
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          What do you think about this feature?
        </h3>
        <p className="text-gray-600 text-lg">
          Your vote helps us prioritize features that matter most to our community
        </p>
      </div>
      
      <div className="flex justify-center space-x-12 mb-8">
        <button
          onClick={() => handleVote('up')}
          className={`group relative flex flex-col items-center p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            userVote === 'up'
              ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 text-green-600 shadow-lg'
              : 'border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 bg-white hover:bg-green-50'
          }`}
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
            userVote === 'up' 
              ? 'bg-green-500 shadow-lg' 
              : 'bg-gray-100 group-hover:bg-green-100'
          }`}>
            <ThumbsUp className={`w-8 h-8 transition-all duration-300 ${
              userVote === 'up' ? 'fill-white text-white' : 'text-gray-600 group-hover:text-green-600'
            }`} />
          </div>
          <span className="text-lg font-semibold mb-2">Love it!</span>
          <span className="text-3xl font-bold">{upvotes}</span>
          <span className="text-sm text-gray-500 mt-1">votes</span>
        </button>

        <button
          onClick={() => handleVote('down')}
          className={`group relative flex flex-col items-center p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            userVote === 'down'
              ? 'border-red-500 bg-gradient-to-br from-red-50 to-rose-50 text-red-600 shadow-lg'
              : 'border-gray-200 hover:border-red-300 text-gray-600 hover:text-red-600 bg-white hover:bg-red-50'
          }`}
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
            userVote === 'down' 
              ? 'bg-red-500 shadow-lg' 
              : 'bg-gray-100 group-hover:bg-red-100'
          }`}>
            <ThumbsDown className={`w-8 h-8 transition-all duration-300 ${
              userVote === 'down' ? 'fill-white text-white' : 'text-gray-600 group-hover:text-red-600'
            }`} />
          </div>
          <span className="text-lg font-semibold mb-2">Not for me</span>
          <span className="text-3xl font-bold">{downvotes}</span>
          <span className="text-sm text-gray-500 mt-1">votes</span>
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{totalVotes}</div>
            <div className="text-sm text-gray-500">Total Votes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">{approvalRate}%</div>
            <div className="text-sm text-gray-500">Approval Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">1,247</div>
            <div className="text-sm text-gray-500">Total Feedback</div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Community Sentiment</span>
            <span className="font-medium text-green-600">Highly Positive</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${approvalRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureVoting;
