/**
 * Created by Slime on 05/09/2017.
 */




// electric controller responsibility?
function ElectricController(electric_models, speed){
    this.playing = false;
    this.speed = speed || 200;
    this.models = electric_models;
    this.playerId = null;
}

ElectricController.prototype.play = function(delay){
    var self = this;
    if(this.playing == false){
        this.playing = true;
        this.playerId = window.setInterval(function () {
            console.log(self.models);
            self.models.forEach(function(model){
                console.log(model); 
                model.changeYState(); 
            }); 
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
