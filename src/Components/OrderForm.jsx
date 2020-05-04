import React, { useState, useEffect } from 'react'
import { Input, Button, FormGroup, Label, CustomInput } from 'reactstrap'

export default function OrderForm({ order, setOrder }) {

  const initialState = {
    name: '',
    size: '',
    sauce: '',
    toppingsChecked: [
      { name: 'Pepperoni', isChecked: false },
      { name: 'Sausage', isChecked: false },
      { name: 'Canadian Bacon', isChecked: false },
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
    console.log(e.target.value);

  }
  return (
    <form>
      <FormGroup>
        <legend>Your Name</legend>
        <Input type="text" placeholder="Your Name" onChange={handleChange} value={formState.name} />
      </FormGroup>

      <FormGroup>
        <legend>Select Size</legend>
        <Input type="select" onChange={handleChange} value={formState.size}>
          <option value="">Select Pizza Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <legend>Add Toppings</legend>
        {formState.toppingsChecked.map(toppings => {
          return (
            <Label for={toppings.name}>
              <Input type="checkbox" checked={toppings.isChecked} name="toppingsChecked" id={toppings.name} onChannge={handleChange} />
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
