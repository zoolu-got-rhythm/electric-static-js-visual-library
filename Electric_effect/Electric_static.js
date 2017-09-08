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
// open to extention closed to modification
function Electric(points, xTollorance, yTollorance){
    this.xTollorance = 0;
    this.yTollorance = 30; // works with even values: may work with non-even(is an edge case)
    this.points = points;
    this.pointsOriginal = arrayOfPointsCopy(points);
    this.observers = []; 
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
            //console.log("calcing");
        }while(n > ((self.pointsOriginal[i].y) + (self.yTollorance / 2)) || n < ((self.pointsOriginal[i].y) - (self.yTollorance / 2)));
        point.y = n;
    });
    
    // this won't work unless Observable is extended
    this.notifyObservers();
};

Electric.prototype.notifyObservers = function(){
    if(this.observers.length >= 1){
        console.log("notifying observers and parsing " + this);
        this.notify(this);
    }
};

Electric.prototype.notify = function(){
    this.observers.forEach(function(observer){
        observer.update(this); // pass reference of observable obj to observer 
    })
}; 


Electric.prototype.addObserver = function(observer){
    this.observers.push(observer);
}



// change y state




// electric drawer


