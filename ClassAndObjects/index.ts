class Car {
    // Attributes (private by default in Typescript with private keyword)
    private model: string;
    private brand: string;
    private speed: number;

    //Constructor
    constructor(brand: string, model: string){
        this.model = model; //The keyword this means: "The current object that is being created or used."
        this.brand = brand; // So this.brand means "the brand field belonging to this particular car object."
        this.speed = 0;
    }

    // Method to accelerate
    accelerate(increment: number): void {
        this.speed += increment;
    }

    // Method to display info
    displayStatus(): void {
        console.log(`${this.brand} is running at ${this.speed} km/h.`)
    }
}

//Creating and using objects
function main() {
    // Creating objects for the Car class
    const corilla = new Car("Toyata", "Corolla");
    const mustang = new Car("Ford", "Mustang");

    corilla.accelerate(20);
    mustang.accelerate(30);

    corilla.displayStatus();
    mustang.displayStatus();
}

main();