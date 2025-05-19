function analyzeArray( arr ) {

    // STRUCTURE FOR RETURNED RESULT
    let result = {
        average: 0,
        min: Infinity,
        max: -Infinity,
        length: 0
    };

    // RETURN IF NOT AN ARRAY / EMPTY
    if( !arr?.length > 0 ) { return result };

    // RETURN IF NOT ALL NUMBERS
    for ( let i = 0; i < arr.length; i++ ) {
        if ( typeof arr[ i ] != 'number' ) {
            console.log(arr[i], 'is not a number')
            return result;
        };
    };

    // GET LENGTH
    result.length = arr.length;

    // CALCULATE MIN / MAX / SUM FOR AVERAGE
    for ( let i = 0; i < arr.length; i++ ) {
        result.min = Math.min( arr[ i ], result.min );
        result.max = Math.max( arr[ i ], result.max );
        result.average += arr[ i ];
    };

    // CALCULATE AVERAGE
    result.average /= arr.length;

    // ROUND IMPRECISE FLOATS
    result.average = floatRounding( result.average );
    return result;
};

// TURNS 3.400000000001 >> 3.4
function floatRounding( v ) { return parseFloat( v.toPrecision( this.floatPrecision ) ) };

module.exports = analyzeArray;