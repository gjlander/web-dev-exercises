import { CartBtns } from '..';
import { formatPrice } from '../../utils';
const TableRow = ({ product }) => {
  const { image, title, category, count, price } = product;
  const rowPrice = formatPrice(count * price);
  return (
    <tr>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-squircle h-12 w-12'>
              <img src={image} alt={title} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{title}</div>
            <div className='text-sm opacity-50'>{category}</div>
          </div>
        </div>
      </td>
      <td>
        <CartBtns product={product} />
      </td>
      <td>{rowPrice}</td>
    </tr>
  );
};

export default TableRow;
