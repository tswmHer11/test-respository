// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log(ages[ages.length - 1] - ages[0]); // last age minus first age. should print 90.

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(36);  //add 36 to ages array.
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]); // last value - first value. shoulg print 33.

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sumOfArray = 0;
for (i = 0; i < ages.length; i++) {
    sumOfArray += ages[i];  //Add the value in each index incrementing from 0 to length of array.
}
console.log(sumOfArray);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let sumOfNameLength = 0;    //create new array with element length from names array.
let averageNameLength = 0;
for (i = 0; i < names.length; i++) {    // Use loop to sum namelength array.
    sumOfNameLength += names[i].length;  // Add name lengths together.
    averageNameLength = (sumOfNameLength / names.length);   //Calculate average of lengthOfName.

} console.log(averageNameLength.toFixed(2));    // Average of nameLength array to 2 decimal places.

// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let newNames = "" // Create new string.
for (i = 0; i < names.length; i++) {
    newNames = newNames.concat(names[i] + " "); //Concat element of names array with spaces between elements.
} console.log(newNames);

// Questions 3-13
// 3.	How do you access the last element of any array?
//   From the array you can use array[array.length - 1] to reach the last element with n elements.

// 4.	How do you access the first element of any array?
//   From the array you can use array[0] because 0 is the first position in any array.

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
var namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
var nameLengths = [];
for (i = 0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length); // Push iteration into an array.
    if (namesArray.length == nameLengths.length) {   //Shows just the last iteration of the loop.
        console.log(nameLengths);
    } else { };
}

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let averageNameLengths = [];
for (i = 0; i < nameLengths.length; i++) {
    averageNameLengths = (nameLengths[i].length / nameLengths); //Calculate average name lengths.

} console.log(averageNameLength.toFixed(2));

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let concateNWords = "";
function wordFunction(word, n) {
    for (i = 0; i < n; i++) {
        concateNWords += word;
    } console.log(concateNWords);

} wordFunction("Hello", 3);

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    return (firstName + " " + lastName);
} console.log(fullName("Peter", "Rabbit"));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let sumOfNumbers = 0;
let numbersArray = [23, 8, 34, 12, 3, 17];
for (let num of numbersArray) {
    sumOfNumbers += num;
} if (sumOfNumbers > 100) {
    console.log(true);
} else {
    console.log(false);
}
console.log(sumOfNumbers);

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let averageOfArray = 0;
for (let num of numbersArray) {
    // sumOfNumbers += num; //Since I copied the previous code, I don't need to repeat this line again.
    averageOfArray = sumOfNumbers / numbersArray.length;

}
console.log(averageOfArray.toFixed(2));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
var numArray1 = [23, 8, 34, 12, 3, 17];
var numArray2 = [43, 10, 7, 11, 29, 21];
var sumOfArray1 = 0;
var sumOfArray2 = 0;
var averageOfArray1 = 0;
var averageOfArray2 = 0;
function compareAverages(array1, array2) {
    for (let num of numArray1) {
        sumOfArray1 += num;
        averageOfArray1 = sumOfArray1 / numArray1.length;   //Average of numArray1
    } console.log(averageOfArray1.toFixed(2));
    for (let num of numArray2) {
        sumOfArray2 += num;
        averageOfArray2 = sumOfArray2 / numArray2.length;   //Average of numArray2
    } console.log(averageOfArray2.toFixed(2));
    if (averageOfArray1 > averageOfArray2) { //Conditon true/false if average of 1 greater than 2.
        console.log(true);
    } else {
        console.log(false);
    }
} console.log(compareAverages(numArray1, numArray2));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPocket > 10.50) {  // Two conditions need to be met for true/false result.
        console.log(true);
    } else {
        console.log(false);
    }
} willBuyDrink(true, 10.51);

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
let timeoutLength = 0;
function kidsTimeoutTime(isChildBad, ageOfChild){
    if (isChildBad == true && ageOfChild <= 5){
        timeoutLength = ageOfChild;
        console.log("Give child " + timeoutLength + " minute(s) in timeout.");
    }else if (isChildBad == true && ageOfChild <= 10){
        timeoutLength = 5;
        console.log("Give child " + timeoutLength + " minute(s) in timeout.");
    }else if (isChildBad == true && ageOfChild <= 17){
        console.log("Child needs a therapist. :)");
    }else if (isChildBad == false && ageOfChild <= 17){
        console.log("The child is behaving well.");
    }else if (isChildBad = false || ageOfChild >= 18){
        console.log("You are no longer a Child.");
    }
}kidsTimeoutTime(true, 56);
