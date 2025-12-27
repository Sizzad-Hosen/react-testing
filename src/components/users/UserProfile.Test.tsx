import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserProfile } from "./userProfile";


describe("UserProfile Component", () => {
  beforeEach(() => {
    render(<UserProfile />);
  });

  it("renders the component heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("User Profile");
  });

  it("gets input fields by placeholder, label, title, and testid", () => {
    // getByPlaceholderText
    const nameInput1 = screen.getByPlaceholderText("Enter your name");
    const emailInput1 = screen.getByPlaceholderText("Enter your email");

    // getByLabelText
    const nameInput2 = screen.getByLabelText("Name:");
    const emailInput2 = screen.getByLabelText("Email:");

    // getByTitle
    const nameInput3 = screen.getByTitle("name-input");
    const emailInput3 = screen.getByTitle("email-input");

    // getByTestId
    const nameInput4 = screen.getByTestId("name-input-testid");
    const emailInput4 = screen.getByTestId("email-input-testid");

    expect(nameInput1).toBeInTheDocument();
    expect(emailInput1).toBeInTheDocument();
    expect(nameInput2).toBeInTheDocument();
    expect(emailInput2).toBeInTheDocument();
    expect(nameInput3).toBeInTheDocument();
    expect(emailInput3).toBeInTheDocument();
    expect(nameInput4).toBeInTheDocument();
    expect(emailInput4).toBeInTheDocument();
  });

  it("displays user input after typing", () => {
    const nameInput = screen.getByTestId("name-input-testid");
    const emailInput = screen.getByTestId("email-input-testid");

    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.change(emailInput, { target: { value: "alice@example.com" } });

    expect(screen.getByTestId("display-name")).toHaveTextContent("Name: Alice");
    expect(screen.getByTestId("display-email")).toHaveTextContent("Email: alice@example.com");
  });

  it("finds the image by alt text", () => {
    const img = screen.getByAltText("User Avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/150");
  });
});

