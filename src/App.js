import React from 'react';
import './App.css';
import DynamicMenu from './components/DynamicMenu/DynamicMenu';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';





function App() {
  const menuItems = [
    { id: 1, label: 'HOME' },
    { id: 2, label: 'ELECTRONICS' },
    { id: 3, label: 'BOOKS' },
    { id: 4, label: 'MUSIC' },
    { id: 5, label: 'MOVIES' },
    { id: 6, label: 'CLOTHING' },
    { id: 7, label: 'GAMES' },
    { id: 8, label: 'FURNITURE' },
    { id: 9, label: 'TRAVEL' },
    { id: 10, label: 'BOTANICAL' },
    { id: 11, label: 'CATEGORY NAME' },
  
  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <DynamicMenu items={menuItems} />
      </header>
      <FeaturedProducts />
     
    </div>
  );
}

export default App;
