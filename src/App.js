import React from 'react';
import { Navigation } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'utility/theme';
import GlobalStyles from './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const items = [
  {
    content: 'Homepage',
    to: '/',
  },
  {
    content: 'Budget',
    to: '/budget',
  },
]

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />

      <Router>
        <Navigation items={items} />

        <Routes>
          <Route exact path="/">Homepage</Route>
          <Route path="/budget">Budget Page</Route>
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
