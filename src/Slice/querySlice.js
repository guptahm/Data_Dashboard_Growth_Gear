// src/features/query/querySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  generateMockSuggestions } from '../Utils/mockAI';
import { generateMockResults} from "../Utils/mockDataGenerator";

// Async thunk for executing queries
export const executeQuery = createAsyncThunk(
  'query/executeQuery',
  async (query, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return generateMockResults(query);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for getting suggestions
export const getSuggestions = createAsyncThunk(
  'query/getSuggestions',
  async (partialQuery) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return generateMockSuggestions(partialQuery);
  }
);

const initialState = {
  currentQuery: '',
  queryHistory: [],
  results: null,
  isLoading: false,
  error: null,
  suggestions: [],
  suggestionsLoading: false
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearResults: (state) => {
      state.results = null;
    }
  },
  extraReducers: (builder) => {
    // Execute Query cases
    builder.addCase(executeQuery.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(executeQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
      state.queryHistory.push({
        query: state.currentQuery,
        
        timestamp: new Date().toISOString()
      });
    });
    builder.addCase(executeQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Get Suggestions cases
    builder.addCase(getSuggestions.pending, (state) => {
      state.suggestionsLoading = true;
    });
    builder.addCase(getSuggestions.fulfilled, (state, action) => {
      state.suggestionsLoading = false;
      state.suggestions = action.payload;
    });
    builder.addCase(getSuggestions.rejected, (state) => {
      state.suggestionsLoading = false;
      state.suggestions = [];
    });
  }
});

export const { setCurrentQuery, clearError, clearResults } = querySlice.actions;

export default querySlice.reducer;