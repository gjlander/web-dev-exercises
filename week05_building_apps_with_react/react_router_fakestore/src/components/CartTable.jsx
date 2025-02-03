import TableRow from './TableRow';
const CartTable = ({ products }) => {
    return (
        <div className='overflow-x-auto border-2 rounded-lg'>
            <table className='table'>
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => (
                        <TableRow key={prod.id} {...prod} />
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total cost: 730€</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default CartTable;
