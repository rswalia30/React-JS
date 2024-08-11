import { useState } from "react";

const App = () => {
  const [cnt, setCnt] = useState(5);

  // const decreaseValue = () => {
  //   if (cnt > 0) {
  //     setCnt(cnt - 1);
  //   }
  //   else {
  //     alert("Value cannot be less than 0");
  //   }
  // }

  const decreaseValue = () => {
    (cnt > 0) ? setCnt(cnt - 1) : alert("Value cannot be less than 0");
  }

  return (
    <>
      <h1 className="text-center font-serif font-bold text-4xl">This is App Component</h1>

      <h1 className="font-semibold mx-4 mb-3">Value = {cnt}</h1>

      <button className="bg-green-300 text-black mx-3 p-3 rounded-lg"
        onClick={() => {
          setCnt(cnt + 1);
          // setCnt(cnt + 1);
          // setCnt(cnt + 1);
          // setCnt(cnt + 1);
          // setCnt(cnt + 1);
          // setCnt((prevCnt) => prevCnt + 1);
          // setCnt((prevCnt) => prevCnt + 1);
          // setCnt((prevCnt) => prevCnt + 1);
          // setCnt((prevCnt) => prevCnt + 1);
        }}
      >Increase ➕</button>
      <button className="bg-red-300 text-black p-3 rounded-lg"
        onClick={decreaseValue}>Decrease ➖</button>
    </>
  )
}

export default App;