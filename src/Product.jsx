

import { FaPlus, FaMinus } from 'react-icons/fa'
import { useAuthDispatch, useAuthState } from './Context/context';


function Product({ props }) {

    const context = useAuthState();
    const dispatch = useAuthDispatch();
    const { value } = context;




    function count(id) {

        let ids = [];
        value.map((data) => {
            if (Object.values(data).includes(id)) {
                data.count += 1;
            }

            ids.push(data.id)

        })
        if (!ids.includes(id)) {
            value.push({ id, count: 1 })
        }

    }



    function handleBuy(id) {
        if (context.products.length) {
            context.products.map((data) => {
                if (data.id === id) {

                    count(id)

                    data.rating.count = data.rating.count - 1;
                    dispatch({ type: "buy", data: data })
                    return data;
                }
            })
        }
    }

    function handleDelete(id) {
        value.map((element) => {
            if (element.id === id) {
                if (element.count > 0) {
                    element.count -= 1;
                    dispatch({ type: "reRender" })
                }
                if (element.count === 0) {
                    dispatch({ type: "deleteProduct", id })
                }
            }
        })

    }

    return (
        <>
            <div className="card-container">
                <div className="plus" onClick={() => handleBuy(props.id)}><FaPlus /></div>
                <div className="minus" onClick={() => handleDelete(props.id)}> <FaMinus /></div>
                <div className="img">
                    <img src={props.image} alt="" />
                </div>
                <div className="priceBody">
                    <p className='title'> {props.title}</p>
                    <p className='price'>{`${props.price}$`}</p>
                </div>
                <div className="text">{props.description}</div>
            </div>
        </>
    );
}

export default Product;