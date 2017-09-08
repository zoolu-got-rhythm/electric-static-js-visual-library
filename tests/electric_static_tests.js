/**
 * Created by Slime on 05/09/2017.
 */

(function(){

    // setup
    function setup(arg){
        return new Electric(arg);
    }

    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
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
    QUnit.test("Electric.stateChangeY", function( assert ){
        var dataSet = [];
        dataSet.push(new Point(5, 50));

        var elec_static_state = setup(dataSet);

        // count how many times a diff value is created from original
        var notmatches = 0;
        (function(n){
            for(var j = 0; j <= n; j++){

                // exercise
                elec_static_state.changeYState();

                for(var i = 0; i < dataSet.length; i++){
                    if(elec_static_state.pointsOriginal[i].y !== elec_static_state.points[i].y){
                        notmatches++;
                    }
                }
            }

        }(20));
        assert.ok(notmatches > 10 , "passed");
    });

    QUnit.test("test y state change between certain tolerance", function( assert ){
        var dataSet = [];
        dataSet.push(new Point(5, 50));
        dataSet.push(new Point(7, 50));

        var elec_static_state = setup(dataSet);
        for(var i = 0; i <= 50; i++){
            elec_static_state.changeYState();
            elec_static_state.points.forEach(function(point){
                assert.ok(point.y <= 55 && point.y >= 45, "y state change is between certain tolerance");
            });
        }

    });

})();

