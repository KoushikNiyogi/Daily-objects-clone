import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from '../Redux/CategoryPage/Action';
import Loading from './Loading';
import { ProductCard } from './ProductCard';



export const ProductList = () => {
    const Products=useSelector((store)=>store.ProductReducer.products);
    console.log(Products);
    const dispatch=useDispatch();

    let isLoading = useSelector((store)=>store.ProReducer);
    //console.log(load.isLoading);

    useEffect(()=>{
     dispatch(getProducts())
    },[Products.length]);

  return (  isLoading ? <Loading /> : 
    <div style={{display:'grid' , gridTemplateColumns:"repeat(4, auto)" , gap:"5px" ,}}>
        {Products.length > 0 && Products.map((el)=>{
                return <ProductCard key={el.id} {...el} />
            })
        }
    </div>
  )
};
