import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("hides and shows arrows", function() {
  const { getByTestId } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

   // expect left arrow to be hidden and right arrow to be visible
   expect(leftArrow).toHaveClass("hidden");
   expect(rightArrow).not.toHaveClass("hidden");

  //  expect left arrow to be visible and right arrow to be hidden
   expect(leftArrow).not.toHaveClass("hidden");
   expect(rightArrow).not.toHaveClass("hidden");

  });

  it("works when you click on the left arrow", function() {
    const { getByTestId, queryByAltText } = render(<Carousel />);
    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");

    // move forward in the carousel
    fireEvent.click(rightArrow);


    // expect the first image to show, but not the second
    fireEvent.click(leftArrow);
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  });