import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import { useState } from 'react';

const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  let deleteContact = function (keyValue) {
    setContacts((prev) => prev.filter((c) => c.id !== keyValue));
  };

  function handleAddContact(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <AddContact contacts={contacts} onAddContact={handleAddContact} />
      <ContactsList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default HomePage;
