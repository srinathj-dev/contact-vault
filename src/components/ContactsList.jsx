import ContactCard from './ContactCard';

const ContactsList = ({ contacts, onDelete, onEdit, display }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <p className="text-slate-400 text-sm italic">No contacts available.</p>
    );
  }

  return (
    <div className={`w-full flex flex-col gap-4 ${display}`}>
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
    </div>
  );
};

export default ContactsList;
