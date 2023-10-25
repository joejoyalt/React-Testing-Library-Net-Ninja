import { render, screen, fireEvent } from '@testing-library/react';
<<<<<<< Updated upstream
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it('should render input element', () => {
        render(
            <AddInput 
=======
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput", () => {
    it('render input element', async () => {
        render(
            <AddInput
>>>>>>> Stashed changes
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });
<<<<<<< Updated upstream
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
=======

    it('render input element able to type', async () => {
        render(
            <AddInput
>>>>>>> Stashed changes
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
<<<<<<< Updated upstream
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
=======
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it('when button is clicked empty input', async () => {
        render(
            <AddInput
>>>>>>> Stashed changes
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
<<<<<<< Updated upstream
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
    });
    
    it('should have empty input when add button is cliked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})
=======
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
})

>>>>>>> Stashed changes
