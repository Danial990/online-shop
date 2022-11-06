

function Nav({ handleelectronics, handlejewelery, handlemens, handlewomens, handleAll }) {
    return (
        <>
            <div className="nav-wrapper">
                <div className="container">
                    <h1>our Products</h1>
                    <div className="line"></div>
                    <div className="menu-list">
                        <ul>
                            <li onClick={(e) => handleAll(e)}>All</li>
                            <li onClick={(e) => handleelectronics(e)}>electronics</li>
                            <li onClick={(e) => handlejewelery(e)}>jewelery</li>
                            <li onClick={(e) => handlemens(e)}>mens clothing</li>
                            <li onClick={(e) => handlewomens(e)}>womens clothing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;