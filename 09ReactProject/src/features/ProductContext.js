import {useContext,createContext} from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const ProductContext=createContext({
    products:[{
        id:nanoid(),
        name:"Product 1",
        price:999,
        image:"1.png"
    },
    {
        id:nanoid(),
        name:"Product 2",
        price:999,
        image:"2.png"
    }
]
})

export const useProduct=()=>
{
    return useContext(ProductContext);
}

export const ProductProvider=ProductContext.Provider;