import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import DeleteButton from '../components/DeleteButton';
import { useState } from 'react';

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  let deleteContact = function (keyValue) {
    setContacts((prev) => prev.filter((c) => c.id !== keyValue));
    setIsEdited(false);
    setEditingContact(null);
  };

  function upsertContact(contact) {
    setContacts((prev) => {
      const withoutContact = prev.filter((c) => c.id !== contact.id);
      setIsEdited(false);
      setEditingContact(null);
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
            Cancel
          </button>

          <DeleteButton onDelete={deleteContact} keyValue={editingContact.id} />
        </div>
      ) : (
        <></>
      )}
      <AddContact
        key={editingContact?.id || crypto.randomUUID()}
        editingContact={editingContact}
        onAddContact={upsertContact}
        isEdited={isEdited}
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
