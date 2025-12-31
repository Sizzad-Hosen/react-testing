import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./UserEvent";

describe("Counter Component", () => {

  test("renders heading with initial count", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", {
      level: 1,
    });

    expect(heading).toHaveTextContent("Count: 0");
  });

  test("increments count when Increment button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    await user.click(incrementButton);

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("Count: 1");
  });

});
