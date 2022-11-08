

function Nav({ handleelectronics, handlejewelery, handlemens, handlewomens, handleAll }) {
    return (
        <>
            <div className="nav-wrapper">
                <div className="container">
                    <h1>Our Products</h1>
                    <div className="line"></div>
                    <div className="menu-list">
                        <ul>
                            <li onClick={(e) => handleAll(e)}>All</li>
                            <li onClick={(e) => handleelectronics(e)}>Electronics</li>
                            <li onClick={(e) => handlejewelery(e)}>Jewelery</li>
                            <li onClick={(e) => handlemens(e)}>Mens clothing</li>
                            <li onClick={(e) => handlewomens(e)}>Womens clothing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;