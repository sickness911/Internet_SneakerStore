import "./style.css"
import {useEffect, useState} from "react";


function ProductsList(props) {

    const [productsList, setProductsList] = useState([
        {id:1, name:"Air Max 97", price:139, imgUrl:"img/nikes2.png"},
        {id:2, name:"React Presto", price:99, imgUrl:"img/nikes3.png"},
        {id:3, name:"KD13 RP", price:299, imgUrl:"img/nikes4.png"},
        {id:4, name:"Revolution", price:149, imgUrl:"img/nikes5.png"},
        {id:5, name:"Mk2", price:239, imgUrl:"img/nikes6.png"},
        ]);

    const [newProductsList, setNewProductsList] = useState([
        {id:1, name:"Air Max 97", imgUrl:"img/nikes2.png"},
        {id:2, name:"React Presto", imgUrl:"img/nikes3.png"},
    ]);
    const [binList, setBinList] = useState(setOrNull());
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('orderList', JSON.stringify(binList))
        getTotal();
    }, [update]);

    async function getTotal() {
        let total = 0;
        await binList.forEach(order => {
            total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
        })
        setTotal(total)
    }
    function setOrNull() {
        if (localStorage.getItem('orderList') === null){
            let order = [];
            productsList.forEach(product => {
                order.push({id: product.id, count:0})
            })
            return order
        }
        else {
            return JSON.parse(localStorage.getItem('orderList'));
        }
    }

    const addItemToOrder = (id) =>(e) => {
        e.preventDefault()
        console.log(binList)
        binList.forEach(item => {
                if(item.id == id){
                    item.count++;
                    console.log("++");
                    setUpdate(update+1);
                }
            }
        )
    }
    const removeItemFromOrder = (id) =>(e) => {
        e.preventDefault()
        binList.forEach(item => {
                if(item.id == id){
                    if(item.count > 0){
                        item.count--;
                        console.log("--");
                        setUpdate(update+1);
                    }
                }
            }
        )
    }

    if(props.variant == "main"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="shop__card" key={product.id}>
                            <div className="shop__image"><img src={product.imgUrl} alt="" /></div>
                            <div className="shop__info">
                                <p>{product.name}</p><span>${product.price}</span><a href="" onClick={addItemToOrder(product.id)}> <img src="img/stroke.png" alt="" /></a>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
    else if(props.variant == "new"){
        return(
        <>
            {
                newProductsList.map((product, index) =>(
                    <div className="new__block" key={product.id}>
                        <div className="new__text">
                            <h2>NEW</h2>
                            <p>{product.name}</p><a href="" onClick={addItemToOrder(product.id)}> <img src="img/stroke.png" alt="" /></a>
                        </div>
                        <div className="new__image"><img src={product.imgUrl} alt="" /></div>
                    </div>
                ))
            }
        </>
        )
    }
    else if(props.variant == "bin"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="forms__product" key={product.id}>
                            <img src={product.imgUrl} alt="" />
                            <div className="products__aboutbread">
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                            </div>
                            <div className="products__count">
                                <a href="" onClick={removeItemFromOrder(product.id)}>-</a>
                                <p>{binList[index].count}</p>
                                <a href="" onClick={addItemToOrder(product.id)}>+</a>
                            </div>
                        </div>
                    ))
                }
                <div className="forms__total">
                    <p>Total: {total}$</p>
                </div>
            </>
        )
    }
}
export default ProductsList