
let user = "kioski";
let pass = "maximo14";

function login() {
    let continuar = false;
    for (let i = 3; i > 0; i--) {
        let nombreUser = prompt("Ingresa tu usuario");
        let contraseña = prompt("ingresa tu contraseña");
        if (user === nombreUser && pass === contraseña) {
            alert("Login exitoso");
            continuar = true;
            break;
        }
        else {
            alert("Error en usuario o contraseña, quedan " + (i - 1) + " intentos");
        }
    }
    return continuar;
}

if (login()) {
  
let total=0; 

    let opcion = prompt("Hace tu pedido: \n1- Sandwich de millanesa $350. \n2- Milanesa al plato con fritas $500. \n3- Parrillada $1500. \n4- Piza de muzarella $1000. \n5- Papa fritas $500.\nPresiona X para finaliar pedido.");

while(opcion != "X" && opcion != "x"){
switch (opcion) {
        case "1":
            alert("Sandwich de milanesa");
total += 350;
            break;
            case "2":
                alert("Elegiste Milanesa al plato con fritas.");
                total += 500;
                break;
            case "3":
            alert("Elegiste Parrillada");
            total += 1500;
                break;
            case "4":
                alert("Elegiste Piza de muzarella");
                total += 1000;
                break;
            case "5":
                alert("Elegiste Papa fritas");
                total += 500;
                break;
                default:
                    alert("Opcion invalida");
                    break;
    }
opcion = prompt("Hace tu pedido: \n1- Sandwich de millanesa 350. \n2- Milanesa al plato con fritas 500. \n3- Parrillada 1500. \n4- Piza de muzarella 1000. \n5- Papa fritas 500.\nPresiona X para finaliar pedido."); 
 } 
alert("Pedido en preparacion, el total a pagar es $"+total+" gracias por tu compra");
}else{
    alert("Tu cuenta fue bloqueada por seguridad");

}
alert("Que tenga un buen dia");

