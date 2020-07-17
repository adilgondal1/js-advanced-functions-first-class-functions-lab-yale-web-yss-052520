// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    return [drivers[0],drivers[1]]
}

function returnLastTwoDrivers(drivers){
    return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (fare){return fare*num}
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers,func){
    return func(drivers)
}