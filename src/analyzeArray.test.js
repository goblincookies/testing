const analyzeArray = require( './analyzeArray' );


describe( 'analyze Array test', () => {

    let result = {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: 0
    };

    // SIMPLE ARRAY
    test( '[4,4,4,4] is accepted and returns 4s', () => {
        result = {
            average: 4,
            min: 4,
            max: 4,
            length: 4
        };
        expect( analyzeArray( [4,4,4,4] ) ).toEqual( result )
    });

    // DIFFERENT VALUES ARE HANDLED
    test( '[1,5,9,99,0] > {22.8,0,99,5}', () => {
        result = {
            average: 22.8,
            min: 0,
            max: 99,
            length: 5
        };
        expect( analyzeArray( [1,5,9,99,0] ) ).toEqual( result )
    });

    // NON NUMBERS
    test( '[1,5,tree,&&,0] > { Null }', () => {
        result = {
            average: 0,
            min: Infinity,
            max: -Infinity,
            length: 0
        };
        expect( analyzeArray( [1,5,'tree','&&',0] ) ).toEqual( result )
    });

    // PRECISION TEST
    test( '[1.223,4.58,-99.15,4,0.2] > {-17.8294,-99.15,4.58,5 }', () => {
        result = {
            average: -17.8294,
            min: -99.15,
            max: 4.58,
            length: 5
        };
        expect( analyzeArray( [1.223,4.58,-99.15,4,0.2] ) ).toEqual( result )
    });

    // HANDLES SINGLE DIGIT
    test( '5 > {}', () => {
        result = {
            average: 0,
            min: Infinity,
            max: -Infinity,
            length: 0
        };
        expect( analyzeArray( 5 ) ).toEqual( result )
    });

    // HANDLES SINGLE EMPTY ARRAY
    test( '[] > {}', () => {
        result = {
            average: 0,
            min: Infinity,
            max: -Infinity,
            length: 0
        };
        expect( analyzeArray( 5 ) ).toEqual( result )
    });

    // HANDLES SINGLE ELEMENT ARRAY
    test( '[1] > {}', () => {
        result = {
            average: 1,
            min: 1,
            max: 1,
            length: 1
        };
        expect( analyzeArray( [1] ) ).toEqual( result )
    });

});