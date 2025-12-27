import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserProfile } from "./userProfile";


describe("UserProfile Component", () => {
  beforeEach(() => {
    render(<UserProfile />);
  });

  it("renders elements using different RTL queries", () => {
    // getByRole - button
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();

    // getByPlaceholderText
    const nameInput = screen.getByPlaceholderText("Enter your name");
    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    // getByLabelText
    const nameInputByLabel = screen.getByLabelText(/name:/i);
    const emailInputByLabel = screen.getByLabelText(/email:/i);
    expect(nameInputByLabel).toBeInTheDocument();
    expect(emailInputByLabel).toBeInTheDocument();

    // getByTitle
    const nameInputByTitle = screen.getByTitle("name-input");
    const emailInputByTitle = screen.getByTitle("email-input");
    expect(nameInputByTitle).toBeInTheDocument();
    expect(emailInputByTitle).toBeInTheDocument();

    // getByDisplayValue - input current value
    const nameInputByValue = screen.getByDisplayValue("John Doe");
    const emailInputByValue = screen.getByDisplayValue("john@example.com");
    expect(nameInputByValue).toBeInTheDocument();
    expect(emailInputByValue).toBeInTheDocument();

    // getByTestId
    const nameInputByTestId = screen.getByTestId("name-input-testid");
    const emailInputByTestId = screen.getByTestId("email-input-testid");
    const displayName = screen.getByTestId("display-name");
    const displayEmail = screen.getByTestId("display-email");
    const avatar = screen.getByTestId("user-avatar");
    expect(nameInputByTestId).toBeInTheDocument();
    expect(emailInputByTestId).toBeInTheDocument();
    expect(displayName).toBeInTheDocument();
    expect(displayEmail).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();

    // getByAltText - image
    const img = screen.getByAltText("User Avatar");
    expect(img).toBeInTheDocument();
  });

  it("updates input values and submit", () => {
    const nameInput = screen.getByPlaceholderText("Enter your name");
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /submit/i });

    // mock alert
    const alertMock = vi.fn();
    window.alert = alertMock;

    // change input
    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.change(emailInput, { target: { value: "alice@example.com" } });

    // submit
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith(
      "Name: Alice, Email: alice@example.com"
    );

    // check displayed values updated
    expect(screen.getByDisplayValue("Alice")).toBeInTheDocument();
    expect(screen.getByDisplayValue("alice@example.com")).toBeInTheDocument();
  });
});
