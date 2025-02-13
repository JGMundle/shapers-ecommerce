"use Client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useBasket } from '@/hooks/useBasket'

const UserItemScreen = () => {

    // Item handling
    const itemData = useSearchParams()
    const {addItem} = useBasket()

    // const handleAddItem = () => {
    //     addItem({
    //         id: Number(itemData.id)
    //     })
    // }

  return (
      <div>
          
    </div>
  )
}

export default UserItemScreen