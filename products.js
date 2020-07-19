var respuesta;

function traerDatos(){
    var datos = new XMLHttpRequest();
    datos.open('GET', 'http://127.0.0.1:5500/assets/scripts/data1.json', true); /*no puedo traer de forma correcta el json, 
    lo tengo que pones desde http*/

    datos.send();

    datos.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){

            var respuesta = JSON.parse(this.responseText);
            console.log(respuesta)
            for(var items of respuesta){
                console.log(items)
            }
            
        }
    }
    //Traigo mis datos del json y lo convierto en una variable para poder manipularlo de una forma mas fácil.
};
//var data = traerDatos(); //variable que vuelve mi json en una variable de Products.js.


var data = traerDatos();

console.log(data)
/*
function Products(){
    this.data = [];
    this.resuts = [];

    this.init = function(data){
        this.data = data;
    }
    this.getByid = function(id){

    }


}*/