document.querySelector('#saludar').innerHTML="Hola Luis";

const buscar =(nombre)=>{

    let personas=[
        {nombre:"Luis","valor":5000},
        {nombre:"Andrea","valor":4000},
        {nombre:"Pedro","valor":3000},   
        {nombre:"Maria","valor":2000},
    ];
    
    let persona = personas.find(e=>e.nombre===nombre);

    if(persona){
        console.log(persona.valor);
    }else{
        console.log("Nombre no encontro")
    }
};
