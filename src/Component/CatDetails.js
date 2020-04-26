import React from 'react';

const CatDetails = (props) => {
    const{name}=props.product;
    return (
        <div>
            Product Name:{name}
        </div>
    );
};

export default CatDetails;