import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <header className='green'>
      <nav className="smush aura">
        <ul className="nav-list">
          <li className="item ononeline pointer">
            <Link href="/" passHref>
              <div className='valign halo'>
                Avo
                <Avocado />
                Store
              </div>
            </Link>
          </li>
          <li className="item pointer">
            <Link href="/cart" passHref>
              <a><ShoppingCartIcon cartCount={cartCount} name="Canasta" /></a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
