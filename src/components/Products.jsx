import React from 'react'
import axios from 'axios'
import Product from './Product'
import {useState,useEffect} from 'react'

const Products = () => {
  
    const [data,setData]=useState([])
    const url = "http://localhost:3000/products"

    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                const response = await axios.get(url)
                console.log(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()

    },[] )

return(
    <div>
        

    </div>
)

}
export default Products