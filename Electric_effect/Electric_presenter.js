/**
 * Created by Slime on 05/09/2017.
 */

// make singleton
function Electric_presenter(canvas){
    this.clients = [];
    this.clientCalls = 0; 
    this.ctx = canvas.getContext("2d");
    
}

// draw 

Electric_presenter.prototype.update = function(electric_static_state){
    if(this.clientCalls === this.clients.length){
        console.log(this.clientCalls);
        this.clientCalls = 0;

        this.wipe();
    }

    this.ctx.beginPath();
    var self = this;
    
    electric_static_state.points.forEach(function(point){
        self.ctx.lineTo(point.x, point.y);
    });


    console.log("present painting color: " +  electric_static_state.getColour());
    this.ctx.strokeStyle = electric_static_state.getColour();
    this.ctx.lineWidth = electric_static_state.getLineWidth();

    
    this.ctx.stroke();

    this.clientCalls++;

    
};

Electric_presenter.prototype.wipe = function(){
    this.ctx.clearRect(0, 0, 400, 200);
};

Electric_presenter.prototype.addClient = function(electricClient){
    this.clients.push(electricClient);
};





// var observer = new Observer();
// var presentation = new Electric_presenter(null, null);
// presentation.__proto__ = observer;
// presentation.test();
//
// console.log(presentation instanceof Observer);
// console.log(presentation.hasOwnProperty("update"));
