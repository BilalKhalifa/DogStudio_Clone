import React from 'react'
import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'


const App = () => {
  return (
    <>
      <main>
        <Canvas style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundImage: "url(/background-xl.png)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <Dog />
        </Canvas>
        <section id= 'section1'></section>
        <section id= 'section2'></section>
        <section id= 'section3'></section>
      </main>
    </>
  )
}

export default App
