import ContactCard from "./ContactCard"

const ContactsList = ({contacts, setContacts}) => {
  
  
  if (!contacts || contacts.length === 0) {
    return <p className="text-slate-400 text-sm italic">No contacts available.</p>;
  }
  return(
    <>
      {contacts.map( (item) => { return(
        <div className=" w-full" key={item.id}> 
          <ContactCard id={item.id} name={item.name} phone={item.phone} url={item.url} favourite={item.favourite} setContacts={setContacts}/>
        </div>
      )} )}
    </> 
  
  )
  
}

export default ContactsList
