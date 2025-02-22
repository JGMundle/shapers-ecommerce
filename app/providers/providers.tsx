"use client"
import React, { ReactNode } from 'react'
import {Provider as ReduxProvider} from "react-redux"
import {store} from "@/hooks/store"
interface Props {
    children: ReactNode
}
const Providers = ({children}: Props) => {
  return (
      <ReduxProvider store={store}>
          {children}
     </ReduxProvider>
  )
}

export default Providers