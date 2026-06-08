import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'contactvault.contacts';

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

  const [customRouter, setCustomRouter] = useState('contactsPage');
  const [editingContact, setEditingContact] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filterState, setFilterState] = useState('All');
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const activeTagName = document.activeElement?.tagName;
      if (activeTagName === 'INPUT' || activeTagName === 'TEXTAREA') {
        return;
      }

      if (event.key === '/') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const deleteContact = useCallback(
    (keyValue) => {
      setContacts((prev) => prev.filter((c) => c.id !== keyValue));

      if (editingContact?.id == keyValue) {
        setEditingContact(null);
      }
    },
    [editingContact],
  );

  const gotoContactsPage = () => {
    setCustomRouter('contactsPage');
  };

  const upsertContact = (contact) => {
    setContacts((prev) => {
      const withoutContact = prev.filter((c) => c.id !== contact.id);
      return [...withoutContact, contact];
    });

    setEditingContact(null);
    setCustomRouter('contactsPage');
  };

  const onCancel = () => {
    setEditingContact(null);
    setCustomRouter('contactsPage');
  };

  const gotoAddContact = () => {
    setEditingContact(null);
    setCustomRouter('formPage');
  };

  const gotoEditContact = useCallback((contact) => {
    setEditingContact(contact);
    setCustomRouter('formPage');
  }, []);

  const visibleContacts = useMemo(() => {
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(searchInput.trim().toLowerCase()),
    );
  }, [contacts, searchInput]);

  const filteringContacts = useCallback((newValue) => {
    setFilterState(newValue);
  }, []);

  const onToggleFavorites = useCallback((contact) => {
    setContacts((users) => {
      const toogleFav = users.map((user) => {
        if (user.id === contact.id) {
          return { ...user, favourite: !user.favourite };
        }
        return user;
      });
      return toogleFav;
    });
  }, []);

  function renderContent() {
    switch (customRouter) {
      case 'formPage':
        return (
          <AddContact
            key={editingContact?.id || 'new'}
            editingContact={editingContact}
            onAddContact={upsertContact}
            onCancel={onCancel}
            onDelete={deleteContact}
            gotoContactsPage={gotoContactsPage}
          />
        );

      case 'contactsPage':
        return (
          <ContactsList
            value={searchInput}
            setSearchInput={setSearchInput}
            contacts={visibleContacts}
            onDelete={deleteContact}
            onEdit={gotoEditContact}
            gotoAddContact={gotoAddContact}
            inputRef={inputRef}
            filteringContacts={filteringContacts}
            filterState={filterState}
            onToggleFavorites={onToggleFavorites}
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className="w-full md:w-4/6 lg:w-3/6 h-10/12  flex flex-col items-center gap-6">
      {renderContent()}
    </div>
  );
};

export default HomePage;
