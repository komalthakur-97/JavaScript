const obj1 = {
  firstName: "Komal",
  age: 25,
  countryCode: 91
};
const obj2 = {
  lastName: "Thakur",
  ageY: "years",
  phoneNumber: '1234 567 890'
};

const newObject = {...obj1, ...obj2}
console.log(newObject)

const newArray = obj1["firstName"] + obj2["lastName"]
console.log(newArray)

for (let key in obj1) {
  let array = obj1.push[key];
  console.log(array);
}
