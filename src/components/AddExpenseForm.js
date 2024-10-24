import { useState } from 'react';
import axios from 'axios';

const AddExpenseForm = ({ eventId }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [paidBy, setPaidBy] = useState('');
  const [sharedBy, setSharedBy] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/api/events/${eventId}/expenses`, { description, amount, paidBy, sharedBy });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Paid By" onChange={(e) => setPaidBy(e.target.value)} />
      <input type="text" placeholder="Shared By" onChange={(e) => setSharedBy(e.target.value.split(','))} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;