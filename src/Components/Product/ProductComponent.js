import React from 'react'
import AllProduct from './AllProduct'
import Header from '@/Layout/Header'

function ProductComponent() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:'15%'}}>
            <AllProduct/>
        </div>
    </div>
  )
}

export default ProductComponent