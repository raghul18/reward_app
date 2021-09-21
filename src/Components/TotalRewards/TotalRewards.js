import React from 'react'
import './TotalRewards.css'

const TotalRewards = ({customerData,rewardDetails}) => {
    return (
        <div>
            <h2>{customerData.name}</h2>
            <h3><strong>Total Amount Spent - {rewardDetails.totalAmountSpent}</strong></h3>
            <h3><strong>Total Reward Points Obtained - {rewardDetails.totalRewardPoints}</strong></h3>
        </div>
    )
}

export default TotalRewards
