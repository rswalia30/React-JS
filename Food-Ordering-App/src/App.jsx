// function App() {
//   return (
//     <>
//       <h1>Food Ordering App</h1>
//       <h2>Hello World</h2>
//     </>
//   )
// }
// export default App;

/*
  Navbar
    - logo
    - nav links
    - cart

  Body
    - search bar
    - Restraunt Cards
      - image
      - name
      - stars
      - time
      - cusinies

  Footer 
    - copyright
    - links
*/

import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

export const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}