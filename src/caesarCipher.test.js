const Cipher = require( './caesarCipher' );


describe( 'cipher ENCODE test', () => {
    cipher = new Cipher();

    // TESTS BASIC MESSAGE
    test( 'HeLLo (3) >> Khoor', () => {
        expect( cipher.encode( 'Hello', 3 ) ).toBe( 'Khoor' );
    });

    // IGNORES PUNCTUATION AND SYMBOLS
    test( 'Wor%6!ld (3) >> Zru%6!og', () => {
        expect( cipher.encode( 'Wor%6!ld', 3 ) ).toBe( 'Zru%6!og' );
    });

    // WRAPS AROUND
    test( 'XYZ (5) >> CDE', () => {
        expect( cipher.encode( 'XYZ', 5 ) ).toBe( 'CDE' );
    });

    // FULL WRAP
    test( 'Hello (26) >> Khoor', () => {
        expect( cipher.encode( 'Hello', 26 ) ).toBe( 'Hello' );
    });

    // HUGE WRAP
    test( 'Hello (54) >> Jgnnq', () => {
        expect( cipher.encode( 'Hello', 54 ) ).toBe( 'Jgnnq' );
    });

    // NEGATICE WRAP
    test( 'Hello (-15) >> Spwwz', () => {
        expect( cipher.encode( 'Hello', -15 ) ).toBe( 'Spwwz' );
    });

});


describe( 'cipher DECODE test', () => {
    cipher = new Cipher();

    // TESTS BASIC MESSAGE
    test( 'Khoor (3) >> Hello', () => {
        expect( cipher.decode( 'Khoor', 3 )) .toBe( 'Hello' );
    });

    // IGNORES PUNCTUATION AND SYMBOLS
    test( 'Zru%6!og (3) >> Wor%6!ld', () => {
        expect( cipher.decode( 'Zru%6!og', 3 ) ).toBe( 'Wor%6!ld' );
    });

    // WRAPS AROUND
    test( 'CDE (5) >> XYZ', () => {
        expect( cipher.decode( 'CDE', 5 ) ).toBe( 'XYZ' );
    });

    // FULL WRAP
    test( 'Hello (26) >> Hello', () => {
        expect( cipher.decode( 'Hello', 26 ) ).toBe( 'Hello' );
    });

    // HUGE WRAP
    test( 'Jgnnq (54) >> Hello', () => {
        expect( cipher.decode( 'Jgnnq', 54 ) ).toBe( 'Hello' );
    });

    // NEGATICE WRAP
    test( 'Spwwz (-15) >> Hello', () => {
        expect( cipher.decode( 'Spwwz', -15 ) ).toBe( 'Hello' );
    });

});