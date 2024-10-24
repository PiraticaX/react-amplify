import { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = ({ eventId }) => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(`/api/events/${eventId}/summary`);
      setSummary(response.data);
    };
    fetchSummary();
  }, [eventId]);

  return (
    <div>
      {summary.map((participant, index) => (
        <div key={index}>
          {participant.name} owes {participant.owes}
        </div>
      ))}
    </div>
  );
};

export default Summary;