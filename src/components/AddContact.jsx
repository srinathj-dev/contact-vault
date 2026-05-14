import { useState } from "react";
import FormInput from "./FormInput";

const AddContact  =  ()=>{
  const [name, setName]  =  useState("");
  const [phone, setPhone]  =  useState("");
  const [email, setEmail]  =  useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts]  =  useState([]);
  const [check, setCheck] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true)
    // 1. name empty check
    if(name.trim()  === "" ){
      return;
    }

    // 2. contact object create
    const contact = {
      id: crypto.randomUUID(),
      name: name,
      phone: phone,
      email:  email,  
      createdAt: Date.now()
    }

    // 3. contacts lo add
    setContacts([...contacts, contact]);

    // 4. inputs clear
    setName("")
    setPhone("")
    setEmail("")
    setAddress("");
    setIsSubmitted(false);
  }
  return (
    <>
      <div className = "flex flex-col justify-start gap-6 border-2 border-slate-100 bg-white h-full rounded-2xl p-10">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-semibold">New Contact</h1>
          <p className="font-light text-slate-500">Safely stored in your private vault</p>
        </div>

        <div className="flex flex-col items-center text-xs gap-3">
          <div className="w-[130px] h-[130px] flex relative ">
            <div className="w-[120px] h-[120px] bg-slate-100 border-4 border-slate-50 rounded-full flex items-center justify-center hover:border-indigo-100">
              <i className="text-4xl text-slate-300 fa-regular fa-user"></i>
            </div>
            <label htmlFor="imageUpload" 
              aria-label="Upload profile image"
              className="w-10 h-10 rounded-full bg-indigo-600 border-3 border-white absolute bottom-1 right-1 flex  justify-center items-center cursor-pointer">
              <i className="text-lg text-white fa-regular fa-camera"></i>
              <input type="file" id="imageUpload" name="image" accept="image/*" className="hidden"/>
            </label>
          </div>
          
          <p className="text-[11px] text-slate-400 font-medium font-sans">SQUARE PHOTO RECOMMENDED</p>
        </div>
        
        <form className = "flex flex-col gap-6 " action = "" onSubmit = {handleSubmit}>
       
          <FormInput label="FULL NAME" id="full_name" name="full_name" type="text" placeholder="e.g. Sai Srinath" 
          icon="text-[12px] fa-regular fa-user" value={name} onChange={setName} hasError={isSubmitted && name.trim() === "" ? true : false}/>

          <div className="flex flex-col lg:flex-row lg:flex-basis gap-2 w-full">
            <FormInput label="PHONE" id="mobile_no" name="mobile_no" type="tel" placeholder="9876543210" 
            icon="text-[12px] fa-solid fa-phone" value={phone} onChange={setPhone}/>
            
            <FormInput label="EMAIL" id="email" name="email" type="email" placeholder="balaKrishna@gmail.com" 
            icon="text-[12px] fa-regular fa-envelope" value={email} onChange={setEmail}/>
          </div> 

          <label htmlFor="address" className="input-label">ADDRESS
            <div className = "input-container" >
              <span className="h-full flex flex-start pt-4"><i className="text-[14px] fa-solid fa-location-dot"></i></span>
              <textarea  name="address"  placeholder="Enter Your Address Here..." id="address"
                className = "w-full input-primary" onChange = {(e) => setAddress(e.target.value)} >
              </textarea>
            </div>
          </label> 

          <div className = "flex items-center gap-2 px-3 rounded-xl border-2 bg-indigo-300/10 border-slate-100/40 justify-between py-4" >
            <div className="flex">
              <span className="flex flex-center justify-center items-center bg-white p-2 rounded-lg"><i className="text-[14px] fa-solid fa-heart text-indigo-500"></i></span>
              <div className="flex flex-col px-3"><h2 className="text-sm font-semibold">Favorite</h2><p className="text-xs text-slate-400">Pin to top for quick access</p></div>
            </div>
            
            <label htmlFor="favButton" className="w-12 h-6 bg-slate-300 transition-all delay-300 ease-in-out has-[:checked]:bg-indigo-600 rounded-2xl relative">
              <input type="checkbox" className="hidden peer"  id="favButton"/>
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform delay-300 ease-in-out peer-checked:translate-x-6"></div>
            </label>
          </div>  

          <button type = "submit" 
            className = "p-3 rounded-xl bg-indigo-600 font-semibold text-white backdrop-blur-3xl text-nowrap cursor-pointer">
            Create Contact
          </button>
          
        </form>
          
      </div>
      <div>
        <pre>{JSON.stringify(contacts, null, 2)}</pre>
      </div>
    </>
  )
}

export default AddContact
