import "./style.css"
import ProductsList from "./productsComponent"

function MainConponent() {

    return(
        <>
        <div className="header">
            <div className="header__body"><img src="../img/nike.png" alt="" /></div>
        </div>
        <div className="new">
            <div className="new__body">
                <ProductsList variant="new" />
            </div>
        </div>


        <div className="shop">
            <div className="shop__header">
                <h2>At the moment</h2>
                <h1>SUMMERTIME MOOD</h1>
                <p>Fight the heat in a sunny look!</p>
            </div>
            <div className="shop__body" id="shop">
                <h3>Top sneakers</h3>
                <div className="shop__cards">
                    <ProductsList variant="main" />
                </div>
            </div>
        </div>
        </>
    )
}

export default MainConponent