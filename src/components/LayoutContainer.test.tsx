import React from "react";
import { render } from "../../test/test-utils";
import LayoutContainer from "./LayoutContainer";

it("can browse to the about page", async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const { getByText } = render(<LayoutContainer />, {
    initialState: { sample: { counter: 0 } },
    store: undefined,
    route: "/about",
  });

  expect(getByText("About Page")).toBeTruthy();
});
