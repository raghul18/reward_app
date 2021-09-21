import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import MonthlyTable from '../MonthlyTable'

it('should render the table heading correctly',() => {
    render(<MonthlyTable />);
    const heading = screen.getByText('Past 3 Months Details')
    expect(heading).toBeInTheDocument();
})

const rewardDetails =  [
    {month: 'September', monthlyAmount: 260, monthlyReward: 120},
    ]

it('should render monthly table',() => {
    render(<MonthlyTable rewardDetails={rewardDetails}/>);
    const month = screen.getByText('September')
    const Amount = screen.getByText('260')
    expect(month).toBeInTheDocument();
    expect(Amount).toBeInTheDocument();
})