import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import "./product.css"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/cartSlice"
import { getProducts } from "../store/productSlice"

const Product = () => {
  const dispatch = useDispatch()
  const { data: products, status } = useSelector((state) => state.products)
  // const [products, getProducts] = useState([])

  useEffect(() => {
    // dispatch an action for fetchProducts
    dispatch(getProducts())
  }, [])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "error") {
    return <p>Something went wrong! Try again later</p>
  }
  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div className='col-md-3 mb-3'>
      <Card style={{ width: "18rem" }}>
        <div className='text-center'>
          <Card.Img
            variant='top'
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant='primary' onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>
      <h1>Product List</h1>
      <div className='row'>{cards}</div>
    </div>
  )
}

export default Product
