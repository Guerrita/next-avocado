import React from 'react'

type CartSummaryProps = {
  totalAmount: number
  subTotal: number
}

const CartSummary = ({ totalAmount, subTotal }: CartSummaryProps) => {
  return (
    <section className='aura'>

    <div className='nav-list aura' style={{border: '2px solid var(--aura-cold-grey)', height:'fit-content', borderRadius:'var(--aura-radius)' }}>
      <p className='bold'>
        Sub total:
        {` ${totalAmount} `}
        avocados for $
        {` ${subTotal} `}
      </p>
      <button className='button-fill'>
        Check out
      </button>
    </div>
    </section>
  )
}

export default CartSummary
