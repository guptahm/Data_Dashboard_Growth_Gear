// src/utils/mockAI.js
const commonQueries = [
  "Show me sales by region for the last quarter",
  "What was our customer acquisition cost last month?",
  "Compare revenue growth between Q1 and Q2",
  "What products are frequently bought together?",
  "Show employee retention rate by department",
  "What's our monthly active user growth rate?",
  "Display website traffic sources for last 30 days",
  "What's the average deal size by sales rep?",
  "Show customer satisfaction trends over time",
  "What percentage of leads convert to customers?"
];

const industrySpecificQueries = {
  retail: [
    "Show top selling products by category",
    "What's our inventory turnover rate?",
    "Display seasonal sales patterns"
  ],
  saas: [
    "Show monthly recurring revenue growth",
    "What's our churn rate by customer segment?",
    "Display feature adoption rates"
  ],
  healthcare: [
    "Show patient wait times by department",
    "What's the average treatment cost by diagnosis?",
    "Display readmission rates"
  ]
};

export function generateMockSuggestions(partialQuery) {
  if (!partialQuery || partialQuery.trim() === '') {
    return commonQueries.slice(0, 5);
  }
  
  const queryLower = partialQuery.toLowerCase();
  
  // Check for industry keywords
  let industry = null;
  if (queryLower.includes('retail') || queryLower.includes('product') || queryLower.includes('inventory')) {
    industry = 'retail';
  } else if (queryLower.includes('saas') || queryLower.includes('mrr') || queryLower.includes('churn')) {
    industry = 'saas';
  } else if (queryLower.includes('patient') || queryLower.includes('health') || queryLower.includes('treatment')) {
    industry = 'healthcare';
  }
  
  // Combine suggestions
  let suggestions = [];
  
  // Add matching common queries
  suggestions = suggestions.concat(
    commonQueries.filter(q => 
      q.toLowerCase().includes(queryLower)
  ));
  
  // Add industry specific if detected
  if (industry) {
    suggestions = suggestions.concat(
      industrySpecificQueries[industry].filter(q =>
        q.toLowerCase().includes(queryLower))
    );
  }
  
  // If no matches, return some generic suggestions
  if (suggestions.length === 0) {
    suggestions = commonQueries
      .filter(q => q.toLowerCase().includes('show') || q.toLowerCase().includes('what'))
      .slice(0, 3);
  }
  
  return suggestions.slice(0, 5);
}