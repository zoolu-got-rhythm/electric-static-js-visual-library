/**
 * Created by Slime on 04/09/2017.
 */

// var c = document.getElementById("test");
// var ctx = c.getContext("2d");
//
// ctx.background = "#eee";
// ctx.fillRect(20, 20, 40, 40);


// helper for adding points to dataset
// (function(stopAt, incrementBy, func){
//     for(var i = 0; i <= n; i += incrementBy){
//         func(i);
//     }
// })(50, 5, function(i){
//     dataset.push(new Point(i, 100));
// });
//
// var dataset = [];

// model
function Electric(points){
    this.xTollorance = 0;
    this.yTollorance = 10; // works with even values: may work with non-even(is an edge case)
    this.points = points;
    this.pointsOriginal = [];
    this.init();
}

// rename this to copy
Electric.prototype.init = function(){
    var self = this;
    this.points.forEach(function(point){
        self.pointsOriginal.push(new Point(point.x, point.y));
    })
}


// Electric.prototype.changeXState = function(){
//     this.points.forEach(function(point){
//         point.setX( // mathematic expression
//             (point.getX = point.getX - this.xTollorance / 2) +
//             Math.round(Math.random() * this.xTollorance)
//         );
//     })
// };

Electric.prototype.changeYState = function(){
    var self = this;
    this.points.forEach(function(point, i, arr){

        var n = 0;
        do {
            n = point.y - (self.yTollorance / 2) +
                Math.round(Math.random() * self.yTollorance);
            // console.log(n);
            // console.log(self.pointsOriginal[i].y);
            // console.log(((self.pointsOriginal[i].y) - (self.yTollorance / 2)));

            console.log("calcing");
        }while(n > ((self.pointsOriginal[i].y) + (self.yTollorance / 2)) || n < ((self.pointsOriginal[i].y) - (self.yTollorance / 2)));
        point.y = n;

        console.log(point.y);
        console.log(i);
    });
    // this.notify(this);
};


console.log("point array test");
var el = new Electric([new Point(5, 50), new Point(10, 50), new Point(15, 50)]);
console.log(el);

for(var i = 0; i < 10; i++) {
    el.changeYState();
    console.log(el);
    console.log(el.pointsOriginal)
}



// change y state




// electric drawer


