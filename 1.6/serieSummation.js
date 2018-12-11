function sumSerie() {
    var acu = 0;
    for(var i = 1; i <= 9; i++){
        acu += i;
    }
    document.write('<p>' + acu +'</p>');
}
sumSerie();