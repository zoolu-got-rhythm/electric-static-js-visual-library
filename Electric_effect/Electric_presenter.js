/**
 * Created by Slime on 05/09/2017.
 */
function Electric_presenter(canvas, colour, lineWidth){
    this.ctx = canvas.getContext("2d");
    this.colour = colour || "#555";
    this.lineWidth = lineWidth || 2;
}

// draw 

Electric_presenter.prototype.update = function(electric_static_state){
    this.wipe();
    this.ctx.beginPath();
    var self = this;
    electric_static_state.points.forEach(function(point){
        self.ctx.lineTo(point.x, point.y);
    }); 

    this.ctx.strokeStyle = this.colour;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
}

Electric_presenter.prototype.wipe = function(){
    this.ctx.clearRect(0, 0, 400, 200);
}





// var observer = new Observer();
// var presentation = new Electric_presenter(null, null);
// presentation.__proto__ = observer;
// presentation.test();
//
// console.log(presentation instanceof Observer);
// console.log(presentation.hasOwnProperty("update"));
