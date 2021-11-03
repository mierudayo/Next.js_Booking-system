import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`;

export const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(apiKey);
  }
  return stripePromise;
};
