// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './component/Home';
import Album1 from './image/Album 1.png';
import Album2 from './image/Album 2.png';
import Album3 from './image/Album 3.png';
import Album4 from './image/Album 4.png';
import Album5 from './image/Album 5.jpg';
// import Store from './component/Store';
import Store from './component/Store';
import About from './component/About';

function App() {

  const [activeSection, setActiveSection] = useState('home');

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
  
    <div>
    {/* Navbar */}

    {/* <nav class="p-3 flex bg-black justify-center items-center">
      <div className='flex-none w-20 h-7'><a href='#' id="home" className='text-white h-2'>Home</a></div>
      <div className='flex-none w-20 h-7'><a href='#' id="store" className='text-white'>store</a></div>
      <div className='flex-none w-20 h-7'><a href='#' id="about" className='text-white'>about</a></div>
      </nav> */}

    <nav className="p-3 flex bg-black justify-center items-center">
      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('home')} className="text-white h-2">
          Home
        </a>
      </div>
      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('store')} className="text-white">
          Store
        </a>
      </div>
      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('about')} className="text-white">
          About
        </a>
      </div>
    </nav>

    {/* Content */}
    
      {activeSection === 'home' && <Home/>}      
      {activeSection === 'store' && <Store/>}
      {activeSection === 'about' && <About/>}
    </div>

  );
}

export default App;
