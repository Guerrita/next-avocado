import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <section className='aura'>

    <div className='nav-list aura' style={{border: '2px solid var(--aura-cold-grey)', height:'fit-content', borderRadius:'var(--aura-radius)' }}>
      <p className='bold'>
        Sub total:
        {` ${totalAmount}`}
      </p>
      <button className='button-fill'>
        Check out
      </button>
    </div>
    </section>
  )
}

export default CartSummary
