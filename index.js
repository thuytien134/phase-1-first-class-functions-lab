// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){return drivers.slice(0,2)}
const returnLastTwoDrivers =function(drivers){return drivers.slice(2,4)}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(x){return function(fare){return 5*fare}}
const fareDoubler = function(fare){return fare*2}
const fareTripler = function(fare){return fare*3}
function selectDifferentDrivers(drivers,y){
    if ( y === returnFirstTwoDrivers) {return drivers.slice(0,2)}
    if ( y === returnLastTwoDrivers) { return drivers.slice(2,4)}
    }
// function selectDifferentDrivers(drivers,returnLastTwoDrivers){return drivers.slice(2,4)}