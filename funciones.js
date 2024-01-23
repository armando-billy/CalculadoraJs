
// variables
    // numero ingresado
    let numero_ingresado = document.querySelector(".datos_agregandose");

    // numero antiguo
    let numero_antiguo = document.querySelector(".datos_modificar");

    // resultado
    let resultado = document.querySelector(".antiguo_resultado");

    // operacion
    let tipo_operacion = document.querySelector(".operacion");

    // antigua operacion
    let operacion_old = document.querySelector(".operacion_old")

    // ultimo click dado
    let ultimo_click = null;
    document.addEventListener('click', function(event) {
        ultimo_click = event.target.classList.item(0);
    });

// constantes ( botones )
    const botones=  document.querySelector(".botones")


    botones.addEventListener("click", function(event){
        // caso numeros y punto
        if (event.target.matches(".numero")){
            agregar_digito(event.target.innerText);
        
        // caso operadores
        }else if (event.target.matches(".operador")){

            // caso ultimo clic fue un operador solo cambia el operador
            if (ultimo_click === event.target.classList.item(0)){
                tipo_operacion.textContent = event.target.innerText;
                
            
            }else{
                numero_antiguo.textContent = numero_ingresado.textContent;
                tipo_operacion.textContent = event.target.innerText;
                numero_ingresado.textContent = "0";
    
            }


        // caso clear
        } else if (event.target.matches(".clear")){
            numero_ingresado.textContent = "0";
            numero_antiguo.textContent = "";
            tipo_operacion.textContent = "";
            operacion_old.textContent = "";
            resultado.textContent = "";


        // caso mas menos
        } else if (event.target.matches("#masmenos")){
            let numero = parseFloat(numero_ingresado.textContent);
                numero = numero*-1
                numero_ingresado.textContent = numero.toString()
            

        // caso Borrar
        } else if (event.target.matches("#borrar")){
            numero_ingresado.textContent = numero_ingresado.textContent.slice(0, -1)

        // caso igual
        }else if (event.target.matches("#igual")){
            switch (tipo_operacion.textContent) {
                case "+":
                    resultado.textContent = numero_antiguo.textContent + numero_ingresado.textContent;
                    break;
                case "-":
                    resultado.textContent = numero_antiguo.textContent - numero_ingresado.textContent;
                    break;
                case "x":
                    resultado.textContent = numero_antiguo.textContent * numero_ingresado.textContent;
                    break;
                case "/":
                    resultado.textContent = numero_antiguo.textContent / numero_ingresado.textContent;
                    break;
            }
            //guardamos operacion antigua
            operacion_old.textContent = numero_antiguo.textContent + " " + tipo_operacion.textContent + " " 
                                        + numero_ingresado.textContent + " " + "=";

            // seteamos datos nuevos 
            numero_ingresado.textContent = "0";
            numero_antiguo.textContent = "";
            tipo_operacion.textContent = "";
        }
    });

    //funcion numeros

    function agregar_digito(digito) {
        if (numero_ingresado.textContent === "0" && digito !== ".") {
            // Si el contenido es "0" e ingresamos algo diferente a un punto, quitamos el "0"
            numero_ingresado.textContent = "";
        }
        if (digito === "." && (numero_ingresado.textContent.slice(-1) === "." || numero_ingresado.textContent.includes("."))){

        } else{       
            // agega numeros
            numero_ingresado.textContent += digito;
        }

    

    }