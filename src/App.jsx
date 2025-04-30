import React from 'react';
import { useThemeStore } from './themeStore';
import CardiologyImg from './assets/heart.jpg';
import NeurologyImg from './assets/brain.png';
import DermatologyImg from './assets/skin.jpg';

const themes = {
  cardiology: {
    name: "Cardiology",
    img: CardiologyImg,
    gradient: "from-red-700 via-red-500 to-pink-500",
    button: "bg-red-700 hover:bg-red-600 text-white"
  },
  neurology: {
    name: "Neurology",
    img: NeurologyImg,
    gradient: "from-blue-800 via-indigo-600 to-purple-600",
    button: "bg-blue-700 hover:bg-blue-600 text-white"
  },
  dermatology: {
    name: "Dermatology",
    img: DermatologyImg,
    gradient: "from-green-700 via-teal-500 to-emerald-500",
    button: "bg-green-700 hover:bg-green-600 text-white"
  }
};

const Header = () => (
  <header className="py-4 px-6 bg-black bg-opacity-40 text-white text-xl font-semibold shadow-md">
    <h1>GoGetWell.ai - Specialty Theming</h1>
  </header>
);

const Footer = () => (
  <footer className="py-4 px-6 mt-10 bg-black bg-opacity-40 text-sm text-center text-gray-200">
    © 2025 GoGetWell.ai. All rights reserved.
  </footer>
);

const App = () => {
  const { theme, setTheme } = useThemeStore();
  const current = themes[theme];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${current.gradient} text-white transition-all`}>
      <Header />
      <main className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{current.name} Theme</h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={current.img} alt={current.name} className="w-full md:w-1/3 rounded-2xl shadow-lg" />
          <div className="flex-1 space-y-4">
            <p className="text-lg">Welcome to GoGetWell’s {current.name} experience. Tailored UI and color scheme for medical clarity and professionalism.</p>
            <div className="space-x-2">
              {Object.keys(themes).map((key) => (
                <button
                  key={key}
                  className="px-4 py-2 rounded bg-white/20 hover:bg-white/30 transition-colors"
                  onClick={() => setTheme(key)}
                >
                  {themes[key].name}
                </button>
              ))}
            </div>
            <button className={`mt-4 px-6 py-3 rounded ${current.button}`}>Explore {current.name}</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
