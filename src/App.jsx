import './App.scss';
import NavBar from './Components/NavigationBar/Navbar.jsx';
import Cursor from './Components/Cursor.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import {useState} from 'react';

function App() {
  const [cursorSize, setCursorSize] = useState({ width: '30px', height: '30px' });

  const makeCircleBigger = () => {
    setCursorSize({ width: '50px', height: '50px' });
  };

  const makeCircleSmaller = () => {
    setCursorSize({ width: '30px', height: '30px' });
  }; 

  return (
    <>
      <NavBar makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller} />
      <Cursor cursorSize={cursorSize} />
      <Home />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
