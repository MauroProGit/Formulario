import React from 'react';
import '../hojas_de_estilo/formulario.css';

function Formulario() {

    //arreglo de objetos
    let baseDDatos = [
        {
            nombre: "Mauricio",
            correo: "omgiraldoob@cesde.net",
            contraseña: 123,
            confirmarC: 123,
        }
    ];
    //evento addEventListener y funcion para registrar usuarios
    const handleRegistroUsuario = () => {
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let contraseña = parseInt(document.getElementById("contraseña").value);
        let confirmarC = parseInt(document.getElementById("confirmarC").value);
        //validar si los campos estan completos 
        if (nombre == "" || correo == "" || contraseña == "" || confirmarC == "") {
            alert("Datos incompletos o no validos, por favor intente nuevamente");
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("contraseña").value = "";
            document.getElementById("confirmarC").value = "";
            document.getElementById("nombre").focus();
        } else {
            //agregar un un nuevo objeto al arreglo de objetos
            if (contraseña === confirmarC) {
                let usuarioNuevo = {
                    nombre: nombre,
                    correo: correo,
                    contraseña: contraseña,
                    confirmarC: confirmarC
                };
                baseDDatos.push(usuarioNuevo);
                alert("Registro exitoso");
                document.getElementById("nombre").value = "";
                document.getElementById("correo").value = "";
                document.getElementById("contraseña").value = "";
                document.getElementById("confirmarC").value = "";
                document.getElementById("nombre").focus();
                return console.log(baseDDatos);
            } else {
                alert("las contraseñas no coinciden");
                document.getElementById("contraseña").value = "";
                document.getElementById("confirmarC").value = "";
                document.getElementById("contraseña").focus();
            };
        }
    }

    return (
        <div className="formulario">
            <form>
                <label htmlFor="nombre">Nombre:</label><br />
                <input id="nombre" type="text" placeholder="Ingrese su nombre" /><br />
                <label htmlFor="correo">Correo electronico:</label><br />
                <input id="correo" type="text" placeholder="Ingrese su correo electronico" /><br />
                <label htmlFor="contraseña">Contraseña</label><br />
                <input id="contraseña" type="password" placeholder="Ingrese su contraseña" /><br />
                <label htmlFor="confirmarC">Confirmar contraseña</label><br />
                <input id="confirmarC" type="password" placeholder="Ingrese nuevamente su contraseña" />
                <div id="button">
                    <button id="registroUsuarios" type="button" onClick={handleRegistroUsuario}>Confirmar</button>
                </div>
            </form>
        </div>
    );
}
export default Formulario;