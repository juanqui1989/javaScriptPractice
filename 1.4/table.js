//.ready to init the script after the page load
$(document).ready(function(){
    $(":button").on("click",() => {
    // the var list reference each element with the class second
    var list = $(".second")
    // change into integer each element of the list
    parseInt(list.html())
    list.each(function(x,e){
        var e = $(this).text()
        $(this).text(e*e)
    })
    
})
})                   