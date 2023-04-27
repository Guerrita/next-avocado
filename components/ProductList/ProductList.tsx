import React from 'react'
import Grid from '@aura-design/system/grid'
import Link from 'next/link'
import Separator from '@aura-design/system/separator'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`}>
      <Grid
        col="one"
        className="valing teal-green zoom pointer"
        style={{ margin: 'auto', border: '2px solid var(--aura-green)', width: 'fit-content' }}
      >
        <Image src={image} alt={name} width={300} height={300} />
        <div>
          <h6 className="">{name}</h6>
          <Separator />
          <p className="">{price}</p>
        </div>
      </Grid>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Grid col="two" className="smush centertxt aura">
    {mapProductsToCards(products)}
  </Grid>
)

export default ProductList
