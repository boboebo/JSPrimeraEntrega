const mostrarAlert = (msg) => {
  alert(msg);
};

const addlogs = (msg) => {
  console.log(msg);
};

const eliminarElemento = (lista, categoriaAEliminar) => {
  let ticketsLimpio = lista.filter(
    (objeto) => objeto.categoria !== categoriaAEliminar
  );
  return ticketsLimpio;
};

// constantes
const precioPrimera = 300;
const precioSegunda = 200;
const precioTercera = 100;

// clase compra
let Compra = class {
  contructor(tickets, subtotal, descuento, total) {
    this.tickets = tickets;
    this.subtotal = subtotal;
  }

  calculaDescuento = (total, formaDePago) => {
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

  mostrarCompra = (lista) => {
    let listaTickets = "";
    lista.forEach((element) => {
      listaTickets =
        listaTickets +
        (" " + element.cantidad + " de " + element.categoria + "° clase,");
    });
    mostrarAlert("Los tickets seleccionados son: " + listaTickets);
  };
};

// clase ticket
let ticketCompra = class {
  constructor(categoria, precio, cantidad) {
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
  }
};

const comprarTickets = () => {
  let cantidad = 0;
  let precio = 0;
  let parcial = 0;
  let seguirComprando = false;
  let agregarTicket = "";
  let tickets = [];

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
    let ticket = new ticketCompra(agregarTicket, precio, cantidad);
    tickets.push(ticket);

    seguirComprando = confirm("Desea seguir? ");
  } while (seguirComprando);

  /// eliminar elemento
  if ((eliminar = confirm("Desea eliminar elementos? "))) {
    let categoriaAEliminar = prompt(
      "Ingresar categoria de ticket a eliminar (1), (2) o (3)"
    );
    tickets = eliminarElemento(tickets, categoriaAEliminar);
  }

  // calcular parcial de la compra
  tickets.forEach((element) => {
    parcial += element.precio * element.cantidad;
  });
  mostrarAlert("El parcial de la compra es: " + parcial);

  // crear compra
  let compra = new Compra(tickets, parcial);

  let formaPago = prompt(
    "Ingrese la forma de pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo"
  );

  let totalCompra = compra.calculaDescuento(parcial, formaPago);
  compra.mostrarCompra(tickets);

  mostrarAlert("TOTAL: " + totalCompra);
};

comprarTickets();
