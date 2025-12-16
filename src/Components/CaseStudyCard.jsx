import React from 'react';
import { FaArrowRight, FaChartLine, FaClock, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ 
  id,
    title,
  company,
  industry,
  problem,
  solution,
  results,
  metrics
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Top Blue Header */}
      <div className="bg-gray-900 text-white p-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs bg-white text-gray-900 px-3 py-1 rounded-full">{industry}</span>
            <h3 className="text-lg font-bold mt-2">{title}</h3>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-90">Case Study</div>
          </div>
        </div>
        <p className="text-blue-100 text-sm mt-1">{company}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Problem Section */}
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold mb-2 flex items-center">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">!</span>
            The Challenge
          </h4>
          <p className="text-gray-600 text-sm">{problem}</p>
        </div>

        {/* Solution Section */}
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold mb-2 flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            AI Solution
          </h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
              {metric.icon === 'time' && <FaClock className="text-blue-600 mx-auto mb-1" />}
              {metric.icon === 'revenue' && <FaChartLine className="text-blue-600 mx-auto mb-1" />}
              <div className="font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-900">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div>
          <h4 className="text-gray-900 font-bold mb-3">Results Achieved</h4>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">{result.label}</span>
                <span className="font-bold text-gray-900">{result.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      

    </div>
  );
};

export default CaseStudyCard;