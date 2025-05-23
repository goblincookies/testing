const capitalize = require( './capitalize' );


// A CAPITALIZE FUNCTION THAT TAKES A STRING AND
// RETURNS IT WITH THE FIRST CHARACTER CAPITALIZED
test( 'CAP: hello returns Hello', () => {
    expect( capitalize( 'hello' ) ).toBe( 'Hello' );
});

test( 'CAP: empty string', () => {
    expect( capitalize( '' ) ).toBe( '' );
});

test( 'CAP: numbers return original', () => {
    expect( capitalize( 78 ) ).toBe( 78 );
});

test( 'World returns World', () => {
    expect( capitalize( 'World' ) ).toBe( 'World' );
});

test( 'leading noncharacters are handled', () => {
    expect( capitalize( '23 plane' ) ).toBe( '23 plane' );
});