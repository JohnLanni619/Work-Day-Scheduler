var rightNow = moment().format('MMMM Do, YYYY');
document.getElementById("currentDay").innerHTML = rightNow
var now = moment()
var currentHour = now.get('hour');

console.log(currentHour);
console.log(rightNow);

// Updating hours relative to current hour 
if (9 < currentHour) {
    $( "#9am" ).removeClass( "present future" ).addClass("past");
} else if (9 === currentHour) {
    $( "#9am" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#9am" ).removeClass( "present past" ).addClass( "future" );
}

if (10 < currentHour) {
    $( "#10am" ).removeClass( "present future" ).addClass("past");
} else if (10 === currentHour) {
    $( "#10am" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#10am" ).removeClass( "present past" ).addClass( "future" );
}

if (11 < currentHour) {
    $( "#11am" ).removeClass( "present future" ).addClass("past");
} else if (11 === currentHour) {
    $( "#11am" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#11am" ).removeClass( "present past" ).addClass( "future" );
}

if (12 < currentHour) {
    $( "#12pm" ).removeClass( "present future" ).addClass("past");
} else if (12 === currentHour) {
    $( "#12pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#12pm" ).removeClass( "present past" ).addClass( "future" );
}

if (13 < currentHour) {
    $( "#1pm" ).removeClass( "present future" ).addClass("past");
} else if (13 === currentHour) {
    $( "#1pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#1pm" ).removeClass( "present past" ).addClass( "future" );
}

if (14 < currentHour) {
    $( "#2pm" ).removeClass( "present future" ).addClass("past");
} else if (14 === currentHour) {
    $( "#2pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#2pm" ).removeClass( "present past" ).addClass( "future" );
}

if (15 < currentHour) {
    $( "#3pm" ).removeClass( "present future" ).addClass("past");
} else if (15 === currentHour) {
    $( "#3pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#3pm" ).removeClass( "present past" ).addClass( "future" );
}

if (16 < currentHour) {
    $( "#4pm" ).removeClass( "present future" ).addClass("past");
} else if (16 === currentHour) {
    $( "#4pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#4pm" ).removeClass( "present past" ).addClass( "future" );
}

if (17 < currentHour) {
    $( "#5pm" ).removeClass( "present future" ).addClass("past");
} else if (17 === currentHour) {
    $( "#5pm" ).removeClass( "past future" ).addClass( "present" );
} else {
    $( "#5pm" ).removeClass( "present past" ).addClass( "future" );
}

// Create function for saving textarea data in local storage when clicking the save button 
var saveTasks = function(event) {
    var userInfo = $(event.target).siblings("textarea").attr("id");

    var userText = $(event.target).siblings("textarea").val();

    localStorage.setItem(userInfo, userText);
    
    console.log(userInfo);
    console.log(userText);
}

$(".saveBtn").on("click", saveTasks);

function getStorage() {
    $("#9am").text(localStorage.getItem("9am"));
    $("#10am").text(localStorage.getItem("10am"));
    $("#11am").text(localStorage.getItem("11am"));
    $("#12pm").text(localStorage.getItem("12pm"));
    $("#1pm").text(localStorage.getItem("1pm"));
    $("#2pm").text(localStorage.getItem("2pm"));
    $("#3pm").text(localStorage.getItem("3pm"));
    $("#4pm").text(localStorage.getItem("4pm"));
    $("#5pm").text(localStorage.getItem("5pm"));
  }
  getStorage();