
import AddContact from "../components/AddContact";
import ContactsList from "../components/ContactsList";
import { useState } from "react";

const HomePage = () => {

  const [imageUrl, setImageUrl] = useState("");
  const [name, setName]  =  useState("");
  const [phone, setPhone]  =  useState("");
  const [email, setEmail]  =  useState("");
  const [address, setAddress] = useState("");
  const [favourite, setFavourite] = useState(false)
  const [contacts, setContacts]  =  useState([]);
  const [check, setCheck] = useState(false);
  

  return (
      <div className="flex flex-col items-center gap-6">
        <AddContact imageUrl={imageUrl} setImageUrl = {setImageUrl}  name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} address={address} setAddress={setAddress} favourite={favourite} setFavourite={setFavourite} contacts={contacts} setContacts={setContacts} />
        <ContactsList contacts ={contacts} />
      </div>
  )
}

export default HomePage
