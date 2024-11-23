import React from 'react';

const ordersData = [
  { id: 1, name: 'Fideos con salsa', date: '2024-11-15', status: 'Entregado' },
  { id: 2, name: 'Arroz con huevo', date: '2024-11-16', status: 'En camino' },
  // Agrega más pedidos aquí
];

const Orders = () => {
  return (
    <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Historial de Pedidos</h1>
      {ordersData.map((order) => (
        <div
          key={order.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            margin: '10px 0',
            padding: '10px',
          }}
        >
          <p><strong>Producto:</strong> {order.name}</p>
          <p><strong>Fecha:</strong> {order.date}</p>
          <p><strong>Estado:</strong> {order.status}</p>
          <button
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Ver detalles
          </button>
          <button
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Volver a pedir
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
