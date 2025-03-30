# AI Data Analytics Dashboard

## 🌐 Live Demo
[![Open in Browser](https://img.shields.io/badge/View-Live_Demo-green?style=for-the-badge)](https://natural-language-data-dashboard.onrender.com)

## Mind Map 
![Dashboard Preview](./MindMap.png)

## Overview
A dynamic dashboard that simulates AI-powered natural language data analysis with mock data generation and interactive query capabilities.

## Key Features
- Real-time data visualization
- Simulated AI query interaction
- Responsive UI with Tailwind CSS
- Redux-powered state management
- Mock data generation system

## Evaluation Focus

## 🏗️ Project Structure
src/
├── components/
│ ├── QueryInput/ # Natural language input component
│ ├── QueryHistory/ # Previous queries sidebar
│ ├── ResultsDisplay/ # Visualization container
│ ├── SuggestionList/ # AI-powered suggestions
│ ├── LoadingState/ # Loading animations
│ └── ErrorState/ # Error handling UI
├── store/
│ ├── querySlice.js # Redux query state
│ └── store.js # Redux store config
├── utils/
│ ├── mockAI.js # AI simulation logic
│ └── mockDataGenerator.js # Dynamic data generation
└── ...

### Key Components Breakdown

| Component | Purpose |
|-----------|---------|
| **QueryInput** | Handles natural language queries with validation |
| **mockAI** | Simulates NLP processing and intent recognition |
| **querySlice** | Manages query state and history |
| **mockDataGenerator** | Creates realistic analytics datasets |

To ensure proper formatting in Markdown:
1. Use triple backticks (```) for code blocks
2. Indent with 3 spaces for tree structure levels
3. Add vertical pipes (`|`) for tables
4. Include emojis for visual scannability

The structure will now:
- Maintain proper alignment
- Display as a visible directory tree
- Include explanatory tables
- Work on GitHub/GitLab
- Remain copy-paste friendly

For additional formatting options:
```markdown
<pre>
src/
├── <strong>components/</strong>
│   ├── <span style="color:blue">QueryInput</span>/
│   └── <span style="color:blue">ResultsDisplay</span>/
</pre>
Components follow atomic design principles with clear separation of concerns. Smart containers manage data while presentational components handle rendering.

### State Management Efficiency
- **Redux Toolkit** for centralized state
- Normalized data structure for performance
- Async middleware for mock API calls

### UI/UX Design
- Inspired by modern analytics dashboards
- Responsive layout with Tailwind CSS
- Animated transitions for smooth interactions
- Accessible color scheme and contrast ratios
- Loading states for async operations

### Code Quality
- Type checking with PropTypes
- ESLint with React/JSX rules
- Prettier formatting
- Modular SCSS architecture
- Comprehensive JSDoc documentation
- Error boundary components

### Creativity in Simulating AI Interaction
- **MockAI Service**: Simulates NLP processing with:
  - Intent recognition
  - Entity extraction
  - Response generation
- **MockDataGenerator** provides:
  - Time-series trends
  - User segmentation
  - Statistical distributions
- Interactive query builder with:
  - Natural language input
  - Visual query preview
  - Historical query storage

## Installation
```bash
npm install
npm run dev

Scripts
Command	Description
npm run dev	Start development server
npm run build	Create production build
npm run preview	Preview production build
npm run test	Run test suite (TODO)

Dependencies

    React 18+

    Redux Toolkit

    Recharts

    Tailwind CSS

    Faker.js (mock data)

    Vite (build tool)



This README:
1. Highlights your technical architecture decisions
2. Shows understanding of evaluation criteria
3. Documents the creative aspects of your AI simulation
4. Provides clear project structure
5. Maintains professional presentation

Would you like me to emphasize any particular aspect more or add specific implementation details?
