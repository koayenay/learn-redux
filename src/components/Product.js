import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import "./product.css"
const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

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
          <Button variant='primary'>Add To Cart</Button>
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
