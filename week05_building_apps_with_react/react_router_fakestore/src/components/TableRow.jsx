const TableRow = ({ image, title, category }) => {
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
                <button className='btn btn-primary'>Add to cart</button>
            </td>
            <td>450 €</td>
        </tr>
    );
};

export default TableRow;
