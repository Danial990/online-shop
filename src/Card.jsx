import { useState, useEffect } from 'react';
import { fetchDataElectronics, fetchDataJewelery, fetchDataMens, fetchDataWomens } from './axios';
import Nav from "./Nav";
import { FaCartPlus } from 'react-icons/fa'
import Product from './Product';
import { useAuthDispatch, useAuthState } from './Context/context';
import Korb from './Korb';
import axios from 'axios';


function Card() {

    const context = useAuthState();
    const dispatch = useAuthDispatch()

    const [showCard, setShowCard] = useState(false);

    const [electronics, setElectronics] = useState([]);
    const [jewelery, setJewelery] = useState([]);
    const [mens, setMens] = useState([]);
    const [womens, setWomens] = useState([]);


    const [showAll, setShowAll] = useState("All");
    const [showElectronics, setshowElectronics] = useState();
    const [showJewelery, setShowJewelery] = useState();
    const [showMens, setShowMens] = useState();
    const [showWomens, setShowWomens] = useState();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            dispatch({ type: "ReadData", data: data })
        }
        getData();
    }, []);


    useEffect(() => {
        fetchDataElectronics().then(res => setElectronics(res));
        fetchDataJewelery().then(res => setJewelery(res));
        fetchDataMens().then(res => setMens(res));
        fetchDataWomens().then(res => setWomens(res));
    }, [showAll]);


    const handleAll = (e) => {
        setShowAll(e.target.innerHTML);

    }

    const handleelectronics = (e) => {
        setshowElectronics(e.target.innerHTML);
        setShowJewelery("");
        setShowMens("");
        setShowWomens("");
        setShowAll("");

    }

    const handlejewelery = (e) => {
        setShowJewelery(e.target.innerHTML);
        setshowElectronics("");
        setShowMens("");
        setShowWomens("");
        setShowAll("");

    }

    const handlemens = (e) => {
        setShowMens(e.target.innerHTML);
        setshowElectronics("");
        setShowJewelery("");
        setShowWomens("");
        setShowAll("");

    }

    const handlewomens = (e) => {
        setShowWomens(e.target.innerHTML);
        setshowElectronics("");
        setShowJewelery("");
        setShowMens("");
        setShowAll("");

    }


    function handleShowKorb() {
        setShowCard(!showCard)
    }

    return (
        <>
            <Nav
                handleelectronics={handleelectronics}
                handlejewelery={handlejewelery}
                handlemens={handlemens}
                handlewomens={handlewomens}
                handleAll={handleAll}
            />
            <div className="test">

                <div className='korb' onClick={() => handleShowKorb()}><FaCartPlus size={40} />
                    <div className="count">{context.cards.length}</div>
                </div>
            </div>

            {
                (showCard) && <Korb />
            }

            <div className="card-wrapper">
                {

                    (showAll === "All" || showElectronics === "Electronics") &&
                    electronics.map((data) => {

                        return (
                            <Product key={data.id} props={data} />
                        )
                    })
                }
                {
                    (showAll === "All" || showJewelery === "Jewelery") &&
                    jewelery.map((data) => {

                        return (
                            <Product key={data.id} props={data} />
                        )
                    })
                }
                {
                    (showAll === "All" || showMens === "Mens clothing") &&
                    mens.map((data) => {
                        return (
                            <Product key={data.id} props={data} />
                        )
                    })
                }
                {
                    (showAll === "All" || showWomens === "Womens clothing") &&
                    womens.map((data) => {
                        return (
                            <Product key={data.id} props={data} />
                        )
                    })
                }
            </div>

        </>
    );
}

export default Card;
