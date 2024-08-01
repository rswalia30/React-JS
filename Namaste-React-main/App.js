import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1", // type
  { id: "heading" }, // attributes
  "Hello World from React!" // children
);

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // multiple children - Array
    [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]
  )
);

// console.log(parent);

// root.render(parent);

/*********************   JSX - (HTML like syntax) *************************** */

const num2 = 250;

const jsxHeading = (
  <h1 id="heading1" className="head">
    {num2}
    Hello World from JSX
  </h1>
);

const jsxHeading2 = (
  <div id="parent">
    <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
  </div>
);

// console.log(jsxHeading);

// root.render(jsxHeading);

/*********************   React Components *************************** */

/*********************   FUNCTIONAL COMPONENTS (Capitalize)*************************** */

const FunComp = () => {
  return <h1>Hello World from Functional Component</h1>;
};

const FunComp2 = () => <h1>Single Line in Arrow Function</h1>;

// multiple lines
const FunComp3 = () => (
  <div id="container">
    <h1>I am h1 tag</h1>
  </div>
);

// root.render(<FunComp3 />);

/*********************   Component Composition   *************************** */

const FunComp4 = () => (
  <div id="container">
    <h1>I am h1 tag</h1>
    <FunComp />
    <FunComp></FunComp>
    {FunComp()}
  </div>
);

// root.render(<FunComp4 />);

/*********************   React Element Inside Component   *************************** */

const go = <h1>I am React Element</h1>;

const FunComp5 = () => (
  <div id="container">
    <h1>I am h1 tag</h1>
    {go}
  </div>
);

// root.render(<FunComp5 />);

const FunComp6 = () => (
  <div id="container">
    {go}
    <h1>I am h1 tag</h1>
    <FunComp />
  </div>
);

root.render(<FunComp6 />);
