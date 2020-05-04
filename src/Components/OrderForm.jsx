import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input, Button, FormGroup, Label, CustomInput } from 'reactstrap'

export default function OrderForm({ order, setOrder }) {

  const initialState = {
    customer: '',
    size: '',
    sauces: [
      { name: 'Original Red', id: 'original-red', isChecked: false },
      { name: 'Spinach Alfredo', id: 'spinach-alfredo', isChecked: false },
      { name: 'Garlic Ranch', id: 'garlic-ranch', isChecked: false },
      { name: 'BBQ Sauce', id: 'bbq-sauce', isChecked: false }
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
    // toppings: [],
    substitute: '',
    instructions: '',
    quantity: ''
  }

  const [formState, setFormState] = useState(initialState);

  const handleChange = e => {
    // e.persist();
    let newFormState;
    let name = e.target.name;
    if (e.target.type === 'checkbox') {
      newFormState = {
        ...formState,
        toppingsChecked: formState.toppingsChecked.map(item => {
          return (
            item.id === e.target.id ? {
              ...item, isChecked: !item.isChecked
            } : { ...item }
          )
        })
      }
    } else if (e.target.type === 'radio') {
      newFormState = {
        ...formState,
        sauces: formState.sauces.map(item => {
          return (
            item.id === e.target.id ? {
              ...item, isChecked: !item.isChecked
            } : { ...item, isChecked: false }
          )
        })
      }
    } else {
      newFormState = {
        ...formState, [e.target.name]: e.target.value
      }
    }
    setFormState(newFormState)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formState)
      .then(res => {

        console.log(res.data)
        const data = {
          ...res.data,
          sauces: res.data.sauces.filter(sauce => sauce.isChecked === true),
          toppingsChecked: res.data.toppingsChecked.filter(toppings => toppings.isChecked === true),
        }
        setOrder([...order, data])
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <form style={{ padding: '40px' }} onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <legend>Your Name</legend>
        <Input type="text" placeholder="Your Name" value={formState.customer} onChange={e => handleChange(e)} name="customer" />
      </FormGroup>

      <FormGroup>
        <legend>Select Size</legend>
        <Input type="select" onChange={e => handleChange(e)} value={formState.size} name="size">
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
            <Label htlmFor={sauce.id} check>
              <Input type="radio" name="sauces" id={sauce.id} onChange={e => handleChange(e)} value={sauce.isChecked} checked={sauce.isChecked} />
              {sauce.name}
            </Label>
          )
        })}
      </FormGroup>

      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Add Toppings</legend>
        {formState.toppingsChecked.map(toppings => {
          return (
            <Label htmlFor={toppings.id}>
              <Input
                type="checkbox"
                checked={toppings.isChecked} name="toppingsChecked"
                id={toppings.id}
                onChange={e => handleChange(e)}
              />
              {toppings.name}
            </Label>
          )
        })}
      </FormGroup>

      <FormGroup>
        <legend>Choice of Substitute</legend>
        <CustomInput type="switch" label="Gluten Free Crust (+ $1.00" value={formState.substitute} name="substitute" onChange={e => handleChange(e)} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="instructions" value={formState.instructions} onChange={e => handleChange(e)} placeholder="Anything else you'd like to add?" />
      </FormGroup>

      <Button type="submit">Place your order!</Button>
    </form>
  )
}
