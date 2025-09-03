import React from 'react'
import { BasketItem } from '@/Statemanager/useBasket'

const ProductItem = (basket: Partial<BasketItem>) => {
  return (
      <div>
          <div>{basket.icon}</div>
    </div>
  )
}

export default ProductItem