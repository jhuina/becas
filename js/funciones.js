const ParametroBeca = document.getElementById('parametros-tab');
const PresupuestoCero = document.getElementById('presupuestoCero-tab');
const PresupuestoCien = document.getElementById('presupuestoCien-tab');
const Limites = document.getElementById('Limites-tab');
const Historial = document.getElementById('historial-tab');

if(ParametroBeca){
ParametroBeca.addEventListener('click', function(){
    document.querySelector('#migaPan').innerHTML = 'Parámetros BECA'
});
}
if(PresupuestoCero){
PresupuestoCero.addEventListener('click', function(){
    document.querySelector('#migaPan').innerHTML = 'Presupuesto 0%'
});
}
if(PresupuestoCien){
PresupuestoCien.addEventListener('click', function(){
    document.querySelector('#migaPan').innerHTML = 'Presupuesto 100%'
});
}
if(Limites){
Limites.addEventListener('click', function(){
    document.querySelector('#migaPan').innerHTML = 'Límites'
});
}
if(Historial){
Historial.addEventListener('click', function(){
    document.querySelector('#migaPan').innerHTML = 'Historial'
});
}


// familia

const ficha = document.getElementById('fichas-tab');
const integrantes = document.getElementById('integrantes-tab');
const documentos = document.getElementById('documentos-tab');
const calculo = document.getElementById('calculo-tab');
const entrevista = document.getElementById('entrevista-tab');
const informe = document.getElementById('informe-tab');

if(ficha){
    ficha.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Ficha';
        document.querySelector('#ContenedorRutApoderado').classList.add('activado');
        document.querySelector('#ContenedorRutApoderado').classList.remove('removerConteRut')
    });
}
if(integrantes){
    integrantes.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Integrantes';
        document.querySelector('#ContenedorRutApoderado').classList.add('removerConteRut');
        document.querySelector('#ContenedorRutApoderado').classList.remove('activado')
    });
}
if(documentos){
    documentos.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Documentos';
        document.querySelector('#ContenedorRutApoderado').classList.add('removerConteRut');
        document.querySelector('#ContenedorRutApoderado').classList.remove('activado')
    });
}
if(calculo){
    calculo.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Cálculo de Beca';
        document.querySelector('#ContenedorRutApoderado').classList.add('removerConteRut');
        document.querySelector('#ContenedorRutApoderado').classList.remove('activado')
    });
}
if(entrevista){
    entrevista.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Entrevista';
        document.querySelector('#ContenedorRutApoderado').classList.add('removerConteRut');
        document.querySelector('#ContenedorRutApoderado').classList.remove('activado')
    });
}
if(informe){
    informe.addEventListener('click', function(){
        document.querySelector('#migaPanF').innerHTML = 'Informe Final';
        document.querySelector('#ContenedorRutApoderado').classList.add('removerConteRut');
        document.querySelector('#ContenedorRutApoderado').classList.remove('activado')
    });
}


// vivienda
const viviendaIntegrante = document.getElementById('btnradioVv1');
const viviendaInteRemover = document.getElementById('btnradioVv2');

if(viviendaIntegrante){
    viviendaIntegrante.addEventListener('click', function(){
        document.querySelector('#ViviendaIntegrantes').classList.add('activado');
        document.querySelector('#ViviendaIntegrantes').classList.remove('remover');
    });
}
if(viviendaInteRemover){
    viviendaInteRemover.addEventListener('click', function(){
        document.querySelector('#ViviendaIntegrantes').classList.add('remover');
        document.querySelector('#ViviendaIntegrantes').classList.remove('activado');
    });
}

// vehiculo 
const vehiculoIntegrante = document.getElementById('btnradioVh1');
const vehiculoInteRemover = document.getElementById('btnradioVh2');

if(vehiculoIntegrante){
    vehiculoIntegrante.addEventListener('click', function(){
        document.querySelector('#VehiculoIntegrantes').classList.add('activado');
        document.querySelector('#VehiculoIntegrantes').classList.remove('remover');
    });
}
if(vehiculoInteRemover){
    vehiculoInteRemover.addEventListener('click', function(){
        document.querySelector('#VehiculoIntegrantes').classList.add('remover');
        document.querySelector('#VehiculoIntegrantes').classList.remove('activado');
    });
}

//const btnVisualizar = document.getElementById('btnVisualizar')
    //btnVisualizar.addEventListener("click",function(){
	//document.querySelector('#visualizar').innerHTML = "visibility_off";
//});

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" );
    //the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
//fileInput.addEventListener( "change", function( event ) {  
    //the_return.innerHTML = this.value;  
//});  