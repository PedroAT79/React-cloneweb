import React from "react";
import '../hoja-de-estilos/Testimonio.css'

function Testimonio(){
    return (
        <div className= 'contenedor-testimonio'>
            <img className= 'imagen-testimonio'
             src={require('../imagenes/testimonio-shawn.png')}
             alt= 'Foto de Shawn'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    Shawn Wang in Singapore
                </p>
                <p className="cargo-testimonio">
                    Software Engineer at Amazon
                </p>
                <p className="texto-testimonio">
                "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
                </p>
            </div>
        </div>

    );
}

export default Testimonio;