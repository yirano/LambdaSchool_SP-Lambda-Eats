import React from 'react'
import styled from 'styled-components'

const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledCard = styled.div`

`

export default function Cart({ order }) {
  console.log("Cart -> order", order)
  return (
    <StyledCartContainer>
      {order.length !== 0 ?
        <>
          <h2>Congratulations! Your order is on the way!</h2>
          {order.map(o => {
            return (
              <StyledCard>
                <p>Pizza Size: {o.size}</p>
                <p>Toppings Selected: {o.toppingsChecked.map(toppings => toppings.name)} </p>
              </StyledCard>
            )
          })}
        </>
        : <h2>Your Cart is empty!</h2>}
    </StyledCartContainer>
  )
}
