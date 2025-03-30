// src/components/LoadingState.jsx
import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-gray-600">Analyzing your question and fetching insights...</p>
      <p className="text-sm text-gray-500 mt-2">Our AI is working hard to find the best answer</p>
    </div>
  );
};

export default LoadingState;