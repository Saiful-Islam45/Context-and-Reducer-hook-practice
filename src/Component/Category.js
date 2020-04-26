import React, { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../App';
import CatDetails from './CatDetails';
const allPds = [{name:"dell",cat:"laptop"}, {name:"hp",cat:"laptop"},{name:"lenevo",cat:"laptop"},
    {name:"nokia",cat:"mobile"}, {name:"asus",cat:"mobile"},{name:"mi",cat:"mobile"}
];
const Category = () => {
    const[cat]=useContext(CategoryContext);
    const [pd,setPd]=useState([]);
    useEffect(()=>{
        const product = allPds.filter(p=> p.cat=== cat);
        setPd(product);
    },[cat])
    return (
        <div>
            <h1>category World:</h1>
            {
                pd.map((pd,i)=><CatDetails key={i} product={pd}></CatDetails>)
            }
        </div>
    );
};

export default Category;