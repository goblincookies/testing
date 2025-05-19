const reverseString = require( './reverseString' );


// A REVERSESTRING FUNCTION THAT TAKES
// A STRING AND RETURNS IT REVERSED
test( 'hello becomes olleh', () => {
    expect( reverseString( 'hello' ) ).toBe( 'olleh' );
});

test( 'handles an empty string', () => {
    expect( reverseString( '' ) ).toBe( '' );
});

test( 'numbers return original', () => {
    expect( reverseString( 125 ) ).toBe( 125 );
});