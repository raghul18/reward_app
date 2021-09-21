import React from "react";
import './MonthlyTable.css'

const MonthlyTable = ({ rewardDetails }) => {
  return (
    <div>
    <h2>Past 3 Months Details</h2>
      <table className="monthly_rewards">
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount Spent</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>{
            rewardDetails && rewardDetails.map((reward,index) => {
                return(
                <tr key={index}>
                <td>{reward.month}</td>
                <td>{reward.monthlyAmount}</td>
                <td>{reward.monthlyReward}</td>
                </tr>
                )
            })
            }
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyTable;
