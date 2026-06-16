class FoodOrder {
    private orderId: string;
    private customerName: string;
    private items: string[];
    private totalAmount: number;
    private isPlaced: boolean;

    constructor(orderId: string, customerName: string){
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
        this.isPlaced = false; 
    }

    // Only allows adding items before the order is placed
    addItem(name: string, price: number): void{
        if(this.isPlaced){
            console.log("Cannot modify a Placed order.");
            return;
        }
        this.items.push(name);
        this.totalAmount += price;
    }

    // Places the order if it has atleast one item and hasn't been placed yet
    placeOrder(): boolean{
        if(this.isPlaced || this.items.length == 0){
            return false;
        }
        this.isPlaced = true;
        return true;
    }

    getItemCount(): number{
        return this.items.length;
    }

    displayOrder(): void{
        const status = this.isPlaced ? "Placed": "Pending";
        console.log(`Order ${this.orderId} (${this.customerName}) - ${status}`);
        for(const item of this.items){
            console.log(` - ${item}`);
        }
        console.log(` Total: $${this.totalAmount.toFixed(2)}`);
    }
}

// Usage
const order1 = new FoodOrder("ORD-101", "Alice");
order1.addItem("Pizza", 12.99);
order1.addItem("Garlic Bread", 4.99);
order1.addItem("Coke", 2.49);
order1.placeOrder();

const order2 = new FoodOrder("ORD-102", "Bob");
order2.addItem("Burger", 9.99);
order2.addItem("Fries", 3.99);

order1.displayOrder();
console.log();
order2.displayOrder();