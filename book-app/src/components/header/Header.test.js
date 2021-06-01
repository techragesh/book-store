import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders Header page", () => {
  render(
    <BrowserRouter>
      <Header term="" email="admin@bookstore.com" />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Book Store/i);
  expect(linkElement).toBeInTheDocument();
});
