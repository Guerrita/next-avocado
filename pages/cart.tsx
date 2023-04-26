import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'
import Separator from '@aura-design/system/dist/components/separator'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <div className='smush pad valign' style={{height: 'calc(100vh - 292px)'}}>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Separator/>
      <CartSummary totalAmount={count} />

      </div>
    </Layout>
  )
}

export default CartPage
