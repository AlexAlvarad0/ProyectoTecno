import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      {/* Título alineado a la izquierda */}
      <h1 className="text-2xl font-bold">Casino UOH</h1>
      
      {/* Ícono alineado a la derecha */}
      <PersonIcon className="text-white text-3xl cursor-pointer" />
    </header>
  );
};

export default Header;
