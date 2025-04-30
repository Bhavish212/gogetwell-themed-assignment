import React, { useState } from 'react';
import themes from './themes/themes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentTheme, setCurrentTheme] = useState('cardiology');
  const theme = themes[currentTheme];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: theme.background, color: theme.color }}>
      <Header />
      <main className="flex-grow p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">{theme.title}</h1>
        <img src={theme.image} alt={theme.title} className="mx-auto mb-6 rounded-lg shadow-lg max-w-md" />
        <select
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          className="p-2 rounded bg-white text-black"
        >
          {Object.keys(themes).map((key) => (
            <option key={key} value={key}>
              {themes[key].title}
            </option>
          ))}
        </select>
      </main>
      <Footer />
    </div>
  );
}

export default App;