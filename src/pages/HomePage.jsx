import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import DeleteButton from '../components/DeleteButton';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'contactvault.contacts';
const reader = new FileReader();
const HomePage = () => {
  const [contacts, setContacts] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const contactsFromStorage = JSON.parse(raw);

      if (Array.isArray(contactsFromStorage)) {
        return contactsFromStorage;
      } else {
        return [];
      }
    } catch {
      return [];
    }
  });

  const [editingContact, setEditingContact] = useState(null);

  let deleteContact = function (keyValue) {
    setContacts((prev) => prev.filter((c) => c.id !== keyValue));
    if (editingContact?.id == keyValue) {
      setEditingContact(null);
    }
  };

  function upsertContact(contact) {
    setContacts((prev) => {
      const withoutContact = prev.filter((c) => c.id !== contact.id);
      return [...withoutContact, contact];
    });
    setEditingContact(null);
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function onCancel() {
    setEditingContact(null);
  }

  function editContact(contact) {
    setEditingContact(contact);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {editingContact ? (
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
        key={editingContact?.id || ''}
        editingContact={editingContact}
        onAddContact={upsertContact}
      />
      <ContactsList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={editContact}
        display={editingContact ? 'hidden' : 'flex'}
      />
    </div>
  );
};

export default HomePage;
