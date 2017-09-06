/**
 * Created by Slime on 05/09/2017.
 */
// observer pattern implementation, extend this on observable model objects
function Observable(){
    //this.observers = []; // add to prototype
}

Observable.prototype.observers = []; 

Observable.prototype.notify = function(){
    if(this instanceof Observable){ // not needed
        //if(this.observers.length != 0) // not needed
            this.observers.forEach(function(observer){
                if(observer instanceof Observer)
                    observer.update(this); // pass reference of observable obj to observer 
            })
    }
}

Observable.prototype.addObserver = function(observer){
    this.observers.push(observer);
}