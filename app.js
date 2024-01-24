let num_secreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMax = 10;

function condicionesIniciales(){
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p','Indica un número del 1 al 10');
    intentos = 1;
    num_secreto = numeroSecreto();

}

function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function numeroSecreto(){
    let num_generado = Math.floor(Math.random()*numeroMax)+1;
    console.log(num_generado)

    if (listaNumeroSecreto.length == numeroMax) {
        asignarTexto('p','Ya se sortearon todos los números secretos')
    } else {

        if (listaNumeroSecreto.includes(num_generado)) {
        return numeroSecreto();
        } else {
            listaNumeroSecreto.push(num_generado);
            console.log(listaNumeroSecreto)
            return num_generado;
        }
    }
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
     
    //numero secreto aleatorio
    //console.log(num_secreto);
    //console.log(typeof(num_secreto))
    //numero ingresado por usuario por boton
    //console.log(numeroUsuario);
    //console.log(typeof(numeroUsuario))
    //comparacion logica entre numero secreto y numero de usuario, retorna True o False
    //console.log(numeroUsuario === num_secreto);
    
    if (numeroUsuario === num_secreto) {
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} !`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < num_secreto) {
            asignarTexto('p','El número secreto es mayor')
        } else {
            asignarTexto('p','El número secreto es menor')
        }
        intentos++
        limpiarCaja()
    console.log(intentos)
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales()


