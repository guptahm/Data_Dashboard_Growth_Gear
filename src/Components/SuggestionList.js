// src/components/SuggestionList.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const SuggestionList = ({ onSelect }) => {
  const suggestions = useSelector(state => state.query.suggestions);
  
  return (
    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
      {suggestions.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => onSelect(suggestion)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span>{suggestion}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-3 text-gray-500">Start typing to get suggestions</div>
      )}
    </div>
  );
};

export default SuggestionList;