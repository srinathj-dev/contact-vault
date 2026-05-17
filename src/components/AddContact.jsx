import { useState } from 'react';
import { User, Phone, Mail, MapPin, Camera, Heart } from 'lucide-react';
import FormInput from './FormInput';

const AddContact = ({
  imageUrl,
  setImageUrl,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  address,
  setAddress,
  favourite,
  setFavourite,
  contacts,
  setContacts,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    // 1. name empty check
    if (name.trim() === '') {
      return;
    }

    // 2. contact object create
    const contact = {
      id: crypto.randomUUID(),
      name: name,
      phone: phone,
      email: email,
      address: address,
      favourite: favourite,
      createdAt: Date.now(),
    };

    // 3. contacts lo add
    setContacts([...contacts, contact]);

    // 4. inputs clear
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setIsSubmitted(false);
    setFavourite(false);
  }

  return (
    <div className="flex flex-col justify-start gap-6 border-2 border-slate-100 bg-white h-full rounded-2xl p-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-semibold">New Contact</h1>
        <p className="font-light text-slate-500">
          Safely stored in your private vault
        </p>
      </div>

      <div className="flex flex-col items-center text-xs gap-3">
        <div className="w-[130px] h-[130px] flex relative ">
          <div className="w-[120px] h-[120px] bg-slate-100 border-4 border-slate-50 rounded-full flex items-center justify-center hover:border-indigo-100 p-1">
            {imageUrl ? (
              <img
                className="w-full h-full object-full rounded-full"
                src={imageUrl}
                alt="Profile preview"
              />
            ) : name.trim() ? (
              <span className="text-6xl">{name.trim()[0].toUpperCase()}</span>
            ) : (
              <User className="text-slate-300" size={54} />
            )}
          </div>
          <label
            htmlFor="imageUpload" aria-label="Upload profile image"
            className="w-10 h-10 rounded-full bg-indigo-600 border-3 border-white absolute bottom-2 right-1 flex  justify-center items-center cursor-pointer">
            <Camera color="white" size={24} />
            
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <p className="text-[11px] text-slate-400 font-medium font-sans">
          SQUARE PHOTO RECOMMENDED
        </p>
      </div>

      <form className="flex flex-col gap-6 " action="" onSubmit={handleSubmit}>
        <FormInput
          label="FULL NAME"
          id="full_name"
          name="full_name"
          type="text"
          placeholder="e.g. Sai Srinath"
          icon={User}
          value={name}
          onChange={setName}
          hasError={isSubmitted && name.trim() === '' ? true : false}
        />

        <div className="flex flex-col lg:flex-row lg:basis-auto gap-2 w-full">
          <FormInput
            label="PHONE"
            id="mobile_no"
            name="mobile_no"
            type="tel"
            placeholder="9876543210"
            icon={Phone}
            value={phone}
            onChange={setPhone}
          />

          <FormInput
            label="EMAIL"
            id="email"
            name="email"
            type="email"
            placeholder="balaKrishna@gmail.com"
            icon={Mail}
            value={email}
            onChange={setEmail}
          />
        </div>

        <label htmlFor="address" className="input-label">
          ADDRESS
          <div className="input-container">
            <span className="h-full flex pt-3">
              <MapPin className="text-slate-400" size={18} />
            </span>
            <textarea
              name="address"
              placeholder="Enter Your Address Here..."
              id="address"
              className="w-full input-primary text-wrap"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </label>

        <div className="flex items-center gap-2 px-3 rounded-xl border-2 bg-indigo-300/10 border-slate-100/40 justify-between py-4">
          <div className="flex">
            <span className="flex justify-center items-center bg-white p-2 rounded-lg">
              <Heart color="#4f39f6" size={18} />
            </span>
            <div className="flex flex-col px-3">
              <h2 className="text-sm font-semibold">Favorite</h2>
              <p className="text-xs text-slate-400">
                Pin to top for quick access
              </p>
            </div>
          </div>

          <label
            htmlFor="favButton"
            className={`w-12 h-6 transition-all duration-150 ease-in-out rounded-2xl relative cursor-pointer
                        ${favourite ? 'bg-indigo-600' : 'bg-slate-300'}`}>
            <input
              type="checkbox"
              id="favButton"
              className="sr-only"
              checked={favourite}
              onChange={(e) => setFavourite(e.target.checked)}
            />

            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-150 ease-in-out
                        ${favourite ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0'}`}>
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="p-3 rounded-xl bg-indigo-600 font-semibold text-white backdrop-blur-3xl text-nowrap cursor-pointer">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
