import React from "react";

const Blog = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl text-left mx-4 font-bold">
        Tell us the differences between uncontrolled and controlled components ?
      </h1>
      <p className="text-left mx-4">
        Answer: Uncontrolled components are managed by the DOM, while controlled
        components are managed by React and keep the state of the input.
      </p>
      <h1 className="text-2xl text-left mx-4 font-bold">
        How to validate React props using PropTypes ?
      </h1>
      <p className="text-left mx-4">
        Answer: PropTypes is a package that provides runtime type checking for
        React props to validate their type and shape.
      </p>
      <h1 className="text-2xl text-left mx-4 font-bold">
        Tell us the difference between nodejs and express js. ?
      </h1>
      <p className="text-left mx-4">
        Answer: Node.js is a runtime environment for executing JavaScript code
        outside of a web browser, while Express.js is a web framework built on
        top of Node.js that simplifies the process of building web applications.
      </p>
      <h1 className="text-2xl text-left mx-4 font-bold">
        What is a custom hook, and why will you create a custom hook ?
      </h1>
      <p className="text-left mx-4">
        Answer: A custom hook is a reusable function that encapsulates common
        logic used across multiple components. They can be used to abstract
        complex logic and make code more modular and reusable.
      </p>
    </div>
  );
};

export default Blog;
