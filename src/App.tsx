import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Index from '@/pages/Index';
import EstimateForm from '@/pages/EstimateForm';
import ThankYou from '@/pages/ThankYou';
import TestFile from '@/pages/TestFile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estimate" element={<EstimateForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/test" element={<TestFile />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;