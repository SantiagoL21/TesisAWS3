
var usuario = '0';
var password = '0';
var usuariot = '0';

var datau = {
    user: "",
    pass: ""
};

// si al elemeento login1 le hago click haga esto
//busqueme el elemento por el id y lo pongo en datau 


document.getElementById('b7').addEventListener('click', function() {
    datau.user = document.getElementById("user").value;
    datau.pass = document.getElementById("pass").value;
    

   
    //usuariot = datau.user;
    //document.getElementById("nusuario1").innerHTML = usuario;
$.post({

    //le envio un vector llamado datau
    url: "/login",
    
    data: JSON.stringify(datau),
    contentType: "application/json",
    success: function(datosEntrada,status) {


        
      if(datosEntrada === "OK") {
           window.location.replace("/test"); //si el servidor me responde Ok lleveme a home
           //alert("Nombre de usuario y/o contraseña correctos");
      }else
       {
       
       alert("Nombre de usuario y/o contraseña incorrectos");
       }
            
        
    }
});

$.post({

    url: "/verid",
    data: JSON.stringify(datau),
    contentType: "application/json",
    success: function(datosEntrada,status) {
    response.status(200);
                        
      }
    
});


});




document.getElementById('b1').addEventListener('click', function() {
    datau.user = document.getElementById("user").value;
    datau.pass = document.getElementById("pass").value;
    

   
    //usuariot = datau.user;
    //document.getElementById("nusuario1").innerHTML = usuario;
$.post({

    //le envio un vector llamado datau
    url: "/login",
    
    data: JSON.stringify(datau),
    contentType: "application/json",
    success: function(datosEntrada,status) {


        
      if(datosEntrada === "OK") {
           window.location.replace("/dashboard"); //si el servidor me responde Ok lleveme a home
           //alert("Nombre de usuario y/o contraseña correctos");
      }else
       {
       
       alert("Nombre de usuario y/o contraseña incorrectos");
       }
            
        
    }
});

$.post({

    url: "/verid",
    data: JSON.stringify(datau),
    contentType: "application/json",
    success: function(datosEntrada,status) {
    response.status(200);
                        
      }
    
});


});
                                                   
