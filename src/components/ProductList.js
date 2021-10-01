import React from "react";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const products = useSelector((state)=> state);
    return(
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );
}
export default ProductList;