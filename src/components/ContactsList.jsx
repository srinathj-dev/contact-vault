import ContactCard from "./ContactCard"

const ContactsList = ({contacts}) => {
  
  if(contacts.length > 0) { 
  return(<>
  
    {contacts.map( (item) => { return(
      <div className=" w-full" key={item.id}> 
        <ContactCard name={item.name} phone={item.phone} url={item.url} favourite={item.favourite} />
      </div>
    )} )}</> )
  }
}

export default ContactsList
