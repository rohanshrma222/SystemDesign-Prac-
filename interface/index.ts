interface PaymentGateway {
    initiatePayment(amount: number): void;
}

class StripePayment implements PaymentGateway {
    initiatePayment(amount: number): void {
        console.log(`Processing payment via Stripe: $${amount}`);
    }
}

class RazorpayPayment implements PaymentGateway {
    initiatePayment(amount: number): void {
        console.log(`Processing payment via Razorpay: ₹${amount}`);
    }
}



