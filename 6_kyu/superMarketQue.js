/*
link to problem: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.


Understand the Problem:

1. Each customer takes a unique amount of time at the checkout till
2. The first person on in the que needs to go to next available till
3. the 2nd argument passed into the function queueTime represents the number of ques available for use
4. Need to return the time required to checkout all customers in the input array


Examples:

queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12


datastructures:

an object where the key in the object represents the till and the value is another object containing the  time remaining to finish checking
out the customer at that till and the index of that customer


{
    1: timeRemaining,
    2: timeRemaining
}


Algorithm:

1. Declare and initialize object with the name TIME_REMAINING_ON_TILL, where key is the number representing the till
and value is the time remaining at that till.
2. Fill the object and set the objects to default values
3. If a till is available:
    -> Shift() the input array.
    -> assign timeRemaining to an open till
4. else:
    -> continue removing timeRemaining



*/



function queueTime(line, numOfTills) {
    const TIME_REMAINING_ON_TILL= {};
    initializeTills(TIME_REMAINING_ON_TILL, numOfTills);
    let totalTime = 0;

    while (!isServiceOver(line, TIME_REMAINING_ON_TILL)) {
        for (till = 1; till <= numOfTills; till += 1) {
            if (isTillAvailable(TIME_REMAINING_ON_TILL, till) && line.length !== 0) {
                TIME_REMAINING_ON_TILL[till] = line.shift();
            }
        }
        minuteOfService(TIME_REMAINING_ON_TILL, numOfTills);
        totalTime += 1;

    }
    return totalTime;
}

function initializeTills(obj, numOfTills) {
    for (idx = 1; idx <= numOfTills; idx += 1) {
        obj[idx] = 0;
    }
}

function isTillAvailable(obj, till) {
    return (!obj[till])
    
}

function minuteOfService(obj, numOfTills) {
    for (idx = 1; idx <= numOfTills; idx += 1) {
        if (obj[idx]) {
            obj[idx] -= 1;
        }
    }
}

function isServiceOver(line, obj) {
    let openTillNum = Object.keys(obj).filter((till) => obj[till] === 0).length;
    return ((openTillNum === Object.keys(obj).length) && line.length === 0);
}




console.log(queueTime([5,3,4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2));
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

console.log(queueTime([2,3,10], 2));
// // should return 12