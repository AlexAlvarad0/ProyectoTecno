import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  name: string;
  category: string;
  price: number;
  stock: number;
  color: string;
  image: string;
}
interface OrderedMenuItem extends MenuItem {
    quantity: number;
  }

interface MenuDetailsProps {
  menu: MenuItem;
  onOrder: (menu: MenuItem) => void;
  onClose: () => void;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ menu, onOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleOrder = () => {
    onOrder({ ...menu, quantity } as OrderedMenuItem);
    navigate('/orders');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <img src={menu.image} alt={menu.name} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mt-4">{menu.name}</h2>
        <p className="text-blue-500 mt-2">Precio: ${menu.price}</p>
        <p className="text-gray-500 mt-1">Stock disponible: {menu.stock}</p>
        <div className="flex items-center mt-4">
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-l-lg hover:bg-blue-600"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            max={menu.stock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border border-gray-300 px-3 py-2 w-16 text-center"
          />
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-blue-600"
            onClick={() => setQuantity(Math.min(quantity + 1, menu.stock))}
          >
            +
          </button>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-blue-600"
          onClick={handleOrder}
        >
          Pedir
        </button>
      </div>
    </div>
  );
};

export default MenuDetails;