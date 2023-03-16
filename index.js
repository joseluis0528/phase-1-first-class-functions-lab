// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    const newArr = array.slice(0, 2);
    return newArr; 
}

const returnLastTwoDrivers = function(array) {
    const newArr = array.slice(2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(){
        return int * int;
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(array, drivers) {
    if (drivers === returnFirstTwoDrivers) {
        return array.slice(0,2);
    } else if (drivers === returnLastTwoDrivers) {
        return array.slice(2);
    }
}