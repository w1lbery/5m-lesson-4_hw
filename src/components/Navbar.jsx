import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Магазин</h2>
      <p>Корзина: {cartItems.length} товаров</p>
    </div>
  );
};

export default Navbar;


