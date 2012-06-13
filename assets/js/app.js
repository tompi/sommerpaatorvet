// 
//  --- our app behavior logic ---
//
run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("Finner ikke nettverk, ingen informasjon vil være oppdatert...");
        } 
    })();    
});
