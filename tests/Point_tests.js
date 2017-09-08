/**
 * Created by Slime on 05/09/2017.
 */

QUnit.test( "Point.x", function( assert ) {
    var p = new Point(5, 4);
    assert.ok( p.x === 5, "Passed!" );
});

QUnit.test( "Point.y", function( assert ) {
    var p = new Point(5, 4);
    assert.ok( p.y === 4, "Passed!" );
});
