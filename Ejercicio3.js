function esMultiplo(){
    let a =parseFloat(prompt("Ingrese el valor de a"));
    let b =parseFloat(prompt("Ingrese el valor de b"));
    if(a % b === 0){
        console.log("a es multplo de b");
    }else{
        console.log("a no es multiplo de b");
    }
}
