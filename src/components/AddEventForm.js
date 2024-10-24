import { useState } from 'react';
import axios from 'axios';

const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const addParticipant = () => setParticipants([...participants, { name: '', balance: 0 }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/events', { eventName, participants, totalBill });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Name" onChange={(e) => setEventName(e.target.value)} />
      <button type="button" onClick={addParticipant}>Add Participant</button>
      {participants.map((participant, index) => (
        <input key={index} type="text" placeholder="Participant Name" onChange={(e) => {
          const newParticipants = [...participants];
          newParticipants[index].name = e.target.value;
          setParticipants(newParticipants);
        }} />
      ))}
      <input type="number" placeholder="Total Bill" onChange={(e) => setTotalBill(e.target.value)} />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default AddEventForm;