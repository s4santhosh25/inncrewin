import React from "react";
import { render } from "../../test/test-utils";

import Home from "./Home";

it("renders <Home /> page", () => {
  // You should be able to show that you can verify Home rendered correctly
  const { getByText } = render(<Home />, {
    initialState: { sample: { counter: 0 } },
    store: undefined,
    route: "/",
  });
  expect(getByText("Welcome!")).toBeTruthy()
});
