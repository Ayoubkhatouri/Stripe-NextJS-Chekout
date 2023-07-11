import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle} from 'react-icons/ai'
import Stripe from "stripe"

const PricingCard = ({price}) => {



// POST request 
const handleSubscription = async (e) => {
    e.preventDefault();
 
    const {data}=await axios.post('/api/payment', price,
    {
        headers:{
            "Content-Type":"application/json",
        },
    }
    );
    window.location.assign(data)
}

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
       <div>
        <div className="bg-gray-100 h-28 items-center font-bold">
           <h4 className="text-3xl">{price.nickname}</h4>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
              <h1 className="text-5xl font-bold"> 
              {(price.unit_amount / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
              </h1>
            
          </div>
          <ul className="flex justify-center">
          Subscribe to our monthly subscription and get access to all of our features and benefits

          </ul>
          <button className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white shadow-sm" onClick={handleSubscription}>
             Subscribe to this dumpster
          </button>
        </div>
       </div>
    </div>
  )
}

export default PricingCard