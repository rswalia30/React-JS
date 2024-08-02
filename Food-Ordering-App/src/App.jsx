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
  Header
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

import { Header } from "./Components/Header"
import { Body } from "./Components/Body"
import { Footer } from "./Components/Footer"

export const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}