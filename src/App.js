import React from "react";
import { Route } from "react-router";
import Nav from "./Components/Nav";
import OrderForm from "./Components/OrderForm";

const App = () => {
  return (
    <>
      <Nav />

      <Route exact path="/order">
        <OrderForm />
      </Route>

    </>
  );
};
export default App;
