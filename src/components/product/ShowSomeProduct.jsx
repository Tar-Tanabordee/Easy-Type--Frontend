import { Link } from 'react-router-dom';
import { ArrowButton } from '../ActionButton';
import ItemContainer from './ItemContainer';
import useProduct from '../../hooks/use-product';

export default function ShowSomeProduct({ title }) {
  const { allProducts } = useProduct();
  const someProduct = allProducts.slice(0, 4);

  return (
    <div>
      <div className="flex justify-between items-center px-40 mb-7">
        <h1 className="text-4xl">{title}</h1>
        <Link to="/store">
          <ArrowButton title="Browse all products" />
        </Link>
      </div>
      <div className="flex justify-center gap-10">
        {someProduct.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ItemContainer product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
