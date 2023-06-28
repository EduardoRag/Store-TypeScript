import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function AddProduct() {

  return (
    <div className={styles.container}>
      <div className={styles['sub-title']}>
        <h2>Adicionar Produto</h2>
      </div>

      <div className={styles['content-form']}>
        <form>
          <div className={styles['form-inputs']}>
            <div className={styles['input-label']}>
              <label htmlFor='name'>
                Nome do produto
              </label>
              <input type='text' id='name' />
            </div>
            <div className={styles['content-price-stock']}>
              <div className={styles['input-label']}>
                <label htmlFor='price'>Preço</label>
                <input type='number' placeholder='R$' id='price' />
              </div>
              <div className={styles['input-label']}>
                <label htmlFor='stock'>Estoque</label>
                <input type='number' placeholder='Un' id='stock' />
              </div>
            </div>
            <div className={styles['input-label']}>
              <label htmlFor='product'>Descrição do produto</label>
              <input type='text' id='product' />
            </div>
            <div className={styles['input-label']}>
              <label htmlFor='image'>Imagem</label>
              <input type='text' id='image' />
            </div>
          </div>

          <div className={styles['horizontal-line']} />

          <div className={styles['content-buttons']}>
            <Link to='/main'>
              Cancelar
            </Link>
            <button
              className='btn-blue'
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;