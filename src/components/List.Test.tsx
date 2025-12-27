import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const MyList = () => (
  <ul>
    <li>Apple</li>
    <li>Banana</li>
  </ul>
);

render(<MyList />);

// getAllByRole - throws if no <li> found
const items = screen.getAllByRole("listitem");
console.log(items.length); // 2

// queryAllByRole - returns empty array if nothing found
const missingItems = screen.queryAllByRole("listitem", { name: "Orange" });
console.log(missingItems.length); // 0
