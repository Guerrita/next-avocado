import React from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <section style={{minHeight: 'calc(100vh - 292px)'}}>
      {children}
    </section>
    <Footer />
  </>
)

export default Layout
