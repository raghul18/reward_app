import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Header from '../Header'

it('should render Heading',() => {
    render(<Header />);
    const heading = screen.getByText(/Reward Calculator/i);
    expect(heading).toBeInTheDocument();
});