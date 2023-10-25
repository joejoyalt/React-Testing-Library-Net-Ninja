import { render, screen } from '@testing-library/react';
import Header from '../Header';

<<<<<<< Updated upstream
describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
})

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i });
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// it('should render same text passed into title prop', async () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });
=======
it('render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

/*

it('render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument();
});

// GET BY

it('render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", { name: "My Header" })
    expect(headingElement).toBeInTheDocument();
});

it('render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTitle("Header")
    expect(headingElement).toBeInTheDocument();
});

it('render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId("header-1")
    expect(headingElement).toBeInTheDocument();
});

// FIND BY

it('render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// QUERY BY

it('render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

it('render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getAllByRole("heading");
    expect(headingElement.length).toBe(2);
});

*/
>>>>>>> Stashed changes
