import ContactCard from './ContactCard';

const ContactsList = ({ contacts, onDelete }) => {
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
            keyValue={contact.id}
            name={contact.name}
            phone={contact.phone}
            imageUrl={contact.imageUrl}
            favourite={contact.favourite}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default ContactsList;
