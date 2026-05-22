import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import DeleteButton from '../components/DeleteButton';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    setIsEdited(false);
    setEditingContact(null);
  }, [contacts]);

  let deleteContact = function (keyValue) {
    setContacts((prev) => prev.filter((c) => c.id !== keyValue));
  };

  function upsertContact(contact) {
    setContacts((prev) => {
      const withoutContact = prev.filter((c) => c.id !== contact.id);
      return [...withoutContact, contact];
    });
  }

  function onCancel() {
    setIsEdited(false);
    setEditingContact(null);
  }

  function editContact(contact) {
    setEditingContact(contact);
    setIsEdited(true);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {isEdited ? (
        <div className="w-full flex  justify-between px-4">
          <button
            className=" h-9 rounded-lg text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 p-2 px-4 flex items-center justify-center"
            aria-label="Cancel Changes"
            onClick={() => onCancel()}
          >
            cancel
          </button>

          <DeleteButton onDelete={deleteContact} keyValue={editingContact.id} />
        </div>
      ) : (
        <></>
      )}
      <AddContact
        editingContact={editingContact}
        onAddContact={upsertContact}
      />
      <ContactsList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={editContact}
        display={isEdited ? 'hidden' : 'flex'}
      />
    </div>
  );
};

export default HomePage;
