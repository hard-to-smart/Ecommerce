import { CardBody, CardFooter, CardHeader } from '@material-tailwind/react'
import React from 'react'

const ProductCard = () => {
  return (
    <Card>
        <CardHeader>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter>
            <button>Add to cart</button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard