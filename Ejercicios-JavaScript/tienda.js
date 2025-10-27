
// Datos

const productos = [
  {
    nombre: 'Cabezal Sparring',
    description: 'Cabezal de Sparring.',
    categoria: 'Protectores',
    marca: 'Gran Marc',
    talle: ['1', '2', '3'],
    precio: 35000,
    web: 'https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/',
    imagen: 'cabezal-cerrado.webp'
  },
  {
    nombre: 'Dobok Dan',
    description: 'Bobok aprobado para torneos internacionales.',
    categoria: 'Dobok',
    marca: 'Daedo',
    talle: ['1', '2', '3', '4', '5', '6', '7', '8'],
    precio: 115000.56,
    web: 'https://www.daedo.com/products/taitf-10813',
    imagen: 'dobok.webp'
  },
  {
    nombre: 'Escudo de Potencia',
    description: 'Escudo de potencia para entrenamientos.',
    categoria: 'Entrenamiento',
    marca: 'Gran Marc',
    talle: ['s/talle'],
    precio: 51700.5,
    web: 'https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/',
    imagen: 'escudo-potencia.webp'
  },
  {
    nombre: 'Par de focos redondos',
    description: 'Par de focos de 25cm x 25cm para hacer entrenamiento.',
    categoria: 'Entrenamiento',
    marca: 'Gran Marc',
    talle: ['s/talle'],
    precio: 15000.3,
    web: 'https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/',
    imagen: 'foco-con-dedos.webp'
  },
  {
    nombre: 'Guantes 10 onzas',
    description:
      'Guantes de Sparring de 10 onzas habilitados para torneos internacionales',
    categoria: 'Protectores',
    marca: 'Daedo',
    talle: ['s/talle'],
    precio: 35000,
    web: 'https://www.daedo.com/products/pritf-2020',
    imagen: 'protectores-manos.webp'
  },
  {
    nombre: 'Protectores Pie',
    description: 'Protectores de Pie habilitados para torneos internacionales',
    categoria: 'Protectores',
    marca: 'Daedo',
    talle: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    precio: 35000.43,
    web: 'https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022',
    imagen: 'protectores-pie.webp'
  }
];


// Utilidades

function formatPrice(price) {
  const nf = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' });
  return nf.format(price);
}

function contarProductos() { // está provocando un error en carrito
  const getCart = JSON.parse(localStorage.getItem('carrito'));
  if (getCart != null) {
    document.getElementById('cant-prod').innerText = getCart.length;
  }
}


// Catálogo

function mostrarCatalogo(lista = productos) {
  let html = '';

  lista.forEach((p, i) => {
    html += `
      <div>
        <img src="images/${p.imagen}" alt="${p.nombre}" />
        <h3>${p.nombre}</h3>
        <p>${formatPrice(p.precio)}</p>
        <button type="button" onclick="mostrarDetalle(${i})">Ver Detalle</button>
        <button type="button" onclick="agregarAlcarrito(${i})">Agregar al carrito</button>
      </div>`;
  });

  document.getElementById('catalogo').innerHTML = html;
}

function orderCatalog() {
  const opt = document.getElementById('order').value;
  let ordenados;

  switch (opt) {
    case 'menor':
      ordenados = productos.sort((a, b) => a.precio - b.precio);
      break;
    case 'mayor':
      ordenados = productos.sort((a, b) => b.precio - a.precio);
      break;
    case 'a-z':
      ordenados = productos.sort((a, b) =>
        a.nombre.toUpperCase() < b.nombre.toUpperCase() ? -1 : 1
      );
      break;
    case 'z-a':
      ordenados = productos.sort((a, b) =>
        a.nombre.toUpperCase() > b.nombre.toUpperCase() ? -1 : 1
      );
      break;
    default:
      ordenados = productos.sort((a, b) => a.precio - b.precio);
  }

  mostrarCatalogo(ordenados);
}


// Detalle / Modal

function mostrarDetalle(id) {
  const p = productos[id];
  document.getElementById('detalle').style.display = 'block';
  document.getElementById('titulo-prod').innerText = p.nombre;
  document.getElementById('descr-prod').innerText = p.description;
  document.getElementById('precio-prod').innerText = p.precio;
}

function cerrarModal() {
  document.getElementById('detalle').style.display = 'none';
}


// Carrito

function agregarAlcarrito(id) {
  const base = JSON.parse(localStorage.getItem('carrito'));
  let listadoProductos = base == null ? [] : base;

  listadoProductos.push(id);
  localStorage.setItem('carrito', JSON.stringify(listadoProductos));
  contarProductos();
}

function mostrarCarrito() {
  let html = '';
  let total = 0;
  const carrito = JSON.parse(localStorage.getItem('carrito'));

  if (carrito != null) {
    const listProd = [];
    const listCant = [];

    carrito.forEach((num) => {
      if (!listProd.includes(num)) {
        listProd.push(num);
        listCant.push(1);
      } else {
        const idx = listProd.indexOf(num);
        listCant[idx] += 1;
      }
    });

    listProd.forEach((num, i) => {
      const item = productos[num];
      html += `
        <div>
          <h3>${item.nombre}</h3>
          <p>${formatPrice(item.precio)}</p>
          <p>Cantidad: ${listCant[i]}</p>
          <button type="button" onclick="eliminarProducto(${i})">Eliminar producto</button>
        </div>`;
      total += item.precio * listCant[i];
    });
  }

  html += `<p>Total: ${formatPrice(total)}</p>`;
  html += `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
  document.getElementById('mostrar-carrito').innerHTML = html;
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  contarProductos();
  window.location.reload();
}

function eliminarProducto(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  carrito.splice(id, 1);

  if (carrito.length > 0) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  } else {
    localStorage.removeItem('carrito');
  }
  contarProductos();
  localStorage.setItem('carrito', JSON.stringify(carrito));
  window.location.reload();
}


// Filtros

function filtrarProducto() {
  const q = document.getElementById('search').value;
  const min = document.getElementById('price-min').value;
  const max = document.getElementById('price-max').value;
  const prot = document.getElementById('protectores').checked;
  const entr = document.getElementById('entrenamiento').checked;
  const dob  = document.getElementById('dobok').checked;
  const marca = document.getElementById('marca').value;

  let nueva = productos;

  if (q) {
    const ql = q.toLowerCase();
    nueva = nueva.filter(p =>
      p.nombre.toLowerCase().includes(ql) || p.description.toLowerCase().includes(ql)
    );
  }

  if (min) {
    nueva = nueva.filter(p => p.precio >= min);
  }

  if (max) {
    nueva = nueva.filter(p => p.precio <= max);
  }

  const categorias = [];
  if (prot) categorias.push('Protectores');
  if (entr) categorias.push('Entrenamiento');
  if (dob)  categorias.push('Dobok');

  if (categorias.length > 0) {
    nueva = nueva.filter(p => categorias.includes(p.categoria));
  }

  if (marca !== 'Todas') {
    nueva = nueva.filter(p => p.marca === marca);
  }

  mostrarCatalogo(nueva);
}
