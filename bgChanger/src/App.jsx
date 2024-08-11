import { useState } from "react";

const App = () => {
  const [bg, setBg] = useState("white");

  return (
    <div className="w-full h-screen duration-700" style={{ backgroundColor: bg }}>
      <h1 className="text-center bg-slate-100 p-4 font-bold font-serif">Welcome To BG Changer</h1>
      <div className="bg-slate-100 p-3 text-center">
        <button className="bg-red-500 text-black p-3 rounded-full mx-3 hover:bg-red-700" onClick={() => { setBg("red") }}>Red</button>
        <button className="bg-yellow-300 text-black p-3 rounded-full mx-3 hover:bg-yellow-400" onClick={() => { setBg("yellow") }}>Yellow</button>
        <button className="bg-green-300 text-black p-3 rounded-full mx-3 hover:bg-green-400" onClick={() => { setBg("green") }}>Green</button>
        <button className="bg-purple-300 text-black p-3 rounded-full mx-3 hover:bg-purple-400" onClick={() => { setBg("purple") }}>Purple</button>
        <button className="bg-white text-black p-3 rounded-full mx-3 border border-black hover:bg-slate-100" onClick={() => { setBg("white") }}>White</button>
        <button className="bg-black text-white p-3 rounded-full mx-3 hover:bg-slate-700" onClick={() => { setBg("black") }}>Black</button>
        <button className="bg-blue-400 text-black p-3 rounded-full mx-3 hover:bg-blue-500" onClick={() => { setBg("blue") }}>Blue</button>
        <button className="bg-pink-400 text-black p-3 rounded-full mx-3 hover:bg-pink-500" onClick={() => { setBg("pink") }}>Pink</button>
      </div >
    </div>
  )
}

export default App;