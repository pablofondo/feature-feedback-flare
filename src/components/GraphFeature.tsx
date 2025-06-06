
import React from 'react';

const GraphFeature = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto border border-gray-100/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            AI-Powered Listing Analysis
          </h3>
          <p className="text-gray-600">Identifying underperforming properties with actionable insights</p>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-green-700">Live Preview</span>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-gray-800">3 am schlechtesten performende Inserate</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Performance Insights</span>
          </div>
        </div>
        
        {/* Listing Items */}
        <div className="space-y-4">
          {/* First Listing */}
          <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-10 h-8 bg-gray-400 rounded shadow-sm"></div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 text-lg mb-1">Eschergutweg 17, 8049 Zürich</div>
                  <div className="text-gray-700 font-medium">CHF 4'720.— / Monat</div>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">5 Leads</span>
                    <span className="text-sm text-red-500 font-medium flex items-center">
                      <span className="mr-1">↓</span>-30%
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Performance</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-3 rounded-xl text-sm max-w-sm border border-blue-100">
                <div className="flex items-start">
                  <span className="mr-2 text-lg">💡</span>
                  <div>
                    <div className="font-medium mb-1">Die vollständige Adresse und mehr Bilder könnten</div>
                    <div className="mb-2">die <strong>Performance um 28% verbessern</strong>.</div>
                    <button className="text-blue-600 underline hover:text-blue-800 transition-colors text-sm font-medium">
                      Inserat vervollständigen →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Listing */}
          <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-10 h-8 bg-green-500 rounded shadow-sm"></div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 text-lg mb-1">Badenerstrasse 25, 8004 Zürich</div>
                  <div className="text-gray-700 font-medium">CHF 3'850.— / Monat</div>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">3 Leads</span>
                    <span className="text-sm text-red-500 font-medium flex items-center">
                      <span className="mr-1">↓</span>-45%
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Performance</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 px-4 py-3 rounded-xl text-sm max-w-sm border border-orange-100">
                <div className="flex items-start">
                  <span className="mr-2 text-lg">📊</span>
                  <div>
                    <div className="font-medium mb-1">Der <strong>Preis ist 18% höher im Vergleich</strong> zu ähnlichen</div>
                    <div className="mb-2">Inseraten in der Umgebung.</div>
                    <button className="text-orange-600 underline hover:text-orange-800 transition-colors text-sm font-medium">
                      Konkurrenz-Analyse ansehen →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Listing */}
          <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-10 h-8 bg-purple-500 rounded shadow-sm"></div>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 text-lg mb-1">Limmatstrasse 152, 8005 Zürich</div>
                  <div className="text-gray-700 font-medium">CHF 2'950.— / Monat</div>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">1 Lead</span>
                    <span className="text-sm text-red-500 font-medium flex items-center">
                      <span className="mr-1">↓</span>-60%
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Performance</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-3 rounded-xl text-sm max-w-sm border border-purple-100">
                <div className="flex items-start">
                  <span className="mr-2 text-lg">🎯</span>
                  <div>
                    <div className="font-medium mb-1"><strong>Beschreibung zu kurz</strong> und fehlende</div>
                    <div className="mb-2">Ausstattungsdetails reduzieren die Sichtbarkeit.</div>
                    <button className="text-purple-600 underline hover:text-purple-800 transition-colors text-sm font-medium">
                      Beschreibung optimieren →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <p className="text-sm font-medium text-gray-700">
            AI-powered insights with 94% accuracy • Updated in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphFeature;
