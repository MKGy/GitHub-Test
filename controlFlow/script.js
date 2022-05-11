// 0 :==: "" :==: false !== null (or undefined) (type-corsion)

const userIsLoggedIn = false;
let welcomeMessage = "";

if (userIsLoggedIn) {
  welcomeMessage = "welcome ";
} else {
  welcomeMessage = "please log in";
}

console.log(welcomeMessage);
//-----------------------------Alternativly ------------------------------
// ternary-Operation
// true/false?   // true      // false
const welcomeMessage2 = userIsLoggedIn ? "welcome" : "please log in";

console.log(welcomeMessage2);

//-----------------------------switch--------------------------
const favoriteAnimal = "dog";

switch (favoriteAnimal) {
  case "cat":
    console.log("meown");
    break;
  case "dog":
    console.log("bark bark");
    break;
}
console.log("//--------------------------------------");
//-----------------------------while-loop -------------------------------

const person = {
  // check this object first if he has a friend ( yes --> therefore print Kyle)
  name: "Kyle",
  // check this friend of the above object if he in turn has a friend ( yes --> therfore print Joe)
  friend: {
    name: "Joe",
    // then check this friend if he in turn has a friend (No --> therefore don't print Sally)
    friend: {
      name: "Sally",
    },
  },
};

let currentPer = person;

while (currentPer != null) {
  console.log(currentPer.name); // Output: Kyle, Joe, Sally
  currentPer = currentPer.friend;
}
/*

let currentPerson = person;
// while-condition is the logic for line 47
while (currentPerson.friend != null) {
  console.log(currentPerson.name); // Output: Kyle, Joe
  // going deeper into a friend object
  currentPerson = currentPerson.friend;
}

*/

console.log("//--------------------Recursion------------------");
//------------------------- the recursion version of above while-statement -----------------
//---------------------------------------------
let currenPerson = person;

function printNames(currenPerson) {
  if (currenPerson == null) {
    return;
  }
  console.log(currenPerson.name); // Output:
  return printNames(currenPerson.friend); //
}

printNames(currenPerson);

//-------------------------Recursion -------------------------------------------
console.log("//--------------------------------------");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("//--------------------Recursion------------------");
function printNumber(number) {
  //!(i <= 10) == i > 10
  if (number > 10) {
    return;
  }
  console.log(number); //console.log(i);

  printNumber(number + 1); //i++  <== creatig new versions of printNumber()
}

printNumber(1); //let i = 1
//------------------------------------------------------
console.log("//--------------------------------------");

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + 1;
}
console.log(sum);

console.log("//--------------------Recursion------------------");

function sumNumbersBelow(number) {
  // i <= 0   <--- reducing default value 4 until there is only 0 remaining
  if (number <= 0) {
    return 0;
  }
  // i--
  return number + sumNumbersBelow(number - 1); // 4 + (3 + (2 + 1))  <== 4 --> (4-1)=3 --> ((4-1)-1)=2 --> (((4-1)-1)-1)=1 --> ((((4-1)-1)-1) -1)=0
}

console.log(sumNumbersBelow(4)); // let i = 4   <-- default-value
