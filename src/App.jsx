import './App.css'
import hill1 from './images/hill1.png'
import hill2 from './images/hill2.png'
import hill3 from './images/hill3.png'
import hill4 from './images/hill4.png'
import hill5 from './images/hill5.png'
import tree from './images/tree.png'
import leaf from './images/leaf.png'
import plant from './images/plant.png'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    let textEl = document.getElementById('text'); 
    let leafEl = document.getElementById('leaf');
    let hill1El = document.getElementById('hill1'); 
    let hill4El = document.getElementById('hill4'); 
    let hill5El = document.getElementById('hill5'); 

    window.addEventListener('scroll', () => {
      let value = window.scrollY;

      textEl.style.marginTop = value*2.5 + 'px';
      leafEl.style.top = value*-1.5 + 'px';
      leafEl.style.left = value*1.5 + 'px';
      hill5El.style.left = value*1.5 + 'px';
      hill4El.style.left = value*-1.5 + 'px';
      hill1El.style.top = value*1 + 'px';
    })
  },[])

  return (
    <>
      <header>
        <h2 className='logo'>Logo</h2>
        <nav className='navigation'>
          <a href="#" className='active'>Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="parallax">
        <img src={hill1} id='hill1' />
        <img src={hill2} id='hill2' />
        <img src={hill3} id='hill3' />
        <img src={hill4} id='hill4' />
        <img src={hill5} id='hill5' />
        <img src={tree} id='tree' />
        <h2 id="text">Welcome</h2>
        <img src={leaf} id='leaf' />
        <img src={plant} id='plant' />
      </section>
      <section className="sec">
        <h2>React Parallax Codehal</h2>
        <p>This is a Parallax Webpage created in React using Vanilla Javascript. The design is a recreation of <a href='https://www.youtube.com/@codehal'><strong>Codehal's</strong></a> project on Parallax.</p>
        <br />
        <p>You can get the source code <a href='https://github.com/krishnaupadhyay11/React-Parallax-Codehal'><strong>here.</strong></a></p>
        <br />
        <p>Happy Coding!</p>
      </section>
    </>
  )
}

export default App
