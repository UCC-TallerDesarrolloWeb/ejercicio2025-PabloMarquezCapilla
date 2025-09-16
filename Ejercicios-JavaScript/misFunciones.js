/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirunidades de la función
 * @param {string} unidad - unidad ingresada: metro, pie, pulgada, yarda
 * @param {Number} valor - valor numerico ingresado por el usuario 
 * @return Valor que retorna
 */

let convertirunidades = (unidad,valor) =>{
    let metro,pie,pulgada,yarda;

    if(isNaN(valor)){

        alert("El Valor ingresado no es correcto");
        metro = "";
        pie ="";
        pulgada= "";
        yarda="";


    }
    else {
    if(unidad=="unid_metro"){
        metro=valor;
        pie=3.28*valor;
        pulgada=39.37*valor;
        yarda=1.0936*valor;

    }
    else if(unidad=="unid_pie"){
        pie=valor;
        metro=0.3048*valor;
        pulgada=12*valor;
        yarda=0.33*valor;

    }
       else if(unidad=="unid_yarda"){
        yarda=valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;

    }

          else if(unidad=="unid_pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        yarda=0.0277*valor;
        pie=0.0833333*valor;

    }
}
    document.getElementById ("metro").value = metro;
    document.getElementById ("pie").value = pie;
    document.getElementById ("pulgada").value = pulgada;
    document.getElementById ("yarda").value = yarda;
}


/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirGR de la función
 * @param {string} id - GRADOS O RADIANES
 * @param {Number} valor - valor numerico ingresado por el usuario 
 * @return Valor que retorna
 */



let convertirGR = (id,valor) => {
    
    let cantGrados, cantRadianes; 
    
    if (id =="grados"){
        cantGrados = valor; 
        cantRadianes = cantGrados * Math.PI/180;
        document.getElementById("radianes").value = cantRadianes;
    }else {
        cantRadianes = valor; 
        cantGrados = cantRadianes * 180/Math.PI;
        document.getElementById("grados").value = cantGrados;

    }
};

let mostrarOcultarDiv = (id) => {
    //////
   //// if (id == "mostrarDiv"){
   ////     document.getElementsByName("unDiv")[0].style.display = "block"; 
  ////  }
  ////  else {
   ////     document.getElementsByName("unDiv")[0].style.display = "none"; 
    //// }
    /////
const mostrar = id == "mostrarDiv" ? "block" : "none"; 
document.getElementsByName("unDiv")[0].style.display = mostrar; 

};