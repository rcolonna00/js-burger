var calcolaButton = document.getElementById('bottone-calcolatore');
calcolaButton.addEventListener ('click', function() {
    
    //dato prezzo maglietta
    var prezzoHamburger = 50;

    // leggo il valore delle checkbox 
    //e lo aggiungo al prezzo maglietta dato
    var aggiuntoCheckbox = document.getElementsByClassName('aggiunto');
    
    for( var i = 0; i < aggiuntoCheckbox.length; i++ ) {
        var iValue = aggiuntoCheckbox[i];
        
        // console.log( i, iValue.checked );
        // console.log( i, iValue.value );

        if ( iValue.checked == true ) {
            var iValueNumero = parseInt(iValue.value);
            prezzoHamburger = prezzoHamburger + iValueNumero;
        }
        //console.log(prezzoHamburger);
    }

    //leggo valore coupon se sarà uguale ad uno dei coupon gia esistenti 
    //nell'array applico lo sconto

    var arrayCoupon = [
        '123ZXC',
        '456ASD',
        '789QWE'
    ]

    var coupon = document.getElementById( 'coupon-bar' );
    var couponUtente = coupon.value;
    console.log( couponUtente );

    scontoCoupon = prezzoHamburger * 0.2;
    couponValido = false;
    //console.log(scontoCoupon, couponValido)

    for( j = 0; j < arrayCoupon.length; j++ ) {
        var jValue = arrayCoupon[j]
        // console.log(jValue)

        if ( jValue == couponUtente ) {
            prezzoHamburger = prezzoHamburger - scontoCoupon;
        }

    }

    document.getElementById("prezzo-finale").innerHTML = "$ " + prezzoHamburger;
    //console.log(prezzoHamburger);

});