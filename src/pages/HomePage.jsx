
import AddContact from "../components/AddContact";
import ContactsList from "../components/ContactsList";
import { useState } from "react";

const HomePage = () => {

  const [contacts, setContacts]  =  useState([]);

   let deleteContact = function (id){
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  return (
      <div className="flex flex-col items-center gap-6">
        <AddContact  contacts={contacts} setContacts={setContacts} />
        <ContactsList contacts ={contacts} onDelete={deleteContact} />
      </div>
  )
}

export default HomePage
