import ContactCard from './ContactCard';

const ContactsList = ({ contacts, onDelete, onEdit }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <p className="text-slate-400 text-sm italic">No contacts available.</p>
    );
  }

  return (
    <>
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </>
  );
};

export default ContactsList;
