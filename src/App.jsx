import './App.scss';
import { useState } from 'react';
import Topbar from './component/Topbar/Topbar';
import Intro from './component/Intro/Intro';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Works from './component/Works/Works';
import Menu from './component/Menu/Menu';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Topbar open={open} setOpen={setOpen} />
      <Menu open={open} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        
      </div>
    </div>
  );
}

export default App;
