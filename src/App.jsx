import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change Switch to Routes
import ComponentSelectionForm from './pages/ComponentSelectionForm';
import PreviewPage from './pages/PreviewPage'; // Ensure you import your PreviewPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentSelectionForm />} />
        <Route path="/preview" element={<PreviewPage />} /> {/* Use element instead of component */}
      </Routes>
    </Router>
  );
};

export default App;
