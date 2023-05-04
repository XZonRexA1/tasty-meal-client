import React from "react";
// import { PDFDownloadLink } from "@react-pdf/renderer";


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
      {/* I was trying to use it but the npm instal react-to-pdf package did not install showing some error  */}
      {/* <PDFDownloadLink
        fileName="blog.pdf"
        className="text-blue-500 hover:underline cursor-pointer"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink> */}
    </div>
  );
};

export default Blog;
