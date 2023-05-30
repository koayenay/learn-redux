import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { remove } from "../store/cartSlice"

const Cart = () => {
  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const removeToCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id))
  }

  const cards = products.map((product) => (
    <div className='col-md-12 mb-3'>
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
          <Button variant='danger' onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return <div className='row'>{cards}</div>
}

export default Cart
