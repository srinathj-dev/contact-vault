import { useState } from 'react';
import { User, Phone, Mail, MapPin, Camera, Heart } from 'lucide-react';
import FormInput from './FormInput';
import validator from 'validator';
import DeleteButton from './DeleteButton';

const AddContact = ({ editingContact, onAddContact, onCancel, onDelete }) => {
  const [imageUrl, setImageUrl] = useState(editingContact?.imageUrl || '');
  const [name, setName] = useState(editingContact?.name || '');
  const [phone, setPhone] = useState(editingContact?.phone || '');
  const [email, setEmail] = useState(editingContact?.email || '');
  const [address, setAddress] = useState(editingContact?.address || '');
  const [favourite, setFavourite] = useState(
    editingContact?.favourite || false,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = function () {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);

    // 1. name empty check
    if (
      name.trim() === '' ||
      !validator.isMobilePhone(phone.trim(), 'en-IN') ||
      (email?.trim() && !validator.isEmail(email?.trim()))
    ) {
      return;
    }

    // 2. contact object create

    const contact = {
      imageUrl: imageUrl,
      id: editingContact?.id || crypto.randomUUID(),
      name: name,
      phone: phone,
      email: email,
      address: address,
      favourite: favourite,
      createdAt: editingContact?.createdAt || Date.now(),
    };

    // 3. contacts update
    onAddContact(contact);

    // 4. inputs clear
    setImageUrl('');
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setIsSubmitted(false);
    setFavourite(false);
  }

  const isPhoneValid =
    isSubmitted && !validator.isMobilePhone(phone?.trim(), 'en-IN');
  const isEmailNotValid =
    isSubmitted && email != '' && !validator.isEmail(email?.trim());

  return (
    <>
      <div className="w-full flex  justify-between px-4">
        <button
          className=" h-9 rounded-lg text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 p-2 px-4 flex items-center justify-center"
          aria-label="Cancel Changes"
          onClick={() => onCancel()}
        >
          Cancel
        </button>
        {editingContact && (
          <DeleteButton onDelete={onDelete} keyValue={editingContact.id} />
        )}
      </div>
      <div className="h-max flex flex-col justify-start gap-6 border-2 border-slate-100 bg-white rounded-2xl p-8">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-semibold">New Contact</h1>
          <p className="font-light text-slate-500">
            Safely stored in your private vault
          </p>
        </div>

        <div className="flex flex-col items-center text-xs gap-3">
          <div className="w-32.5 h-32.5 flex relative ">
            <div className="w-30 h-30 bg-slate-100 border-4 border-slate-50 rounded-full flex items-center justify-center hover:border-indigo-100 p-1">
              {imageUrl ? (
                <img
                  className="w-full h-full object-fit rounded-full"
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
              htmlFor="imageUpload"
              aria-label="Upload profile image"
              className="w-10 h-10 rounded-full bg-indigo-600 border-3 border-white absolute bottom-2 right-1 flex  justify-center items-center cursor-pointer"
            >
              <Camera color="white" size={19} />
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

        <form
          className="flex flex-col gap-6 "
          action=""
          onSubmit={handleSubmit}
        >
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
            <div>
              <FormInput
                label="PHONE"
                id="mobile_no"
                name="mobile_no"
                type="tel"
                placeholder="9876543210"
                icon={Phone}
                value={phone}
                onChange={setPhone}
                required
                hasError={isPhoneValid ? true : false}
              />
              {isPhoneValid && (
                <p className="text-xs text-red-500">
                  Enter a valid Indian mobile number
                </p>
              )}
            </div>

            <div>
              <FormInput
                label="EMAIL"
                id="email"
                name="email"
                placeholder="balaKrishna@gmail.com"
                icon={Mail}
                value={email}
                onChange={setEmail}
                hasError={isEmailNotValid ? true : false}
              />
              {isEmailNotValid && (
                <p className="text-xs text-red-500">
                  Enter a valid Email Id Ex: asdfghjkl@asdf.com
                </p>
              )}
            </div>
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </label>

          <div className="flex items-center gap-2 px-3 rounded-xl border-2 bg-indigo-300/10 border-slate-100/40 justify-between py-4">
            <div className="flex">
              <span className="flex justify-center items-center bg-white p-2 rounded-lg">
                <Heart
                  className={`text-indigo-600 ${favourite ? 'fill-indigo-600' : 'fill-white'} transition-colors duration-300`}
                  size={18}
                />
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
                        ${favourite ? 'bg-indigo-600' : 'bg-slate-300'}`}
            >
              <input
                type="checkbox"
                id="favButton"
                className="sr-only"
                checked={favourite}
                onChange={(e) => setFavourite(e.target.checked)}
              />

              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-150 ease-in-out 
                        ${favourite ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0'}`}
              ></div>
            </label>
          </div>

          <button
            type="submit"
            className="p-3 rounded-xl bg-indigo-600 font-semibold text-white backdrop-blur-3xl text-nowrap cursor-pointer"
          >
            {editingContact ? 'Update Contact' : 'Create Contact'}
          </button>
        </form>
      </div>
    </>
  );
};
export default AddContact;
