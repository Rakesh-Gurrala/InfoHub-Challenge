import { useState } from 'react';
import WeatherModule from './components/WeatherModule';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteGenerator from './components/QuoteGenerator';
import './App.css';


function App() {
  const [activeTab, setActiveTab] = useState('Weather');

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">InfoHub</h1>
      <nav className="flex justify-center mb-6">
        {['Weather', 'Currency', 'Quote'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mx-2 px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      {activeTab === 'Weather' && <WeatherModule />}
      {activeTab === 'Currency' && <CurrencyConverter />}
      {activeTab === 'Quote' && <QuoteGenerator />}
    </div>
  );
}

export default App;
