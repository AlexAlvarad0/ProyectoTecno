import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuCategory from './MenuCategory';
import OrderList from './OrderList';
import { v4 as uuidv4 } from 'uuid';

interface MenuItem {
  name: string;
  category: string;
  price: number;
  stock: number;
  color: string;
  image: string;
  quantity?: number;
}

interface Order {
  id: string;
  items: { name: string; quantity: number }[];
  status: 'pending' | 'preparing' | 'completed' | 'cancelled';
  time: string;
}

const Home: React.FC = () => {
  // Definición del array de menús
  const menusData: MenuItem[] = [
    { name: 'Fideos con salsa', category: 'JUNAEB', price: 3000, stock: 10, color: '#FFD700', image: 'https://www.latercera.com/resizer/v2/H2WK4LOTAFGEXEM2JDZPP3SARM.jpeg?quality=80&smart=true&auth=ebce0c04f62b8a35f489099794b9e8f87fe5ff15585e5c3642ee73bedc1e2145&width=690&height=502' },
    { name: 'Arroz con huevo', category: 'JUNAEB', price: 2500, stock: 8, color: '#FFA500', image: 'https://e.radio-grpp.io/xlarge/2019/11/13/471247_863576.jpg' },
    { name: 'Lasagna', category: 'EJECUTIVO', price: 4000, stock: 5, color: '#00FF00', image: 'https://www.recetasdesbieta.com/wp-content/uploads/2018/10/lasagna-original..jpg' },
    { name: 'Fideos con salsa blanca', category: 'DEL DÍA', price: 5000, stock: 4, color: '#ADD8E6', image: 'https://i0.wp.com/ella.paraguay.com/wp-content/uploads/2014/07/tallarin.png?resize=768%2C474&ssl=1' },
    { name: 'Papas doradas con carne', category: 'EJECUTIVO', price: 3500, stock: 7, color: '#800080', image: 'https://sallobos.cl/content/uploads/bfi_thumb/43406-qmwkarqawgi31twildr7nudvzgg6mt6i25npb3ua3s.jpg' },
    { name: 'Papas fritas con huevo', category: 'DEL DÍA', price: 2800, stock: 12, color: '#008000', image: 'https://www.hogarmania.com/archivos/201703/huevos-fritos-patatas-1280x720x80xX.jpg' },
    { name: 'Papas duquesas con carne', category: 'FUNCIONARIO', price: 4500, stock: 6, color: '#00BFFF', image: 'https://www.sibarica.cl/wp-content/uploads/2018/09/IMG-20180910-WA0065-940x705.jpg' },
    { name: 'Guiso de berenjena con arroz', category: 'JUNAEB', price: 3800, stock: 9, color: '#8B4513', image: 'https://www.brillante.es/wp-content/uploads/2016/08/arroz-con-berenjenas-destacada.jpg' },
    { name: 'Pizza', category: 'FAST FOOD', price: 4200, stock: 8, color: '#800080', image: 'https://www.novachef.es/media/images/pizza-pepperoni.jpg' },
    { name: 'Hot dog Italiano', category: 'FAST FOOD', price: 3000, stock: 10, color: '#800080', image: 'https://tarasmulticulturaltable.com/wp-content/uploads/2016/06/Completo-Italiano-Chilean-Italian-Style-Hot-Dog-2-of-3-1.jpg' },
    { name: 'Hamburguesa', category: 'FAST FOOD', price: 3500, stock: 9, color: '#800080', image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg' },
    { name: 'Fajita de pollo', category: 'FAST FOOD', price: 3900, stock: 7, color: '#00FF00', image: 'https://www.superpollo.cl/img/recetas/fajitas-pollo.webp' },
    { name: 'Arroz con tuto de pollo', category: 'JUNAEB', price: 3200, stock: 11, color: '#FFA500', image: 'https://img-global.cpcdn.com/recipes/9d18dad1793c9acf/680x482cq70/pollo-al-jugo-con-arroz-graneado-foto-principal.jpg' },
    { name: 'Fideos con salsa y pollo', category: 'FUNCIONARIO', price: 3500, stock: 8, color: '#FFD700', image: 'https://assets.unileversolutions.com/recipes-v2/240604.jpg' },
    { name: 'Pastel de choclo', category: 'EJECUTIVO', price: 3700, stock: 9, color: '#00FF00', image: 'https://www.superpollo.cl/img/recetas/Pastel_Choclo_1.jpg' },
    { name: 'Papas doradas con salmón', category: 'EJECUTIVO', price: 5200, stock: 5, color: '#ADD8E6', image: 'https://imag.bonviveur.com/salmon-al-horno-con-patatas.jpg' },
  ];

  // Extraer categorías únicas
  const categories = [...new Set(menusData.map((menu) => menu.category))];

  const [orders, setOrders] = useState<Order[]>([]);

  const handleOrderMenu = (menu: MenuItem) => {
    const newOrder: Order = {
      id: uuidv4(),
      items: [{ name: menu.name, quantity: menu.quantity || 1 }],
      status: 'pending',
      time: new Date().toLocaleString(),
    };
    setOrders([...orders, newOrder]);
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: 'cancelled' } : order)));
  };

  return (
    <div className="font-sans">
      <Header />
      <div className="p-6">
        {categories.map((category) => (
          <MenuCategory
            key={category}
            category={category}
            menus={menusData.filter((menu) => menu.category === category)}
            onOrderMenu={handleOrderMenu}
          />
        ))}
      </div>
      <Footer />
      <OrderList orders={orders} onCancelOrder={handleCancelOrder} />
    </div>
  );
};

export default Home;