import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import CustomerTable from '../CustomerTable';

it('should render the table heading correctly',() => {
    render(<CustomerTable />);
    const heading = screen.getByText('Customer List')
    expect(heading).toBeInTheDocument();
})

const customers =  [
        {
            "id": 1,
            "name": "John",
            "mobileNumber": "8547236950"
        },{
            "id": 2,
            "name": "Peter",
            "mobileNumber": "8547259630"
        }
    ]

it('should render customer table',() => {
    render(<CustomerTable customers={customers}/>);
    const name = screen.getByText('John')
    const number = screen.getByText('8547259630')
    expect(name).toBeInTheDocument();
    expect(number).toBeInTheDocument();
})