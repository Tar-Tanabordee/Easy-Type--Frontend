import useAuth from '../../hooks/use-auth';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/use-product';
import { getAccessToken } from '../../utils/local-storage';
import AddItemContainer from './AddItemContainer';
import ItemContainer from './ItemContainer';
import EditDropDown from './EditDropDown';
import { Fragment, useState } from 'react';
import Modal from '../Modal';
import AddProductForm from './AddProductForm';

export default function ItemList() {
  const { selectedCategory } = useProduct();
  const { authUser } = useAuth();
  const [showProductModal, setShowProductModal] = useState('');
  return (
    <div className="flex flex-wrap gap-6">
      {!getAccessToken() || authUser.role === 'USER' ? null : (
        <AddItemContainer />
      )}
      {selectedCategory.map((product) => (
        <Fragment key={product.id}>
          <div className="relative transform transition-all hover:-translate-y-2 duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 rounded-[56px]">
            <div className="absolute top-8 right-8 z-50 max-w-fit max-h-fit rounded-full px-4 py-1 text-2xl cursor-pointer ">
              {!getAccessToken() || authUser.role === 'USER' ? null : (
                <EditDropDown
                  product={product}
                  onClick={() => setShowProductModal(product.id)}
                />
              )}
            </div>
            <Link to={`/product/${product.id}`}>
              <ItemContainer product={product} />
            </Link>
          </div>
          {showProductModal === product.id ? (
            <Modal isVisible={true} onClose={() => setShowProductModal('')}>
              <AddProductForm
                product={product}
                onClose={() => setShowProductModal(false)}
              />
            </Modal>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
