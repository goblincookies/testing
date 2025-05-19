const Calculator = require( './calculator.js' );


describe( 'Calc test: add', () => {
    calc = new Calculator();
    // ADD
    test( '1 + 2 = 3', () => {
        expect( calc.add( 1, 2 ) ).toBe( 3 );
    });

    test( '-5 + 2 = -3', () => {
        expect( calc.add( 1, 2 ) ).toBe( 3 );
    });

    test( 'TEXT tree + 2 = null', () => {
        expect( calc.add( 'tree', 2 ) ).toBe( null );
    });

    test( 'FLOATS: 1.3 + 2.1 = 3.4', () => {
        expect( calc.add( 1.3, 2.1 ) ).toBe( 3.4 );
    });
});


describe( 'Calc test: subtact', () => {
    calc = new Calculator();

    // SUBTRACT
    test( '3 - 2 = 1', () => {
        expect( calc.subtract( 3, 2 ) ).toBe( 1 );
    });

    test( 'TEXT tree - 2 = null', () => {
        expect( calc.subtract( 'tree', 2 ) ).toBe( null );
    });

    test( 'FLOATS: 2.1 - 1.3 = 0.8', () => {
        expect( calc.subtract( 2.1, 1.3 ) ).toBe( 0.8 );
    });

});

describe( 'Calc test: divide', () => {
    calc = new Calculator();
    // DIVIDE
    test( '6 / 3 = 2', () => {
        expect( calc.divide( 6, 3 ) ).toBe( 2 );
    });

    test( 'TEXT tree - 2 = null', () => {
        expect( calc.divide( 'tree', 2 ) ).toBe( null );
    });

    test( 'FLOATS: 2.1 / 1.3 = 0.8', () => {
        expect( calc.divide( 2.1, 1.3 ) ).toBe( 1.61538462 );
    });

});

describe( 'Calc test: multiply', () => {
    calc = new Calculator();
    // DIVIDE
    test( '2 * 3 = 6', () => {
        expect( calc.multiply( 2, 3 ) ).toBe( 6 );
    });

    test( 'TEXT tree * 2 = null', () => {
        expect( calc.multiply( 'tree', 2 ) ).toBe( null );
    });

    test( 'FLOATS: 2.1 - 1.3 = 0.8', () => {
        expect( calc.multiply( 2.1, 1.3 ) ).toBe( 2.73 );
    });

});
