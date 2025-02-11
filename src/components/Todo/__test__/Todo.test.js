import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    });
}

describe("Todo", () => {
    it('render same text passed into title prop', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).toBeInTheDocument()
    });

    it('render multiple items', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping", "Pet my Cat", "Wash my hands"])
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(3)
    });

    it("the tasks created check it's class", async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    });

    it("the tasks change class on click", async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    });
})
