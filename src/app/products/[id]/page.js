export default function ProductPage({ params }) {
    const { id } = params; // "params" contiene los parámetros dinámicos
    return (
      <main>
        <h1>Producto {id}</h1>
        <p>Detalles del producto con ID: {id}</p>
      </main>
    );
  }
  