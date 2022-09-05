function Scooter(year,color,model){
    this.year = year;
    this.color = color;
    this.model = model;

}


function Driver(name,age,experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address,city){
    this.address = address;
    this.city = city;
}

const noelaScooter = Scooter("2020", "red", "New model");
noelaScooter.year;

typeof Scooter;

noelaScooter.constructor;
