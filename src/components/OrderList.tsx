import React from 'react';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

interface Order {
  id: string;
  items: { name: string; quantity: number }[];
  status: 'pending' | 'preparing' | 'completed' | 'cancelled';
  time: string;
}

interface OrderListProps {
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onCancelOrder }) => {
  return (
    <div>
      <h2 className="text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">

      </h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No hay pedidos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`border-2 border-${
                order.status === 'pending'
                  ? 'yellow-500'
                  : order.status === 'preparing'
                  ? 'orange-500'
                  : order.status === 'completed'
                  ? 'green-500'
                  : 'red-500'
              } rounded-lg p-4`}
            >
              <p className="font-bold">
                Estado: {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
              <p className="text-gray-500 mt-1">Hora: {order.time}</p>
              <ul className="list-disc pl-4 mt-2">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>
              {order.status === 'pending' && (
                <button
                  onClick={() => onCancelOrder(order.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-4 w-full"
                >
                  Cancelar
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;