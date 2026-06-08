import ContactCard from './ContactCard';
import AddContactBtn from './AddContactBtn';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

import { BookUser } from 'lucide-react';

const ContactsList = ({
  contacts,
  onDelete,
  onEdit,
  gotoAddContact,
  value,
  setSearchInput,
  inputRef,
  filteringContacts,
  filterState,
  onToggleFavorites,
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
      <div className="flex place-self-start rounded-md gap-[1px] p-px bg-slate-200">
        <FilterButton
          filteringContacts={filteringContacts}
          filterState={filterState}
          filterButtonName="All"
        />
        <FilterButton
          filteringContacts={filteringContacts}
          filterState={filterState}
          filterButtonName="Favorites"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center gap-4  overflow-y-scroll">
        {!contacts || contacts.length === 0 ? (
          <>
            <div className="w-full h-2/4 flex justify-center items-end">
              <BookUser className="w-24 h-24 text-slate-300 bg-slate-100 p-6 rounded-2xl rotate-6 drop-shadow-lg drop-shadow-slate-300/50" />
            </div>
            {value.length === 0 ? (
              <div className="w-full h-2/4 flex flex-col items-center justify-start gap-2">
                <div className="flex flex-col items-center justify-center ">
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
        ) : filterState === 'All' ? (
          contacts.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                onEdit={onEdit}
                onToggleFavorites={onToggleFavorites}
              />
            );
          })
        ) : (
          filterState === 'Favorites' &&
          contacts
            .filter((contact) => contact.favourite)
            .map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                onEdit={onEdit}
                onToggleFavorites={onToggleFavorites}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default ContactsList;
