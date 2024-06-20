function factorial(){
    let num = document.getElementById('numero').value;
    const hiddenDiv = document.getElementById('cajaResultado');
    let resultado = 1;
    
    for(i=1; i<=num; i++){
        resultado=resultado*i;
    }

    document.getElementById('cajaResultado').innerHTML
    document.getElementById('resultado').innerHTML= "El factorial de " + num + " es: " + resultado;
}
