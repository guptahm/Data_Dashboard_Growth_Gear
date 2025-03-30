// src/components/QueryHistory.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { executeQuery } from '../Slice/querySlice';

const QueryHistory = () => {
  const queryHistory = useSelector(state => state.query.queryHistory);
  const dispatch = useDispatch();
  console.log(queryHistory);
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Recent Queries</h3>
      { 
      queryHistory.length > 0 ? (
        <ul className="space-y-2">
          {queryHistory.slice().reverse().map((item, index) => (
            <li key={index} className="flex items-start">
              <button
                onClick={() => dispatch(executeQuery(item.query))}
                className="text-left text-blue-600 hover:text-blue-800 hover:underline flex-1"
              >
                {item.query}
              </button>
              <span className="text-xs text-gray-500 ml-2">
                {new Date(item.timestamp).toLocaleTimeString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No queries yet. Ask a question to get started!</p>
      )}
    </div>
  );
};

export default QueryHistory;