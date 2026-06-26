class CheckoutService {
    private paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    setPaymentGateway(paymentGateway: PaymentGateway): void {
        this.paymentGateway = paymentGateway;
    }

    checkout(amount: number): void {
        this.paymentGateway.initiatePayment(amount);
    }
}