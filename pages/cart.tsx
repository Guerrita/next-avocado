import React from 'react'
import Layout from '@components/Layout/Layout'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count, subTotal } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <div className='smush pad valign' style={{minHeight: 'calc(100vh - 292px)'}}>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <CartSummary totalAmount={count} subTotal={subTotal} />
      </div>
    </Layout>
  )
}

export default CartPage
