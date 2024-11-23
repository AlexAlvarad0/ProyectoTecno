import React, { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MenuDetails from './MenuDetails';

interface MenuItem {
  name: string;
  category: string;
  price: number;
  stock: number;
  color: string;
  image: string;
  quantity?: number;
}

interface MenuCategoryProps {
  category: string;
  menus: MenuItem[];
  onOrderMenu: (menu: MenuItem) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, menus, onOrderMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);

  const handleOrderMenu = (menu: MenuItem) => {
    setSelectedMenu(menu);
  };

  const handleCloseMenuDetails = () => {
    setSelectedMenu(null);
  };

  return (
    <div>
      <h2 className="text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">
        Menús {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className={`border-2 border-${menu.color}-500 rounded-lg p-4 flex flex-col items-center`}
          >
            <img src={menu.image} alt={menu.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-2">{menu.name}</h3>
            <p className="text-blue-500 mt-1">Precio: ${menu.price}</p>
            <p className="text-gray-500 text-sm mt-1">Stock disponible: {menu.stock}</p>
            <div className="mt-2">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleOrderMenu(menu)}
              >
                <ArrowCircleRightIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedMenu && (
        <MenuDetails
             menu={selectedMenu}
            onOrder={onOrderMenu}
            onClose={handleCloseMenuDetails}
/>
      )}
    </div>
  );
};

export default MenuCategory;