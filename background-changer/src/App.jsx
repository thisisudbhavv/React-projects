import { useEffect, useState } from 'react'

function App() {
  const [bgcolor, setBgcolor] = useState("white");

  const changer = (color) => {
    setBgcolor(color);
    console.log(bgcolor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor])

  return (
    <div>
      <button onClick={() => {
        changer("Red")
      }} >Red</button>
      <button onClick={() => {
        changer("Yellow")
      }}>Yellow</button>
      <button onClick={() => {
        changer("Green")
      }}>Green</button>
      <button onClick={() => {
        changer("Grey")
      }}>Grey</button>
      <button onClick={() => {
        changer("Blue")
      }}>Blue</button>
    </div>
  )
}

export default App
