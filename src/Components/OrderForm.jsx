import React, { useState, useEffect } from 'react'
import { Input, Button, FormGroup, Label, CustomInput } from 'reactstrap'

export default function OrderForm({ order, setOrder }) {

  const initialState = {
    name: '',
    size: '',
    sauces: [
      { name: 'Original Red', id: 'original-red', isChecked: false },
      { name: 'Spinach Alfredo', id: 'spinach-alfredo', isChecked: false },
      { name: 'Garlic Ranch', id: 'garlic-ranch', isChecked: false },
      { name: 'BBQ Sauce', isChecked: false }
    ],
    toppingsChecked: [
      { name: 'Pepperoni', id: 'pepperoni', isChecked: false },
      { name: 'Sausage', id: 'sausage', isChecked: false },
      { name: 'Canadian Bacon', id: 'canadian-bacon', isChecked: false },
      { name: 'Spicy Italian Sausage', id: 'spicy-italian-sausage', isChecked: false },
      { name: 'Grilled Chicken', id: 'grilled-chicken', isChecked: false },
      { name: 'Onions', id: 'onions', isChecked: false },
      { name: 'Green Pepper', id: 'green-pepper', isChecked: false },
      { name: 'Diced Tomatos', id: 'diced-tomatos', isChecked: false },
      { name: 'Black Olives', id: 'black-olives', isChecked: false },
      { name: 'Roasted Garlic', id: 'roasted-garlic', isChecked: false },
      { name: 'Artichoke Hearts', id: 'artichoke-hearts', isChecked: false },
      { name: 'Three Cheese', id: 'three-cheese', isChecked: false },
      { name: 'Pineapple', id: 'pineapple', isChecked: false },
      { name: 'Extra Cheese', id: 'extra-cheese', isChecked: false },
    ],
    substitute: '',
    instructions: '',
    quantity: ''
  }

  const [formState, setFormState] = useState(initialState);

  const handleChange = e => {
    let newFormState;
    if (e.target.type === 'checkbox') {
      newFormState = {
        ...formState,
        toppingsChecked: formState.toppingsChecked.map(topping => {
          return (
            topping.name === e.target.id ? {
              ...topping, isChecked: !topping.isChecked
            } : { ...topping }
          )
        })
      }
    } else if (e.target.type === 'radio') {
      // name = 'sauce'

    } else {

    }
    setFormState(newFormState)
  }
  return (
    <form style={{ padding: '40px' }}>
      <FormGroup>
        <legend>Your Name</legend>
        <Input type="text" placeholder="Your Name" value={formState.name} onChange={handleChange} name="name" />
      </FormGroup>

      <FormGroup>
        <legend>Select Size</legend>
        <Input type="select" onChange={handleChange} value={formState.size} name="size">
          <option value="">Select Pizza Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Input>
      </FormGroup>

      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Choice of Sauce</legend>

        {formState.sauces.map(sauce => {
          return (
            <Label for={sauce.id} check>
              <Input type="radio" name="sauce" id={sauce.id} onChange={handleChange} />
              {sauce.name}
            </Label>
          )
        })}

      </FormGroup>

      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Add Toppings</legend>
        {formState.toppingsChecked.map(toppings => {
          return (
            <Label for={toppings.name}>
              <Input
                type="checkbox"
                checked={toppings.isChecked} name="toppingsChecked"
                id={toppings.name}
                onChange={handleChange}
              />
              {toppings.name}
            </Label>
          )
        })}
      </FormGroup>

      <FormGroup>
        <legend>Choice of Substitute</legend>
        <CustomInput type="switch" label="Gluten Free Crust (+ $1.00" value={formState.substitute} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" value={formState.instructions} onChange={handleChange} placeholder="Anything else you'd like to add?" />
      </FormGroup>
    </form>
  )
}
