// src/components/ResultsDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  LineChart,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const ResultsDisplay = () => {
  const { results, isLoading, error } = useSelector(state => state.query);
  
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!results) return null;
  
  const renderChart = () => {
    switch (results.type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={results.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={results.xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              {results.yAxis.map((key, index) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  fill={index === 0 ? '#8884d8' : '#82ca9d'} 
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              {results.series.map((series, index) => (
                <Line
                  key={series}
                  type="monotone"
                  dataKey="revenue"
                  data={results.data[series]}
                  name={series === 'currentYear' ? 'Current Year' : 'Previous Year'}
                  stroke={index === 0 ? '#8884d8' : '#82ca9d'}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
      case 'combo':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={results.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={results.xAxis} />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey={results.yAxis[0]} fill="#8884d8" />
              <Bar yAxisId="left" dataKey={results.yAxis[1]} fill="#82ca9d" />
              <Line yAxisId="right" dataKey={results.yAxis[2]} stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        );
      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {results.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {results.columns.map((column) => (
                      <td key={`${rowIndex}-${column}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {typeof row[column] === 'number' ? row[column].toLocaleString() : row[column]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div>Unsupported chart type</div>;
    }
  };
  
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{results.title}</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="overflow-x-auto">
            {renderChart()}
          </div>
        </div>
        
        {results.metrics && (
          <div className="md:w-1/4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-gray-900 mb-3">Key Metrics</h3>
              <ul className="space-y-3">
                {results.metrics.map((metric, index) => (
                  <li key={index}>
                    <div className="text-sm text-gray-500">{metric.name}</div>
                    <div className="text-lg font-semibold">{metric.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;