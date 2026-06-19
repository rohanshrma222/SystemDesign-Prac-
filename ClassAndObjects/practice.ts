class BankAccount{
    private accountNumber: string;
    private owerName: string;
    private balance: number;

    constructor(accountNumber: string, owerName: string){
        this.accountNumber = accountNumber;
        this.owerName = owerName;
        this.balance = 0;
    }

    deposit(amount: number): void{
        if(amount>0){
            this.balance +=amount
        }
    }

    withdraw(amount: number): boolean {
        if(amount > 0 && this.balance >= amount){
            this.balance -=amount;
            return true;
        }
        return false;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("12345", "rohan");
account.deposit(1000);
console.log(account.getBalance().toFixed(1));

let success = account.withdraw(500);
console.log(success);
console.log(account.getBalance().toFixed(1));

success = account.withdraw(1000);
console.log(success);