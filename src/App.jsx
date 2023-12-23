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
  const [cursorText, setCursorText] = useState('');
  const [cursorColor, setCursorColor] = useState('white');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const makeCircleBigger = (width="50px", height="50px") => {
    setCursorSize({ width: width, height: height });
  };

  const makeCircleSmaller = (width="30px", height="30px") => {
    setCursorSize({ width: width, height: height });
  }; 

  return (
    <>
      <NavBar isModalOpen={isModalOpen} makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller} />
      <Cursor cursorText={cursorText} cursorColor={cursorColor} cursorSize={cursorSize} />
      <Home  setCursorColor={setCursorColor} setCursorText={setCursorText} makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller}/>
      <About/>
      <Projects setIsModalOpen={setIsModalOpen} setCursorColor={setCursorColor} setCursorText={setCursorText} makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller}/>
      <Contact/>
    </>
  );
}

export default App;
