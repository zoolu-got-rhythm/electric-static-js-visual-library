// make module pattern

// rename this to copy
var arrayOfPointsCopy = function(from){
    var arr = [];
    from.forEach(function(point){
        arr.push(new Point(point.x, point.y));
    });
    return arr;
}