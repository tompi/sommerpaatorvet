// 
//  --- our app behavior logic ---
//

var uploadUrl = "http://www.sommerpaatorvet.com:3000/";

run(function () {
    // immediately invoked on first run
    var init = (function () {
        if (navigator.network.connection.type == Connection.NONE) {
            alert("Finner ikke nettverk, ingen informasjon vil være oppdatert...");
        } 
    })();    
});

function taBilde() {
	// Hente bilde-uri fra tlf
	navigator.camera.getPicture(
			sendBilde, 
			function() { alert('Klarte ikke ta bilde...'); },
			{
				quality: 50,
				destinationType: navigator.camera.DestinationType.FILE_URI
			});
}				
	
function sendBilde(bildeUri) {
	var options = new FileUploadOptions();
	options.fileKey="image";
	options.fileName=bildeUri.substr(bildeUri.lastIndexOf('/')+1);
	options.mimeType="image/jpeg";
 
	var params = new Object();
 
	options.params = params;
	//options.chunkedMode = false;
 
	var ft = new FileTransfer();
	ft.upload(bildeUri, uploadUrl, win, fail, options);
	//alert('Initiert upload');
}

function win(r) {
      alert(r.response);
}
 
function fail(error) {
      alert("An error has occurred: Code = " = error.code);
}
