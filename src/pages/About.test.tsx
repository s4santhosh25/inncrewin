import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/test-utils";

import About from "./About";

it("renders <About /> page", () => {
  // You should be able to verify the About page rendered correctly.
  const { getByText } = render(<About />, {
    initialState: { sample: { counter: 0 } },
    store: undefined,
    route: "/about",
  });
  expect(getByText("About Page")).toBeTruthy();
});

it("clicks button and fires increment counter", () => {
  // You should be able to click the increment button and verify the count.
  const { container, getByText } = render(<About />, {
    initialState: { sample: { counter: 1 } },
    store: undefined,
    route: "/about",
  });
  // console.log({ container: container.querySelector('button') });
  const btn = container.querySelector("button");
  expect(getByText("Current Count: 1")).toBeTruthy();
  userEvent.click(btn);
  expect(getByText("Current Count: 2")).toBeTruthy();
});
