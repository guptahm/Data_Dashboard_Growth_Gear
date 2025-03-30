// src/components/QueryInput.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { executeQuery, getSuggestions, setCurrentQuery } from '../Slice/querySlice';
import SuggestionList from '../Components/SuggestionList';

const QueryInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (inputValue.length > 2) {
      dispatch(getSuggestions(inputValue));
    } else {
      dispatch(getSuggestions(''));
    }
  }, [inputValue, dispatch]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setCurrentQuery(inputValue));
      dispatch(executeQuery(inputValue));
      setInputValue('');
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionSelect = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative mb-5">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Ask a question about your data, e.g., 'Show sales by region'"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500  focus:border-blue-500 text-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Ask
          </button>
        </div>
        
      </form>
      {showSuggestions && <SuggestionList onSelect={handleSuggestionSelect} />}
    </div>
  );
};

export default QueryInput;