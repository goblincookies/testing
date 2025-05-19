const { match } = require("assert");

class Cipher {

    upper = [ 65,26 ];
    lower = [ 97,26 ];

    constructor(){

    };

    findRange( code ) {

        if( code >= this.upper[ 0 ] && code <= (this.upper[ 0 ] + this.upper[ 1 ]) ){ return 1  };
        if( code >= this.lower[ 0 ] && code <= (this.lower[ 0 ] + this.lower[ 1 ]) ){ return 2  };
        return -1;
    };

    shiftChar( code, shift, range ) {
        return( code - range[ 0 ] + ( shift % range[ 1 ] ) + range[ 1 ]) % range[ 1 ] + range[ 0 ];
    };

    encode( msg, shift ) {

        let code;
        let msg_encoded = '';
        let range = -1;

        for ( let i = 0; i < msg.length; i++ ) {

            code = msg.charCodeAt( i );
            range = this.findRange( code );

            if ( range > 1 ) {
                // LOWER
                code = this.shiftChar( code, shift, this.lower );
            } else if( range > 0 ) {
                // UPPER
                code = this.shiftChar( code, shift, this.upper );
            };
            msg_encoded += String.fromCharCode( code );
        };
        return msg_encoded;
    };

    decode( msg, shift ) {
        return ( this.encode( msg, -shift ) );
    };

};

cipher = new Cipher();

let msgA = 'Hello';
// let msgB = 'x$yz 85 boo!';
let msgA_e = cipher.encode( msgA, -15 );
// let msgB_e = cipher.encode( msgB, 3 );

console.log( msgA, '>>', msgA_e )
// console.log( msgB, '>>', msgB_e )

// let msgA_d = cipher.decode( msgA_e, 3 );
// let msgB_d = cipher.decode( msgB_e, 3 );

// console.log( msgA, '<<', msgA_d )
// console.log( msgB, '<<', msgB_d )

module.exports = Cipher ;