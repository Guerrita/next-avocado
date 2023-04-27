import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

//Metodo Obbligatorio para las paginas dinamicas

export const getStaticPaths = async () => {
  const response = await fetch('https://avos.andresguerramontoya.com/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  const paths = productList.map((product=> ({
    params:{
      id: product.id
    }
  })))
  return {
    paths,
    //Incremental static generation
    //En False hace que cualquier pagina que no se especifique dentro 
    //de los paths dara un error 404
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
  const id = params?.id as string
  const response = await fetch(
    `https://avos.andresguerramontoya.com/api/avo/${id}`
  )
  const product:  TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
