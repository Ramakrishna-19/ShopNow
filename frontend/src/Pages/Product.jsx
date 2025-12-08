// import React, {useContext} from 'react'
// import {useParams} from 'react-router-dom'
// import all_product from '../Components/Assets/all_product'
// import { ShopContext } from '../Context/ShopContext'
// import Breadcrums from '../Components/Breadcrums/Breadcrums';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
// import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

// const Product = () => {
//     const {all_product} = useContext(ShopContext);
//     const {productId } = useParams();
//     const product = all_product.find((e) => e.id === Number(productId));
//     return (
//         <div>
//             <Breadcrums product={product}/>
//             <ProductDisplay product={product}/>
//             <DescriptionBox/>
//             <RelatedProducts/>
//         </div>
//     )
// }

// export default Product

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return (
            <div style={{ padding: "40px", fontSize: "20px" }}>
                Loading product...
            </div>
        );
    }

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;

