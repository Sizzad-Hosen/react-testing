import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserTable from "./UserTable";


describe("DelayedUserTable", () => {
  test("displays users after 1 second", async () => {
    render(<UserTable />);


    // for testing debug purpose

  //   screen.debug();
  // const rows = screen.getAllByRole("row");
  // screen.debug();
  // expect(rows).toHaveLength(3);


    const rows = within(screen.getAllByTestId("users")).getAllByRole("row")

    expect(rows).toHaveLength(3);

   // Initially shows loading
    expect(screen.getByTestId("loading")).toBeVisible();

    // Wait for the table to appear (after setTimeout)
    const table = await screen.findByTestId("user-table");
    expect(table).toBeInTheDocument();

    // Check one of the users
    const userName = await screen.findByText("Sizzad");
    expect(userName).toBeVisible();

    const userEmail = await screen.findByText("rahim@gmail.com");
    expect(userEmail).toBeVisible();


  });
});
