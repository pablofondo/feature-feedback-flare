
import React from 'react';

const GraphFeature = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Worst Performing Listings Detection
      </h3>
      
      <div className="bg-gray-50 rounded-lg p-6 border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-700">3 am schlechtesten performende Inserate</h4>
          <div className="text-sm text-gray-500">Performance Insights</div>
        </div>
        
        {/* Listing Items */}
        <div className="space-y-4">
          {/* First Listing */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <div className="font-medium text-blue-600">Eschergutweg 17, 8049 Zürich</div>
                <div className="text-gray-600">CHF 4'720.— / Monat</div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500">5 Leads</span>
                  <span className="text-sm text-red-500">↓ -30%</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Performance</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center">
                <span className="mr-1">💡</span>
                <div>
                  <div className="font-medium">Die vollständige Adresse und mehr Bilder könnten</div>
                  <div>die <strong>Performance um 28% verbessern</strong>.</div>
                  <div className="text-blue-600 underline mt-1">Inserat vervollständigen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Listing */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-green-400 rounded"></div>
              </div>
              <div>
                <div className="font-medium text-blue-600">Eschergutweg 17, 8049 Zürich</div>
                <div className="text-gray-600">CHF 4'720.— / Monat</div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500">5 Leads</span>
                  <span className="text-sm text-red-500">↓ -30%</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Performance</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center">
                <span className="mr-1">💡</span>
                <div>
                  <div className="font-medium">Der <strong>Preis ist 18% höher im Vergleich</strong> zu ähnlichen</div>
                  <div>Inseraten. <span className="text-blue-600 underline">Konkurrenz-Analyse</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Listing */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-gray-400 rounded"></div>
              </div>
              <div>
                <div className="font-medium text-blue-600">Eschergutweg 17, 8049 Zürich</div>
                <div className="text-gray-600">CHF 4'720.— / Monat</div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500">5 Leads</span>
                  <span className="text-sm text-red-500">↓ -30%</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Performance</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center">
                <span className="mr-1">💡</span>
                <div>
                  <div className="font-medium">Der <strong>Preis ist 18% höher im Vergleich</strong> zu ähnlichen</div>
                  <div>Inseraten. <span className="text-blue-600 underline">Konkurrenz-Analyse</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          AI-powered insights to identify underperforming listings and actionable improvement suggestions
        </p>
      </div>
    </div>
  );
};

export default GraphFeature;
