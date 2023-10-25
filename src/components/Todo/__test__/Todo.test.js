import { render, screen, fireEvent } from '@testing-library/react';
<<<<<<< Updated upstream
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"
=======
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';
>>>>>>> Stashed changes

const MockTodo = () => {
    return (
        <BrowserRouter>
<<<<<<< Updated upstream
          <Todo/>
=======
            <Todo />
>>>>>>> Stashed changes
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
<<<<<<< Updated upstream
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});
=======
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
>>>>>>> Stashed changes
