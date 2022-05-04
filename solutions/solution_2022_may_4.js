// Question 1
// Print all the even numbers from 0 - 10

const evenNumber = () => {
    for (let i = 0; i <= 10; i++) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

evenNumber();

// Question 2
// Create a length converter function
// KM to miles

const kmToMiles = (km) => {
    return km * 0.621371;
}

console.log(kmToMiles(10));
