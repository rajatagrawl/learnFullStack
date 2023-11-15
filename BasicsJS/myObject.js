const user = {
    userName: "Rajat",
    age: 22,
    email: "rajat@agrawal.com",
    favCrics: ["Dhoni", "Virat", "Ganguly"],
    address: {
        city: "New York",
        state: "Arkansas"
    }
}

// console.log(user.email);
// console.log(user['age'])
// console.log(user.favCrics[1]);
// console.log(user.address.state);
// console.log(user.address['city']);

const user2 = user;

user.age = 25
console.log(user2);
delete user.email;
console.log(user2);