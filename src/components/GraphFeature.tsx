
import React from 'react';

const GraphFeature = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        New Analytics Dashboard
      </h3>
      
      <div className="bg-gray-50 rounded-lg p-6 border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-700">Revenue Overview</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Mock Graph */}
        <div className="relative h-64 bg-white rounded border">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Graph lines */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              points="20,150 80,120 140,80 200,60 260,40 320,30 380,20"
            />
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              points="20,180 80,160 140,140 200,100 260,80 320,60 380,50"
            />
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              points="20,170 80,140 140,110 200,90 260,70 320,65 380,60"
            />
            
            {/* Data points */}
            <circle cx="380" cy="20" r="4" fill="#3b82f6" />
            <circle cx="380" cy="50" r="4" fill="#10b981" />
            <circle cx="380" cy="60" r="4" fill="#f59e0b" />
          </svg>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Q1 Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Q2 Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Q3 Revenue</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Interactive charts with real-time data visualization and customizable views
        </p>
      </div>
    </div>
  );
};

export default GraphFeature;
