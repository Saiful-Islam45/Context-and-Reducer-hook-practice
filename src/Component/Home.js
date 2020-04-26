import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Home = () => {
    
const[cat, SetCat] =useContext(CategoryContext);
    return (
        <div style={{border:'1px solid purple'}}>
            <h1>This is home Page:</h1>
            <button className="btn btn-primary" onClick={()=>SetCat('laptop')}>Laptop</button>
            <button className="btn btn-danger" onClick={()=>SetCat('mobile')}>Mobile</button>
        </div>
    );
};

export default Home;