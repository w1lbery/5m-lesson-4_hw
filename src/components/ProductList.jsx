import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Список товаров</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Купить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;