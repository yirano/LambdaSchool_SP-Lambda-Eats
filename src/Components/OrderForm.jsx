import React, { useState, useEffect } from 'react'
import { Input, Button, FormGroup, Label, CustomInput } from 'reactstrap'

export default function OrderForm({ order, setOrder }) {

  const initialState = {
    name: '',
    size: '',
    sauce: [
      { name: 'Original Red', id: 'original-red', isChecked: false },
      { name: 'Spinach Alfredo', id: 'spinach-alfredo', isChecked: false },
      { name: 'Garlic Ranch', id: 'garlic-ranch', isChecked: false },
      { name: 'BBQ Sauce', isChecked: false }
    ],
    toppingsChecked: [
      { name: 'Pepperoni', id: 'pepperoni', isChecked: false },
      { name: 'Sausage', id: 'sausage', isChecked: false },
      { name: 'Canadian Bacon', id: 'canadian-bacon', isChecked: false },
      { name: 'Spicy Italian Sausage', isChecked: false },
      { name: 'Grilled Chicken', isChecked: false },
      { name: 'Onions', isChecked: false },
      { name: 'Green Pepper', isChecked: false },
      { name: 'Diced Tomatos', isChecked: false },
      { name: 'Black Olives', isChecked: false },
      { name: 'Roasted Garlic', isChecked: false },
      { name: 'Artichoke Hearts', isChecked: false },
      { name: 'Three Cheese', isChecked: false },
      { name: 'Pineapple', isChecked: false },
      { name: 'Extra Cheese', isChecked: false },
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

      <FormGroup check>
        <legend>Choice of Sauce</legend>
        <Label for="original-red" check>
          <Input type="radio" name="sauce" id="original-red" onChange={handleChange} />
        Original Red
        </Label>
        <Label for="garlic-ranch" check>
          <Input type="radio" name="sauce" id="garlic-ranch" onChange={handleChange} />
        Garlic Ranch
        </Label>
        <Label for="bbq-sauce" check>
          <Input type="radio" name="sauce" id="bbq-sauce" onChange={handleChange} />
        BBQ Sauce
        </Label>
        <Label for="spinach-alfredo" check>
          <Input type="radio" name="sauce" id="spinach-alfredo" onChange={handleChange} />
        Spinach Alfredo
        </Label>
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
