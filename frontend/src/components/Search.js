import React, { useState } from 'react';
import { MagnifyingGlassIcon, StarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const Search = () => {
  const [classType, setClassType] = useState('');
  const [classNumber, setClassNumber] = useState('');

  // Mock data for professors
  const professors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      rating: 4.8,
      reviews: 245,
      difficulty: 3.2,
      wouldTakeAgain: '95%',
      classes: ['MATH 151', 'MATH 152'],
      tags: ['Clear Grading', 'Engaging', 'Helpful']
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      rating: 4.5,
      reviews: 189,
      difficulty: 3.8,
      wouldTakeAgain: '88%',
      classes: ['MATH 151', 'MATH 251'],
      tags: ['Test Heavy', 'Clear Lectures', 'Responsive']
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      rating: 4.2,
      reviews: 156,
      difficulty: 4.0,
      wouldTakeAgain: '82%',
      classes: ['MATH 151', 'MATH 308'],
      tags: ['Extra Credit', 'Participation Matters', 'Tough Grader']
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const filled = index < Math.floor(rating);
      const halfFilled = index === Math.floor(rating) && rating % 1 >= 0.5;
      
      return filled || halfFilled ? (
        <StarIconSolid key={index} className="w-5 h-5 text-yellow-400" />
      ) : (
        <StarIcon key={index} className="w-5 h-5 text-gray-300" />
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find the Best Professors</h1>
          <p className="text-gray-600">Search by class to find professor ratings and reviews</p>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class Type</label>
                <input
                  type="text"
                  placeholder="e.g., MATH"
                  value={classType}
                  onChange={(e) => setClassType(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon uppercase"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class Number</label>
                <input
                  type="text"
                  placeholder="e.g., 151"
                  value={classNumber}
                  onChange={(e) => setClassNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                />
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-maroon text-white rounded-lg hover:bg-maroon/90 transition-colors flex items-center justify-center gap-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search Professors
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 gap-6">
          {professors.map((professor) => (
            <div key={professor.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <AcademicCapIcon className="w-6 h-6 text-maroon" />
                    {professor.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {renderStars(professor.rating)}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{professor.rating}</span>
                    <span className="text-sm text-gray-500">({professor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Would Take Again</div>
                  <div className="text-lg font-semibold text-gray-900">{professor.wouldTakeAgain}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-maroon rounded-full"
                      style={{ width: `${(professor.difficulty / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{professor.difficulty}/5</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Classes Taught</div>
                <div className="flex flex-wrap gap-2">
                  {professor.classes.map((className, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Common Tags</div>
                <div className="flex flex-wrap gap-2">
                  {professor.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-maroon/5 text-maroon rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search; 