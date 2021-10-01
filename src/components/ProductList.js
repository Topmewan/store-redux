import React, {useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";


const ProductList = () => {
    const products = useSelector((state)=> state);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err",err)
        });
        console.log(response)
    };

    useEffect(() => {
        fetchProducts();
    },[])
    return(
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
}
export default ProductList;