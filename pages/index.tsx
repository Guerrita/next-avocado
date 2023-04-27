import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import Loader from '@components/Loader/Loader'
import ProductList from '@components/ProductList/ProductList'
import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

// export const getServerSideProps = async () => {
//   const response = await fetch('https://avos.andresguerramontoya.com/api/avo')
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     },
//   }
// }

export const getStaticProps = async () => {
  //Page only properties
  const response = await fetch('https://avos.andresguerramontoya.com/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  useEffect(() => {}, [])

  return (
    <Layout>
      <Header />
      {<ProductList products={productList} />}
    </Layout>
  )
}

export default HomePage
