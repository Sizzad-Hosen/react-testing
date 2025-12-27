import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { User } from "./User";

describe("User Component", () => {
  it("renders the name and email correctly", () => {
    const name = "John Doe";
    const email = "john@example.com";

    render(<User name={name} email={email} />);

    const nameElement = screen.getByTestId("user-name");
    const emailElement = screen.getByTestId("user-email");

    expect(nameElement).toHaveTextContent(`Name: ${name}`);
    expect(emailElement).toHaveTextContent(`Email: ${email}`);
  });
});
