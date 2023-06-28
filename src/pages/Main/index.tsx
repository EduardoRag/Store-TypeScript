import ProductCard from '../../components/ProductCard';
import styles from './styles.module.scss';
import products from '../../data/products';
import { useState } from 'react';
import ProductType from '../../types/ProductType';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState<ProductType[]>([...products]);

  return (
    <div className={styles.container}>
      <div className={styles['sub-title']}>
        <h2>Seus produtos</h2>
        <button
          className='btn-blue'
          onClick={() => navigate('/add-product')}
        >
          Adicionar Produto
        </button>
      </div>

      <div className={styles['content-products']}>
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;