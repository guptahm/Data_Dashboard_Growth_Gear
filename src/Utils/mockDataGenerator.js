// src/utils/mockDataGenerator.js
import { faker } from '@faker-js/faker';

export function generateMockResults(query) {
  const queryLower = query.toLowerCase();
  
  // Determine result type based on query
  if (queryLower.includes('sales') && queryLower.includes('region')) {
    return generateSalesByRegion();
  } else if (queryLower.includes('revenue') && (queryLower.includes('growth') || queryLower.includes('compare'))) {
    return generateRevenueComparison();
  } else if (queryLower.includes('customer') && (queryLower.includes('acquisition') || queryLower.includes('cost'))) {
    return generateCustomerAcquisitionCost();
  } else if (queryLower.includes('products') && queryLower.includes('bought together')) {
    return generateProductAffinity();
  } else if (queryLower.includes('employee') && queryLower.includes('retention')) {
    return generateEmployeeRetention();
  } else {
    // Default response
    return generateDefaultChart();
  }
}

function generateSalesByRegion() {
  const regions = ['North', 'South', 'East', 'West', 'International'];
  const data = regions.map(region => ({
    region,
    sales: faker.number.int({ min: 50000, max: 200000 }),
    target: faker.number.int({ min: 80000, max: 180000 }),
    growth: faker.number.float({ min: -0.1, max: 0.3, precision: 0.01 })
  }));
  
  return {
    type: 'bar',
    title: 'Sales by Region - Last Quarter',
    data,
    xAxis: 'region',
    yAxis: ['sales', 'target'],
    metrics: [
      { name: 'Total Sales', value: `$${data.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}` },
      { name: 'Highest Growth', value: `${Math.max(...data.map(item => item.growth * 100)).toFixed(1)}%` }
    ]
  };
}

function generateRevenueComparison() {
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const currentYear = quarters.map(q => ({
    quarter: q,
    revenue: faker.number.int({ min: 250000, max: 400000 }),
    customers: faker.number.int({ min: 150, max: 300 })
  }));
  
  const previousYear = quarters.map(q => ({
    quarter: q,
    revenue: faker.number.int({ min: 200000, max: 350000 }),
    customers: faker.number.int({ min: 100, max: 250 })
  }));
  
  return {
    type: 'line',
    title: 'Revenue Comparison - Current vs Previous Year',
    data: {
      currentYear,
      previousYear
    },
    xAxis: 'quarter',
    yAxis: ['revenue'],
    series: ['currentYear', 'previousYear'],
    metrics: [
      { name: 'YoY Growth', value: `${faker.number.float({ min: 5, max: 25, precision: 0.1 })}%` },
      { name: 'Avg. Revenue Increase', value: `$${faker.number.int({ min: 25000, max: 75000 }).toLocaleString()}` }
    ]
  };
}

function generateCustomerAcquisitionCost() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = months.map(month => ({
    month,
    cac: faker.number.int({ min: 150, max: 400 }),
    clv: faker.number.int({ min: 500, max: 1200 }),
    conversions: faker.number.int({ min: 50, max: 200 })
  }));
  
  return {
    type: 'combo',
    title: 'Customer Acquisition Cost - Last 6 Months',
    data,
    xAxis: 'month',
    yAxis: ['cac', 'clv', 'conversions'],
    metrics: [
      { name: 'Avg. CAC', value: `$${Math.round(data.reduce((sum, item) => sum + item.cac, 0) / data.length)}` },
      { name: 'CAC:CLV Ratio', value: `1:${(data.reduce((sum, item) => sum + item.clv, 0) / data.reduce((sum, item) => sum + item.cac, 0)).toFixed(1)}` }
    ]
  };
}

function generateProductAffinity() {
  const products = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
  const data = [];
  
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      data.push({
        product1: products[i],
        product2: products[j],
        frequency: faker.number.int({ min: 50, max: 500 }),
        lift: faker.number.float({ min: 1.2, max: 3.5, precision: 0.1 })
      });
    }
  }
  
  // Sort by frequency
  data.sort((a, b) => b.frequency - a.frequency);
  
  return {
    type: 'table',
    title: 'Products Frequently Bought Together',
    data: data.slice(0, 5),
    columns: ['product1', 'product2', 'frequency', 'lift'],
    metrics: [
      { name: 'Most Common Pair', value: `${data[0].product1} + ${data[0].product2}` },
      { name: 'Highest Lift', value: `${data.reduce((max, item) => item.lift > max ? item.lift : max, 0).toFixed(1)}x` }
    ]
  };
}

function generateEmployeeRetention() {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Operations'];
  const data = departments.map(dept => ({
    department: dept,
    retentionRate: faker.number.float({ min: 0.6, max: 0.95, precision: 0.01 }),
    avgTenure: faker.number.float({ min: 1.5, max: 4.5, precision: 0.1 }),
    headcount: faker.number.int({ min: 10, max: 50 })
  }));
  
  return {
    type: 'bar',
    title: 'Employee Retention by Department',
    data,
    xAxis: 'department',
    yAxis: ['retentionRate'],
    metrics: [
      { name: 'Company Retention', value: `${(data.reduce((sum, item) => sum + item.retentionRate, 0) / data.length * 100).toFixed(1)}%` },
      { name: 'Avg. Tenure', value: `${(data.reduce((sum, item) => sum + item.avgTenure, 0) / data.length).toFixed(1)} years` }
    ]
  };
}

function generateDefaultChart() {
  const categories = ['A', 'B', 'C', 'D', 'E'];
  const data = categories.map(cat => ({
    category: cat,
    value: faker.number.int({ min: 100, max: 1000 }),
    target: faker.number.int({ min: 300, max: 800 })
  }));
  
  return {
    type: 'bar',
    title: 'Analysis Results',
    data,
    xAxis: 'category',
    yAxis: ['value', 'target'],
    metrics: [
      { name: 'Total Value', value: data.reduce((sum, item) => sum + item.value, 0).toLocaleString() },
      { name: 'Target Achievement', value: `${Math.round(data.reduce((sum, item) => sum + item.value, 0) / data.reduce((sum, item) => sum + item.target, 0) * 100)}%` }
    ]
  };
}