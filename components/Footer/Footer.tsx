import React from 'react'
import Grid from '@aura-design/system/grid'
import Link from 'next/link'
import Separator from '@aura-design/system/separator'

const Footer = () => (
  <footer className="mt13 pad centertxt green">
    <Grid col="three">
      <div className=''>
        <h6>Services</h6>
        <Link href="/">
          All products
        </Link>
      </div>
      
      <div className=''>
        <h6>About us</h6>
        <Link href="/about">
          Know more about Avos
        </Link>
      </div>
      
      
      <div className=''>
        <h6>Links of interest</h6>
        <ul className="">
          <li className='item'>
            <a href="https://andresguerramontoya.com/">Andres Guerra Montoya</a>
          </li>
          <li className='item'>
            <a href="https://github.com/Guerrita/next-avocado">GitHub</a>
          </li>
        </ul>
      </div>
    </Grid>
    <Separator />
    <div>
      <p className='m0' style={{fontSize: "0.8rem"}}>Styles provided by{' '}
      <a
          target="_blank"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Aura Design System
        </a>
        {' from '}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.auradesignsystem.com
        </a>
        </p>
    </div>
    <div>
      <p className='m0' style={{fontSize: "0.8rem"}}>
        Icons made by{' '}
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>
        {' from '}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
      </div>
      <div>
      <p className='m0' style={{fontSize: "0.8rem"}}>
        Avocado images taken from{' '}
        <a
          className="acnor"
          target="_blank"
          href="https://www.californiaavocado.com/avocado101/avocado-varieties"
          title="California Avocado"
        >
          Avocado 101
        </a>
        {' at '}
        <a
          target="_blank"
          href="https://www.californiaavocado.com"
          title="Flaticon"
        >
          California Avocado
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
