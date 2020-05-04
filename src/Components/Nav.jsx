import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


export default function Nav() {
  return (
    <div>
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/order" data-cy="orderLink"><Button>Order</Button></Link>
      <Link to="/cart" data-cy="cartLink"><Button>Cart</Button></Link>
    </div>
  )
}
