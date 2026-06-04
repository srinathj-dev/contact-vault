import ContactCard from './ContactCard';
import AddContactBtn from './AddContactBtn';
import SearchBar from './SearchBar';

import { BookUser } from 'lucide-react';

const ContactsList = ({
  contacts,
  onDelete,
  onEdit,
  gotoAddContact,
  value,
  setSearchInput,
  inputRef,
}) => {
  return (
    <div className={`w-full h-full flex flex-col items-center gap-4 `}>
      <div className="flex justify-end w-full">
        <AddContactBtn gotoAddContact={gotoAddContact} width="w-max" />
      </div>
      <div className=" w-full">
        <SearchBar
          value={value}
          onChange={setSearchInput}
          inputRef={inputRef}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center gap-4">
        {!contacts || contacts.length === 0 ? (
          <>
            <div className="w-full h-2/4 flex justify-center items-end">
              <BookUser className="w-24 h-24 text-slate-300 bg-slate-100 p-6 rounded-2xl rotate-6" />
            </div>
            {value.length === 0 ? (
              <div className="w-full h-2/4 flex flex-col items-center justify-start gap-1">
                <div className="w-full flex flex-col items-center justify-center gap-1">
                  <h2 className="text-xl font-extrabold">
                    Your vault is empty
                  </h2>
                  <p className="text-slate-500 text-sm text-wrap text-center">
                    Start building your network by adding your first contact.
                  </p>
                </div>
                <div>
                  <AddContactBtn gotoAddContact={gotoAddContact} />
                </div>
              </div>
            ) : (
              <div className="w-full h-2/4 flex flex-col items-center justify-start">
                <h2 className="text-xl font-bold">No Contact Found</h2>
              </div>
            )}
          </>
        ) : (
          contacts.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContactsList;
