import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <Header />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
