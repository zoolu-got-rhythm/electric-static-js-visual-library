/**
 * Created by Slime on 05/09/2017.
 */




// electric controller responsibility?
function ElectricController(electric_model, speed){
    this.playing = false;
    this.speed = speed || 200;
    this.model = electric_model;
    this.playerId = null;
}

ElectricController.prototype.play = function(delay){
    var self = this;
    if(this.playing == false){
        this.playing = true;
        this.playerId = window.setInterval(function () {
            console.log(self.model);
            self.model.changeYState();
            // this.model.changeYState();
        }, this.speed);
    }
};

ElectricController.prototype.stop = function(delay){
    if(this.playing == true){
        this.playing = false;
        window.clearInterval(this.playerId);
    }
};

// play
// stop
// increaseVoltage
// decreaseVoltage
