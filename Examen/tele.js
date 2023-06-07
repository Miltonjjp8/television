var volumen=3;
var canal=7;
var estado= 0;
var silencio=0;

function apagar() {
    
    if (estado == 0) {
        console.log("Television encendida");
        estado = 1;
    }else{
        console.log("Television apagada");
        estado = 0;
    }
}

function volumenMas() {
    if (estado == 0) {
        console.log("Television apagada");
    } else {
        volumen++;
        if (volumen <= 10) {
            console.log("Volumen: "+volumen);
             if (silencio==1) {
                 console.log("silencio desactivado")
                 silencio=0;
             }
        } else {
            console.log("Volumen 10 al maximo");
            volumen = 10;
        }
    } 
}

function canalMas() {
    if (estado == 0) {
        console.log("Television apagada");
    } else {
        canal++;
        if (canal <= 100) {
            console.log(`canal: ${canal}`);
        } else {
            console.log("canal 100 maximo");
            canal = 100;
        }
    }
}

function volumenMenos() {
    if (estado == 0) {
        console.log("Television apagada");
    } else {
        volumen--;
        if (volumen >= 1) {
            console.log("Volumen: "+volumen);
        } else {
            console.log("Volumen 1 al minimo");
            volumen = 1;
        }
    }
    
}

function canalMenos() {
    if (estado == 0) {
        console.log("Television apagada");
    } else {
        canal--;
        if (canal >= 1) {
            console.log("canal: "+canal);
        } else {
            console.log("canal 1 al minimo");
            canal = 1;
        }
    }
}

function silenciar() {
    if (estado == 0) {
        console.log("Television apagada");
    } else {
        if (silencio == 0) {
            console.log("modo silencio activado");
            volumen = volumen;
            silencio=1;
        } else {
            console.log("modo silencio desactivado, volumen: "+volumen);
            silencio = 0;
        }

    }
}