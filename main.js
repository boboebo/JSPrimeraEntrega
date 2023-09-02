const mostrarAlert = (msg) => {
  alert(msg);
};

const addlogs = (msg) => {
  console.log(msg);
};

const calcularDescuento = (total, formaDePago) => {
  switch (formaDePago) {
    case "1":
      return total * 0.8;
    case "2":
      return total * 0.9;
    case "3":
      return total * 1.15;
    default:
      return total;
  }
};

mostrarAlert(
  "Las oferta de pasaje son 1ra Clase (1), 2da Clase (2) y 3ra Clase (3)"
);

const compraTickets = () => {
  addlogs("creando variables");
  const precioPrimera = 300;
  const precioSegunda = 200;
  const precioTercera = 100;
  let agregarTicket = "";
  let cantidad = 0;
  let precio = 0;
  let parcial = 0;
  let seguirComprando = false;

  addlogs("bucle do-while");
  do {
    agregarTicket = prompt("Ingresar Ticket deseado (1), (2) o (3)");
    cantidad = Number(prompt("Ingresar cantidad"));

    switch (agregarTicket) {
      case "1":
        precio = precioPrimera;
        break;
      case "2":
        precio = precioSegunda;
        break;
      case "3":
        precio = precioTercera;
        break;
      default:
        mostrarAlert(
          "Opcion Incorrecta. Ingresar (1) 1ra Clase , (2) 2da Clase o (3) 3ra Clase"
        );
    }

    addlogs("calculando parcial");
    parcial += precio * cantidad;
    addlogs("Parcial de la compra = " + parcial);

    seguirComprando = confirm("Desea seguir? ");
  } while (seguirComprando);

  let formaPago = prompt(
    "Ingrese la forma de pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo"
  );

  addlogs("calculando descuento");
  let total = calcularDescuento(parcial, formaPago);

  mostrarAlert("el total a pagar es: " + total);
};

addlogs("Metodo principal");
compraTickets();

addlogs("Fin de ejecucion");
