import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("renders login form", () => {
  render(<LoginForm />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
