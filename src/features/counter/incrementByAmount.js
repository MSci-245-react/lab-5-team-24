import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './counterSlice'; // Importing actions from the counterSlice

const IncrementByAmount = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value); // Accessing counter value from state

  const handleInputChange = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const handleIncrement = () => {
    dispatch(incrementByAmount(amount));
    setAmount(0); // Reset amount input after incrementing
  };

  return (
    <div>
      <h2>Current Value: {counter}</h2>
      <input type="number" value={amount} onChange={handleInputChange} />
      <button onClick={handleIncrement}>Increment by Amount</button>
    </div>
  );
};

export default IncrementByAmount;
