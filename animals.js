const petsData=[

{
    petName: "Stella",
    age: 7,
    weightInKilos: 24,
    breed: "Dalmation"
}, 

{
    petName: "Cody",
    age: 8,
    weightInkilos: 22,
    breed:"Corgi"
},
{
    petName: "Mango",
        age: 2,
weightInKilos:11,
    reed:"Persian"
},
{
    petName: "Lucy",
    age: 4,
    weightInkilos:35,
    breed: "Ball Python"
},
{
    petName: "Buhmie",
    age: 1,
    weightInKilos: 28,
    breed: "Bull-dog"
},
{
    petName: "Mike",
    age: 2,
    weightInKilos: 25,
    breed: "Black Lab"
},
{
    petName: "Max",
    age: 2,
    weightInKilos: 22,
    breed: "German Shepard"
},
{
    petName: "Nick",
    age: 9,
    weightInKilos: 50,
    breed: "Yellow Lab"
},
{
    petName: "Nebula",
    age: 2,
    weightInKilos: 9,
    breed: "American Yorkie"
},
{
    petName: "Rex",
    age: 3,
    weightInKilos: 15,
    breed: "German Shephered"
}
];


const showInfo = () => {

// input from user
    let inputNum = document.querySelector ("#inputNum").value;

// starts at 0
    inputNum = parseInt(inputNum)-1;
    let petTyped = document.querySelector(".typedPet");

    let pet = petsData [inputNum];

//string
    petTyped.innerHTML = `${pet.petName} is ${pet.age} years old, weighs ${pet.weightInKilos} kilos is a ${pet.breed}.`;

    console.log (`${pet.petName} is ${pet.age} years old, weighs ${pet.weightInKilos} kilos is a ${pet.breed}.`);
}