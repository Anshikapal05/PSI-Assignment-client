import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("renders heading", () => {
  render(<TaskList />);
  expect(screen.getByText(/your tasks/i)).toBeInTheDocument();
});
