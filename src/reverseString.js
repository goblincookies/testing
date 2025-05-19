function reverseString( val ) {
    if ( typeof val != 'string' ) { return val; }
    val = val.split( '' ).reverse( ).join( '' );
    return val;
};


module.exports = reverseString;