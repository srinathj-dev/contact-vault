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
          <div className=" w-full" key={contact.id}>
            <ContactCard
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              url={contact.url}
              favourite={contact.favourite}
              onDelete={onDelete}
            />
          </div>
        );
      })}
    </>
  );
};

export default ContactsList;
