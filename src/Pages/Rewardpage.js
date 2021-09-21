import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import data from '../data/custData.json'
import TotalRewards from '../Components/TotalRewards/TotalRewards'
import MonthlyTable from '../Components/MonthlyTable/MonthlyTable'

const getPastThreeMonths = () => {
    const months = [moment().format('MMMM'),moment().subtract(1,'months').format('MMMM'),moment().subtract(2,'months').format('MMMM')]
    return months
}

const calculateRewards = (amount) => {
    if(amount<=50){
        return 0;
    }
    else if(amount<=100){
        return amount-50
    }
    else if(amount>100){
        return (amount-100)*2
    }
}

const getTotalPoints = (filterTransactions) => {
    if(filterTransactions){
        let points = filterTransactions.map(trans => {
            let reward = calculateRewards(trans.amount)
            let amount = parseInt(trans.amount)
            return {"reward":reward,"amount":amount}
        })
        let rewardPoints = points && points.reduce((a,b) => a+b.reward,0)
        let spentAmount = points && points.reduce((a,b) => a+b.amount,0)
        return {"totalAmountSpent":spentAmount,"totalRewardPoints":rewardPoints}
    }
}

const getMonthlyPoints = (pastThreeMonths,filterTransactions) => {
    if(filterTransactions){
        let newTran = filterTransactions.map(tran => {
            let month = moment(tran.date,'DD-MM-YYYY').format('MMMM')
            return {"month":month,"amount":parseInt(tran.amount),"reward":calculateRewards(tran.amount)}
        })

        let res = Object.values(newTran.reduce((acc, cur) => {
            if (!acc[cur.month])
                acc[cur.month] = {month: cur.month, transactions: []};
            acc[cur.month].transactions.push({"amount":cur.amount,"reward":cur.reward});
            return acc;
        }, {}));
        
        let finres = res && res.map(respon => {
            let amt = respon.transactions.reduce((acc,cur) => acc+cur.amount,0)
            let reward = respon.transactions.reduce((acc,cur) => acc+cur.reward,0)
            return {"month":respon.month,"monthlyAmount":amt,"monthlyReward":reward}
        })

        return finres
        
    }
}

const getRewardPoints = (pastThreeMonths,transactions) => {
    if(pastThreeMonths && transactions){
        let filterTransactions = transactions.filter(transaction => {
            return pastThreeMonths.includes(moment(transaction.date,"DD-MM-YYYY").format('MMMM'))
       })
       let totalPoints = getTotalPoints(filterTransactions)
       let monthlyPoints = getMonthlyPoints(pastThreeMonths,filterTransactions)
       return {totalPoints,monthlyPoints}
    }
}

const Rewardpage = () => {

    const {id} = useParams ();
    const[customerData,setCustomerData] = useState();
    const[transactions,setTransactions] = useState();
    const[rewardDetails,setRewardDetails] = useState({});

    useEffect(()=>{
        let customers = data.customers
        let customer = customers.find(customer => customer.id === parseInt(id))
        setCustomerData(customer)
        setTransactions(customer.transactions)
    },[id])

    useEffect(()=>{
        const pastThreeMonths = getPastThreeMonths();
        const rewardPoints = getRewardPoints(pastThreeMonths,transactions)
        setRewardDetails(rewardPoints)
    },[transactions])


    return (
        <div>
        {customerData && rewardDetails && <TotalRewards customerData={customerData} rewardDetails={rewardDetails.totalPoints} />}
         {rewardDetails &&   <MonthlyTable rewardDetails={rewardDetails.monthlyPoints}/>}
        </div>
    )
}

export default Rewardpage