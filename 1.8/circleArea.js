/*
$(document).ready(function(){
    //this is the most basic way to ask for an input using javascript
    var radius = prompt("input the radius");
    $("#result").html(perimeter(radius));
    function perimeter(radius) {
        return 2 * radius * Math.PI;
    }
})                     
*/

$(document).ready(function(){
    //this is a cooler way to ask for input with forms and jquery
    //we need to use the val() in order to get the value that the user input
    var radius = parseFloat($("#radius").val());
    // we use the function on() to call the function after an event
    $("#result").on("click",function() {
        $("#outputPerimeter").html("the perimeter of " + radius + " is: " + perimeter(radius));
        $("#outputArea").html("the area of " + radius + " is: " + area(radius));
    });
    //when the user clik on the button with the refresh id the page refreshes and we can call
    //the function again 
    $('#refresh').on("click",function() {
    location.reload();
});
    // this is our little function to get the perimeter
    function perimeter(radius) {
        return 2 * radius * Math.PI;
    }
    function area(radius) {
        return radius * radius * Math.PI;
    }
})                     