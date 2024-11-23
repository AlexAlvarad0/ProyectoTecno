import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 border-t py-4 px-6 fixed bottom-0 w-full">
      <div className="flex justify-around">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          <HomeIcon />
        </Link>
        <Link to="/cart" className="text-gray-600 hover:text-gray-800">
          <ShoppingCartIcon />
        </Link>
        <Link to="/orders" className="text-gray-600 hover:text-gray-800">
          <ReceiptLongIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;