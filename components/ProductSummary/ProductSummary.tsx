import React from 'react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'
import Grid from '@aura-design/system/grid'
import Image from 'next/image'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <section className="smush pad">
    <Grid col="two">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <div>
        <Grid col="one">
          <h2>{product.name}</h2>
          <div>
            <p>{product.price}</p>
            <p
              className="aura cold-grey m0"
              style={{
                fontSize: '0.8rem',
                width: 'fit-content',
                borderRadius: ' var(--aura-button-radius)',
              }}
            >{`SKU: ${product.sku}`}</p>
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
