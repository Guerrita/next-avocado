import React from 'react'
import Link from 'next/link'
import  Loader  from '@components/Loader/Loader'
import { CartItemType } from '@store/Cart'
import Grid from '@aura-design/system/dist/components/grid'
import Image from 'next/image'
import Separator from '@aura-design/system/dist/components/separator'

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
  if (loading) return <Loader />

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

  return (
    <ul>
      {items.map((cartItem) => {
        const { id, name, quantity, price, image } = cartItem

        return (
          <li key={id} className='pad mt13'>
            <Grid col="two" style={{ height: '300px' }}>
              <div className="block-img">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  width={undefined}
                  height={undefined}
                />
              </div>
              <Grid col="one" className='valign'>
                <h3>

                <Link href="/product/[id]" as={`/product/${id}/`} passHref>
                  {name}
                </Link>
                </h3>
                <p>
                  {quantity} x {price}
                </p>
                <div>
                  <button
                    className="button-fill"
                    style={{ width: 'fit-content' }}
                    onClick={() => removeFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              </Grid>
            </Grid>
            <Separator/>
          </li>
        )
      })}
    </ul>
  )
}

export default CartItemList
