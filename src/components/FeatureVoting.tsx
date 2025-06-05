
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const FeatureVoting = () => {
  const [upvotes, setUpvotes] = useState(127);
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        What do you think about this feature?
      </h3>
      
      <div className="flex justify-center space-x-8">
        <button
          onClick={() => handleVote('up')}
          className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
            userVote === 'up'
              ? 'border-green-500 bg-green-50 text-green-600'
              : 'border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600'
          }`}
        >
          <ThumbsUp className={`w-8 h-8 mb-2 ${userVote === 'up' ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">Love it!</span>
          <span className="text-2xl font-bold mt-1">{upvotes}</span>
        </button>

        <button
          onClick={() => handleVote('down')}
          className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
            userVote === 'down'
              ? 'border-red-500 bg-red-50 text-red-600'
              : 'border-gray-200 hover:border-red-300 text-gray-600 hover:text-red-600'
          }`}
        >
          <ThumbsDown className={`w-8 h-8 mb-2 ${userVote === 'down' ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">Not for me</span>
          <span className="text-2xl font-bold mt-1">{downvotes}</span>
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          {upvotes + downvotes} people have voted so far
        </p>
      </div>
    </div>
  );
};

export default FeatureVoting;
