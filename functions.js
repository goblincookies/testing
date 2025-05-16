
function capitalize( val ) {
    if ( typeof val != 'string' ) { return val; }
    val = val.charAt( 0 ).toUpperCase() + val.slice(1);
    return val;
};


module.exports = { capitalize };
