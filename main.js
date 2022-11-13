const form = document.querySelector('#from-control')
const campo1 = document.querySelector('#campoA')
const campo2 = document.querySelector('#campoB')
const campoResultado = document.querySelector('#campoResult')


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(campo1.value);
    console.log(campo2.value);
   
    if(campo2.value > campo1.value){
        campoResultado.style.display = "flex"
        campoResultado.style.justifyContent = "center"
        campoResultado.style.backgroundColor = "rgb(12, 149, 12)"
        campoResultado.innerHTML = `Formulário Válido`
        
    }else if (campo2.value < campo1.value) {
        campoResultado.style.display = "flex"
        campoResultado.style.backgroundColor = "red"
        campoResultado.innerHTML = `Formulário Inválido`
        console.log(`Campo A é maior`);
    }
})



