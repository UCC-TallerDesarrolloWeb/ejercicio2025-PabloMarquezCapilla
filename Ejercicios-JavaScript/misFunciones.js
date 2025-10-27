/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirunidades de la función
 * @param {string} unidad - unidad ingresada: metro, pie, pulgada, yarda
 * @param {Number} valor - valor numerico ingresado por el usuario 
 * @return Valor que retorna
 */

let convertirunidades = (unidad,valor) =>{
    let metro,pie,pulgada,yarda;

        console.log(valor);
    console.log(isNaN(valor))


  if(valor.includes(",")) {
        valor = valor.replace(",", ".");
    }



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





/**
 * Suma dos valores tomados del DOM y muestra el resultado.
 * @method sumar
 * @param {string} nums1 - ID del input con el primer sumando ("nums1").
 * @param {string} nums2 - ID del input con el segundo sumando ("nums2").
 * @returns {void} Coloca la suma en el input con ID "totalS". Si hay valores no numéricos, limpia el resultado y alerta.
 */

let sumar = () => {
    console.log("sumar")
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)) {
        alert("Una de las variables ingresadas no es un número")
        document.getElementById("totalS").value = ""
    } else {
        document.getElementById("totalS").value = Number(sum1) + Number(sum2)
    }
}

let restar = () => {
    console.log("restar")
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;

    if(isNaN(res1) || isNaN(res2)) {
       alert("No es un Número por lo tanto es invalido la operacion")
        document.getElementById("totalR").value = ""
    } else {
        document.getElementById("totalR").value = res1 - res2;
    }
}

let multiplicar = () => {
    console.log("multiplicar")
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;

    if(isNaN(mul1) || isNaN(mul2)) {
       alert("No es un Número por lo tanto es invalido la operacion")
        document.getElementById("totalM").value = ""
    } else {
        document.getElementById("totalM").value = mul1 * mul2;
    }
}

let dividir = () => {
    console.log("dividir")
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    if(isNaN(div1) || isNaN(div2)) {
        alert("No es un Número por lo tanto es invalido la operacion")
        document.getElementById("totalS").value = ""
    } else if(div2==0) {
        alert("El denominador no puede ser 0")
        document.getElementById("numd2").value = ""
    } else {
        document.getElementById("totalD").value = div1 / div2
    }
}