// How do I add the current day and time to the top? 
var rightNow = moment().format('MMMM Do, YYYY');
console.log(rightNow);

document.getElementById("currentDay").innerHTML = rightNow