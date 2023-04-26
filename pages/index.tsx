import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import Loader from '@components/Loader/Loader'
import ProductList from '@components/ProductList/ProductList'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })

      setLoading(false)
  }, [])

  return (
    <Layout>
      <Header />
      {loading && <Loader/> ||
      <ProductList products={productList} />}
    </Layout>
  )
}

export default HomePage
