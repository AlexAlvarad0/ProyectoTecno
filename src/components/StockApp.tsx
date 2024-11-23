import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface Alimento {
  id: number;
  nombre: string;
  cantidad: number;
  precio?: number; // Opcional, si es necesario agregar precios.
}

const StockApp: React.FC = () => {
  const [alimentos, setAlimentos] = useState<Alimento[]>([
    { id: 1, nombre: 'Papas fritas', cantidad: 100, precio: 2000 },
    { id: 2, nombre: 'Hamburguesas', cantidad: 50, precio: 3500 },
    { id: 3, nombre: 'Pizzas', cantidad: 20, precio: 5000 },
  ]);
  const [filtro, setFiltro] = useState<'AZ' | 'ZA' | 'MAYOR' | 'MENOR' | null>(null);

  const alimentosFiltrados = () => {
    let lista = [...alimentos];
    if (filtro === 'AZ') lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (filtro === 'ZA') lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
    if (filtro === 'MAYOR') lista.sort((a, b) => b.cantidad - a.cantidad);
    if (filtro === 'MENOR') lista.sort((a, b) => a.cantidad - b.cantidad);
    return lista;
  };

  const eliminarAlimento = (id: number) => {
    setAlimentos(alimentos.filter((alimento) => alimento.id !== id));
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center py-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Casino UOH - Stock</h1>
      </header>

      {/* Filtros */}
      <div className="flex justify-between items-center my-4 px-2">
        <h2 className="text-xl font-bold">Alimentos en stock</h2>
        <FilterAltIcon
          className="text-gray-500 cursor-pointer"
          onClick={() =>
            setFiltro(
              filtro === 'AZ'
                ? 'ZA'
                : filtro === 'ZA'
                ? 'MAYOR'
                : filtro === 'MAYOR'
                ? 'MENOR'
                : 'AZ'
            )
          }
        />
      </div>

      {/* Lista de productos en tarjetas */}
      <div className="grid grid-cols-1 gap-4">
        {alimentosFiltrados().map((alimento) => (
          <div
            key={alimento.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-bold">{alimento.nombre}</h3>
              <p className="text-gray-500">Cantidad: {alimento.cantidad}</p>
              {alimento.precio && <p className="text-blue-600">Precio: ${alimento.precio}</p>}
            </div>
            <DeleteIcon
              className="text-red-500 cursor-pointer"
              onClick={() => eliminarAlimento(alimento.id)}
            />
          </div>
        ))}
      </div>

      {/* Footer con navegación */}
      <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center text-blue-600">
            <span className="material-icons">home</span>
            Home
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="material-icons">shopping_cart</span>
            Stock
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="material-icons">menu_book</span>
            Menús
          </button>
        </div>
      </footer>
    </div>
  );
};

export default StockApp;
