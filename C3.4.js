function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " работает");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " отключен(а)");
    this.isPlugged = false;
};

function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, CPU, power, type, GPU) {
    this.name = name;
    this.power = power;
    this.CPU = CPU;
    this.type = type;
    this.GPU = GPU;
    this.isPlugged = false;
}


Computer.prototype = new ElectricalAppliance();

function CoffeeMaker (name, coffee, power, TypeOfDrink, display) {
    this.name = name;
    this.power = power;
    this.coffee = coffee;
    this.TypeOfDrink = TypeOfDrink;
    this.display = display;
    this.isPlugged = false;
}

CoffeeMaker.prototype = new ElectricalAppliance();




const HangingLamp = new Lamp("Светодиодная лампа", "gauss", 9 + " Вт", "LED");

const PC = new Computer("ПК", "AMD", 220 + " Вт", "стационарный", "RTX 3070");

const CoffeeMachine = new CoffeeMaker("Saeco", "зерновой", 1850 + " Вт", "Капучино, эспрессо", "Есть");

HangingLamp.plugIn();

PC.plugIn();

CoffeeMachine.unplug();

console.log(PC)
console.log(HangingLamp)
console.log(CoffeeMachine)