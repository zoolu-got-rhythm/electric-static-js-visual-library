/**
 * Created by Slime on 05/09/2017.
 */

function Observer(){}

Observer.prototype.test = function(){console.log("test")};

Observer.prototype.update = function(observable){
    console.log("observing object: " + observable);
};
