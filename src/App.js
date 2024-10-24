import React from 'react';
import AddEventForm from './components/AddEventForm';
import AddExpenseForm from './components/AddExpenseForm';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <h1>Bill Splitter App</h1>
      <AddEventForm />
      {/* Replace with actual event ID once the event is created */}
      <AddExpenseForm eventId="some-event-id" />
      <Summary eventId="some-event-id" />
    </div>
  );
}

export default App;