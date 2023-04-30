var runInput = document.getElementById('runInput');
var pasaporteInput = document.getElementById('pasaporteInput');

// evento para el input radio del "si"
document.getElementById('ingresarRUN').addEventListener('click', function(e) {
    console.log('Vamos a habilitar el input text');
    runInput.disabled = false;
    pasaporteInput.disabled = true;
});

// evento para el input radio del "no"
document.getElementById('ingresarpasaporte').addEventListener('click', function(e) {
    console.log('Vamos a deshabilitar el input text');
    pasaporteInput.disabled = false;
    runInput.disabled = true;
});



var Vr = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (runInput) {
		runInput = runInput.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( runInput ))
			return false;
		var tmp 	= runInput.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Vr.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}


$("#validaRut").click(function(){
	if (Vr.validaRut( $("#txt_rut").val() )){
		$("#msgerror").html("El rut ingresado es válido :D");
	} else {
		$("#msgerror").html("El Rut no es válido :'( ");
	}
});