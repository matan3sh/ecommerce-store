import { Product } from '@/types'
import React from 'react'

interface ProductListProps {
  items: Product[]
  title: string
}

const ProductList: React.FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3>{title}</h3>
    </div>
  )
}

export default ProductList
