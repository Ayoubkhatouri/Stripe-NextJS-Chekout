import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const pattern = /subs/i;

  const pricesResponse = await stripe.prices.list();
  const subscription = pricesResponse.data.filter(item => pattern.test(item.nickname));

  return NextResponse.json(subscription.reverse());
}
