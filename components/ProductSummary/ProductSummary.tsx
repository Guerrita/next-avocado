import React from 'react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'
import Grid from '@aura-design/system/grid'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <section className='smush pad'>
    <Grid col="two">
      <div>
          <img src={product.image} alt={product.name} />
      </div>
      <div>
<Grid col='one'>
          <h2>{product.name}</h2>
          <div>
            <p>{product.price}</p>
            <p className='aura cold-grey m0' style={{fontSize:"0.8rem", width: "fit-content", borderRadius: " var(--aura-button-radius)"}}>{`SKU: ${product.sku}`}</p>
          </div>
          <div>
            <AddToCart product={product} />
          </div>
        </Grid>
      </div>
        
        
    </Grid>
    <ProductAttributes {...product.attributes} />
  </section>
)

export default ProductSummary
