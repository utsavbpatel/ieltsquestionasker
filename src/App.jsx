import { useState } from 'react';
import './App.css';
import Part1 from './components/Part1/Part1'
import Part23 from './components/Part23/Part23'
import Logo from './assets/logo.png'

function App() {

  const [showPart1, setShowPart1] = useState(false);
  const [showPart23, setShowPart23] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);

  const part1Clicked = () => {
    setShowPart1(true);
    setShowPart23(false);
    setActive1(true)
    setActive2(false);
  };

  const part23Clicked = () => {
    setShowPart23(true);
    setShowPart1(false);
    setActive1(false)
    setActive2(true)
  };


  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="component-container">
        {showPart1 && <Part1 />}
        {showPart23 && <Part23 />}
      </div>

      <div className="button-container">
        <button onClick={part1Clicked} className={`${active1 ? 'button-active1' : ''} `} > Part 1</button>
        <button onClick={part23Clicked} className={`${active2 ? 'button-active2' : ''} `} >Part 2 & 3</button>
      </div>
    </div>
  );
}

export default App;
