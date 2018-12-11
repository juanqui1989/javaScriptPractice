
//this shows a message for console, press f12 in mozilla and serach console to see it
console.log("welcome to java " + "\n"  +
                       "welcome to computer science" + "\n" +
                       "programming is fun");
// this changes the DOM 
document.write('<p>' + "Welcome to java" + '<br>' +
                        "welcome to computer science" + '<br>' +
                        "programing is fun" + '</p>')


//document ready says wait until the html renders, all the jquery code go inside there
$(document).ready(function(){
    //this look for the dom's body and append with we pass for parameter
    $("body").append("Welcome to java"  + "<br>" +
                       "welcome to computer science" + "<br>" +
                       "programing is fun");
})                     