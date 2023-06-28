import ProductType from '../../types/ProductType';
import styles from './styles.module.scss';

type Props = {
    product: ProductType
}

function ProductCard({ product }: Props) {
    return (
        <div className={styles.container}>
            <img
                src={product.image}
                alt='product'
            />

            <div className={styles['content-infos']}>
                <h1>
                    {product.name}
                </h1>
                <p>
                    {product.description}
                </p>
                <div className={styles['content-price-qty']}>
                    <span>
                        {product.stock}
                    </span>
                    <strong>
                        R$ {product.value}
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;