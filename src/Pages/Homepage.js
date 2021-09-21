import React,{useState,useEffect} from 'react'
import CustomerTable from '../Components/CustomerTable/CustomerTable'
import data from '../data/custData.json'

const Homepage = () => {

    const[custData,setCustData] = useState([])

    useEffect(()=>{
        setCustData(data.customers);
    },[])

    return (
        <div>
            <CustomerTable customers={custData}/>
        </div>
    )
}

export default Homepage