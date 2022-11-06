
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useAuthDispatch, useAuthState } from './Context/context';


function Product({ props }) {
    const context = useAuthState();
    const dispatch = useAuthDispatch();

    function count(id) {
        const { value } = context;

        if (!value.length) {
            dispatch({ type: "addToCard", id, count: 0 })

        } else {

            value.map((data, index) => {
                
                if (data.id === id) {
                    dispatch({ type: "sameCard", id: data.id, value, index })
                }
                else {
                    dispatch({ type: "addToCard", id, count: 0 })
                }
            })
        }
    }


    function handleBuy(id) {

        if (context.products.length) {
            context.products.map((data) => {
                if (data.id === id) {
                    count(id)

                    data.rating.count = data.rating.count - 1;
                    dispatch({ type: "buy", data: data })
                }
            })
            dispatch({ type: "ReadData", data: context.products })
        }
    }

    return (
        <div className="card-container">
            <div className="plus" onClick={() => handleBuy(props.id)}><FaPlus /></div>
            <div className="minus"><FaMinus /></div>
            <div className="img">
                <img src={props.image} alt="" />
            </div>
            <div className="priceBody">
                <p className='title'> {props.title}</p>
                <p className='price'>{`${props.price}$`}</p>
            </div>
            <div className="text">{props.description}</div>
        </div>
    );
}

export default Product;