/**
 * Created by Slime on 05/09/2017.
 */

(function(){

    // setup
    function setup(arg){
        // the object Electric handles undefined value argument already
        return new Electric(arg);
    }

    // teardown


    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test("points length 0", function( assert ){
        var elec_static_state = setup();
        var expected = 0;
        var actual = elec_static_state.points.length;
        console.log("actual " + actual);
        assert.equal(actual, expected, "points array is 0 length");
    });

    QUnit.test("points length 2", function( assert ){
        var elec_static_state = setup([new Point(1,1), new Point(4,4)]);
        console.log(elec_static_state.points);
        var expected = 2;
        var actual = elec_static_state.points.length;
        console.log("actual " + actual);
        assert.equal(actual, expected, "points array is 2 length");
    });
    
    
    // bug with test? 
    QUnit.test("Electric.stateChangeX and Y", function( assert ){
        var dataSet = [];
        dataSet.push(new Point(5, 2));
        dataSet.push(new Point(7, 3));
        var dataSetCopy = dataSet.slice(0); // copy array to new reference
        console.log("copy");
        console.log(dataSetCopy);
        // check original

        (function(){
            for(var i = 0; i < dataSet.length; i++){
                console.log("running");
                console.log(dataSet[i].getX());
                console.log(dataSet);
                assert.equal(dataSet[i].x, dataSetCopy[i].x, "check copy'data val's x are same");
                assert.equal(dataSet[i].y, dataSetCopy[i].y, "check copy'data val's y are same");
            }
        })();

        // check copy to new reference properly
        assert.ok(dataSet != dataSetCopy, "make sure copy is of different reference to original dataset");

        console.log("running here");


        var elec_static_state = setup(dataSetCopy);
        console.log(elec_static_state);
        elec_static_state.changeXState();
        (function(){
            for(var i = 0; i < dataSet.length; i++){
                console.log("running");
                console.log(dataSet);
                console.log("sadf x  " + dataSet[i].getX());
                console.log("sadf y " + dataSet[i].getY());
                assert.ok(dataSet[i].getX() !== elec_static_state.points[i].getX(), "check x state change");
                assert.ok(dataSet[i].getY() !== elec_static_state.points[i].getY(), "check y state change");
            }
        }());
    });

    QUnit.test("test state change between certain tolerance", function( assert ){
        // var elec_static_state = setup([new Point(1,1), new Point(4,4)]);
        // var expected = 2;
        // var actual = elec_static_state.points.length;
        // console.log("actual " + actual);
        // assert.equal(actual, expected, "test state change between certain tolerance");
    });



    //QUnit.test()
})();

