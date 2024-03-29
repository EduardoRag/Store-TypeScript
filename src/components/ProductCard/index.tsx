import ProductType from '../../types/ProductType';
import styles from './styles.module.scss';
import RemoveIcon from '../../assets/remove.svg';
import { useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { formatToMoney } from '../../helpers/formatter';

type Props = {
    product: ProductType
}

function ProductCard({ product }: Props) {
    const { handleOpenModal } = useGlobalContext();
    const [showDelete, setShowDelete] = useState(false);


    return (
        <div
            className={styles.container}
            onMouseOver={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            {showDelete &&

                <img
                    className={styles.remove}
                    src={RemoveIcon}
                    alt='Remove Icon'
                    onClick={() => handleOpenModal(product.id)}
                />
            }

            <img
                className={styles['card-image']}
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
                        {formatToMoney(product.value)}
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;