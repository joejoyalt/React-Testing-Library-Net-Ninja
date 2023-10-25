<<<<<<< Updated upstream
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
=======
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockedFollowersList = () => {
>>>>>>> Stashed changes
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    beforeEach(() => {
<<<<<<< Updated upstream
        // console.log("RUNS BEFORE EACH TEST")
        jest.mock("../../../__mocks__/axios")
    })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
    
    it('should fetch and render input element', async () => {
        render(
            <MockFollowersList />
        );
    
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });
})
=======
        console.log("RUNNING BEFORE EACH TEST")
    })

    beforeAll(()=>{
        console.log("RUNNING ONCE BEFORE ALL TESTS")
    })

    afterEach(()=>{
        console.log("RUNNING AFTER TEST")
    })

    afterAll(()=>{
        console.log("RUNES AFTER ALL TEST")
    })

    it('render follower item', async () => {
        render(<MockedFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        screen.debug()
        expect(followerDivElement).toBeInTheDocument();
    });

    it('render follower item', async () => {
        render(<MockedFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    it('render follower item', async () => {
        render(<MockedFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    // it('render multiple follower items', async () => {
    //     render(<MockedFollowersList />);
    //     const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivElement.length).toBe(5);
    // });
})
>>>>>>> Stashed changes
