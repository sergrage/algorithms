function filler (x, y) {
    if(!isEmpty(x, y)) {return;}
    setMap(x,y,2);
    filler(x-1, y);
    filler(x+1, y);
    filler(x, y-1);
    filler(x, y+1);
}


function isEmpty(x, y) {

}


function setMap(x, y, color) {

}
