// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import QueryInput from '../src/Components/QueryInput';
import QueryHistory from '../src/Components/QueryHistory';
import ResultsDisplay from '../src/Components/ResultsDisplay';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-2xl mb-10 font-bold text-blue-400 ">Project By : Harikrishna Gupta</h1>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Gen AI Analytics Tool
            </h1>
        
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Ask questions in plain English and get instant data insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <QueryInput />
              <ResultsDisplay />
            </div>
            <div className="lg:col-span-1">
              <QueryHistory />
            </div>
          </div>

        
        </div>
      </div>
    </Provider>
  );
}

export default App;