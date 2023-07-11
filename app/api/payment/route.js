import Stripe from "stripe";
import { NextResponse,NextRequest } from "next/server";


export async function POST(request){
    const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
    let data=await request.json();
   
    
    
    const session=await stripe.checkout.sessions.create({
       
        payment_method_types: ['card'],
        line_items: [
            {
              price_data: {
                currency: 'usd',
                product: data.product,
                unit_amount:   data.unit_amount,
                recurring: {
                  interval: 'month' // 'month' | 'year'
                }
              },
              quantity: 1
            }
          ],
        mode:'subscription',
        success_url:'http://localhost:3000/succ',
        cancel_url:'http://localhost:3000/echec'
    })

    return NextResponse.json(session.url)
}