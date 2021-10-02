import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {selectedProducts} from "../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log('err',err));

        dispatch(selectedProducts(response.data));
    };

    useEffect(()=> {
        if(productId && productId !== "") fetchProductDetail();
    },[productId]);

    return(
        <div>

        </div>
    );
};

export default ProductDetails;