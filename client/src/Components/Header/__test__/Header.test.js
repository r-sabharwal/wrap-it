import React from "react";
import ReactDOM from "react-dom";
import Header from "./../Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// eslint-disable-next-line no-undef
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});
