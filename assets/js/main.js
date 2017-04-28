//dni = document.getElementById("dni").value;

//if( 	/^\d{9}$/.test(dni) ) {
//  return false;
//}


function validateForm(){
	/* Escribe tú código aquí */

  var nombre= document.getElementById("name");

  if(nombre==""){
    alert("campo obligatorio");
  }
  document.getElementById("formu").onsubmit = function(e){
    e.preventDefault();


}
