import React from 'react'
import Link from 'next/link'
import { Item, Loader } from 'semantic-ui-react'
import { CartItemType } from '@store/Cart'
import Grid from '@aura-design/system/dist/components/grid'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />

  if (items.length === 0)
    return (
      <section
        className="aura yellow"
        style={{ borderRadius: 'var(--aura-radius)' }}
      >
        <p>Your cart is empty</p>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </section>
    )

  /*const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem

      return (
        <Grid col="two" key={id}>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            <Link href="/product/[id]" as={`/product/${id}/`} passHref>
              {name}
            </Link>
            <p>
              `${quantity} x ${price}`
            </p>
            <p></p>
            <button onClick={() => removeFromCart(cartItem)}>X</button>
          </div>
        </Grid>
      )
    })

  return mapCartItemsToItems*/
}

export default CartItemList
