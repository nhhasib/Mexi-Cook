import { PDFViewer } from "@react-pdf/renderer";
import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span> An uncontrolled component is a
          form element such as input, textarea, or select that manages its own
          state internally. When a user interacts with the form element, its
          state is updated automatically without any intervention from the
          parent component. <br />A controlled component, on the other hand, is
          a form element whose state is controlled by the parent component.
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          2. How to validate React props using PropTypes
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span> PropTypes are simply a
          mechanism that ensures that the passed value is of the correct
          datatype. This makes sure that we don’t receive an error at the very
          end of our app by the console which might not be easy to deal with.
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          3. Tell us the difference between nodejs and express js.
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It allows developers to run JavaScript on the server-side,
          outside of the browser environment. Node.js provides a set of core
          modules that can be used to build a wide variety of applications, from
          command-line tools to web servers. 
          <br />
          Express.js, on the other hand, is a web framework for Node.js. It provides a set of tools and utilities
          for building web applications and APIs, such as routing, middleware,
          and templating engines. Express.js is designed to be flexible and
          unopinionated, allowing developers to structure their applications in
          the way that makes the most sense for their particular use case.
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span>
          Custom hooks are created by extracting reusable logic from components and placing it into a standalone function that can be imported and used in multiple components. <br />
          Custom hooks can be useful for a variety of reasons. For example, they can help to reduce code duplication by extracting common logic that would otherwise need to be repeated across multiple components. Custom hooks can also make code more readable and easier to maintain by separating out complex or repetitive code into a reusable function.
        </p>
      </div>
    </div>
  );
};

export default Blog;
