
var usuario = '0';
var password = '0';
var usuariot = '0';

var datau = {
    user: "",  //correo
    pass: "",  //contraseña
    name: "",  //nombre
    pass2: ""  //contraseña confirmacion
};


                                                   
//boton para registrar
document.getElementById('b5').addEventListener('click', function() {
    datau.user = document.getElementById("user").value;
    datau.pass = document.getElementById("pass").value;
    datau.name = document.getElementById("name").value;
    datau.pass2 = document.getElementById("pass2").value;

    //usuariot = datau.user;
    //document.getElementById("nusuario1").innerHTML = usuario;

if (datau.pass2 === datau.pass) {  //comparamos que las contraseñas coincidan

    $.post({

            url: "/register",    //path register en el index
        
            data: JSON.stringify(datau),
            contentType: "application/json",
            success: function(datosEntrada,status) {    //datos entrada es lo que me responde el index, yo le hago request, modelo request response
                
              if(datosEntrada === "OK") {
               
                   alert("Registro exitoso");
                   window.location.replace('/')  //si el servidor me responde Ok lleveme a home 
              }else
               {
               
               alert("ERROR");
               }
                    
                
            }
    });
    
} else {
    alert("las contraseñas no coinciden");
}

});
 
/*
document.getElementById('b6').addEventListener('click', function() {
    datau.user = document.getElementById("user").value;
    datau.pass = document.getElementById("pass").value;
    //usuariot = datau.user;
    //document.getElementById("nusuario1").innerHTML = usuario;
$.post({

    //le envio un vector llamado datau
    url: "/datos1",
    
    data: JSON.stringify(datau),
    contentType: "application/json",
    success: function(datosEntrada,status) {

        //alert(datosEntrada.temp);
        document.getElementById('p1').innerHTML = datosEntrada.temp;  //para reemplazar un dato en la pagina de los que tengo en server
        document.getElementById('p2').innerHTML = datosEntrada.hum;

        
    }
});
});
*/

//oprimo volver y me lleva a login
document.getElementById('b4').addEventListener('click', function() {
    window.location.replace('/')  //me lleva al home
});