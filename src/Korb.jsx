
import { useAuthDispatch, useAuthState } from "./Context/context";
import { AiFillDelete } from "react-icons/ai";

function Korb() {

    const { products, value } = useAuthState();
    const dispatch = useAuthDispatch();

    let KorbProduct = [];
    products.map((data) => {
        value.map((val) => {
            if (data.id === val.id) {
                KorbProduct.push(data);
            }
        })
    })

    function handleDelete(id) {
        dispatch({ type: "deleteProduct", id })
    }

    return (
        <>
            <div className="korb-container">
                {
                    KorbProduct.map((data) => {
                        console.log((data.count));
                        if (data.count !== 0) {

                            return (
                                <>
                                    <div key={data.id} className="buyed">
                                        <img src={data.image} alt="" />
                                        <p>{data.title}</p>
                                        {
                                            value.map((counts) => {
                                                if (counts.id === data.id) {
                                                    return (
                                                        <>
                                                            <p className="count">{counts.count}</p>
                                                            <AiFillDelete className="delete-icon" onClick={() => handleDelete(counts.id)} />
                                                        </>
                                                    )
                                                }
                                            })
                                        }

                                    </div>
                                </>)
                        }

                    })
                }
            </div>


        </>
    );

}

export default Korb;