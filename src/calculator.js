// A CALCULATOR OBJECT THAT CONTAINS A FUNCTION FOR
// THE BASIC OPERATIONS: ADD, SUBTRACT, DIVIDE, MULTIPLY
// EACH OF THESE FUNCTIONS SHOULD TAKE TWO NUMBERS AND
// RETURN THE CORRECT CALCULATION

const { verify } = require("crypto");

class Calculator {

    floatPrecision = 9;

    // VERIFIES BOTH ARE NUMBERS
    verify( a, b ){ return ( typeof a == 'number' && typeof b == 'number' ) };

    // TURNS 3.400000000001 >> 3.4
    floatRounding( v ) { return parseFloat( v.toPrecision( this.floatPrecision ) ) };

    // STANDARD ERROR MESSAGE
    error(){
        console.log( 'not numbers' );
        return null;  
    };

    add( a, b ){
        if( this.verify( a, b ) ) { return this.floatRounding( a + b) };
        return this.error();
    };

    subtract( a, b ){
        if( this.verify( a, b ) ) { return this.floatRounding( a - b ) };
        return this.error();
    };

    divide( a, b ){
        if( this.verify( a, b ) ) { return this.floatRounding( a / b ) };
        return this.error();
    };

    multiply( a, b ){
        if( this.verify( a, b ) ) { return this.floatRounding( a * b ) };

        return this.error();
    };
};

module.exports = Calculator ;
