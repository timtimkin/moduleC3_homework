class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        console.log(this.name + " работает");
        this.isPlugged = true;
    }

    unplug() {
        console.log(this.name + " отключен(а)");
        this.isPlugged = false;
    }
}

class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, CPU, power, type, GPU) {
        super(name, power);
        this.CPU = CPU;
        this.type = type;
        this.GPU = GPU;
        this.isPlugged = false;
    }
}

class CoffeeMaker extends ElectricalAppliance {
    constructor(name, coffee, power, TypeOfDrink, display) {
        super(name, power);
        this.coffee = coffee;
        this.TypeOfDrink = TypeOfDrink;
        this.display = display;
        this.isPlugged = false;
    }
}

const HangingLamp = new Lamp("Светодиодная лампа", "gauss", 9 + " Вт", "LED");

const PC = new Computer("ПК", "AMD", 220 + " Вт", "стационарный", "RTX 3070");

const CoffeeMachine = new CoffeeMaker("Saeco", "зерновой", 1850 + " Вт", "Капучино, эспрессо", "Есть");

HangingLamp.plugIn();

PC.plugIn();

CoffeeMachine.unplug();

console.log(PC)
console.log(HangingLamp)
console.log(CoffeeMachine)
