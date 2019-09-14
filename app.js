// instantiate objects

// wire up objects


var canvas = document.getElementById("test");

var playBtn = document.getElementById("btn1");
var stopBtn = document.getElementById("btn2");

var dataSet = [];
// helper for adding points to dataset
(function(stopAt, incrementBy, func){
    for(var i = incrementBy; i <= stopAt; i += incrementBy){
        func(i);
    }
})(20, 5, function(i){
    dataSet.push(new Point(i, 50));
});

console.log(dataSet);

var points = [new Point(5, 50),
    new Point(10, 50),
    new Point(15, 50),
    new Point(20, 50),
    new Point(25, 50),
    new Point(30, 50),
    new Point(35, 50),
    new Point(40, 50),
    new Point(45, 50),
    new Point(50, 50),
    new Point(55, 50),
    new Point(60, 50),
    new Point(65, 50),
    new Point(70, 50),
    new Point(75, 50),
    new Point(80, 50),
    new Point(85, 50),
    new Point(90, 50)
  ];
console.log(points);
var electricModel1 = new Electric(points, "#cb42f4", 3);
var electricModel2 = new Electric(arrayOfPointsCopy(points), "#f49ceb", 2);

var electricModels = [electricModel1, electricModel2];

var elecController = new ElectricController(electricModels, 20);
var electricView = new Electric_presenter(canvas);
// var elecricView2 = new Electric_presenter(canvas, "green", 1);


// var observer = new Observer();
// var observable = new Observable();
// electricView.__proto__.prototype = observer;
// electricModel.__proto__ = observable;
//
electricModel1.addObserver(electricView);
electricModel2.addObserver(electricView);
// electricModel.addObserver(elecricView2);

elecController.play();

console.log(playBtn);
playBtn.addEventListener("click", () => {
    console.log("play");
    elecController.play();
}, false);

stopBtn.addEventListener("click", function(){
    elecController.stop();
})

// elecController.stop();
// elecController.play();
