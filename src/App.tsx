import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typewriter from 'typewriter-effect';
import './App.css'

function App() {

  return (

    <div className="App">
      <div>
      <h1>
        <Typewriter
      onInit={(typewriter) => {
      typewriter.typeString('I Write This To You.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/></h1>
      </div>
      <p className="read-the-docs">
        Click Here
      </p>
    </div>
  )
}

export default App
