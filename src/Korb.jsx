
import { useAuthState } from "./Context/context";


function Korb() {
    const { cards } = useAuthState();

    return (
        <>
            <div className="korb-container">
                {cards.map((data, index) => {
                    return <div key={index} className="buyed">
                        <img src={data.image} alt="" />
                        <p>{data.title}</p>
                        <p className="count">{data.count}</p>
                    </div>
                })}
            </div>


        </>
    );

}

export default Korb;