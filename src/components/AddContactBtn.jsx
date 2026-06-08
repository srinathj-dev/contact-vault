const AddContactBtn = ({ gotoAddContact, width }) => {
  return (
    <button
      className={`btn-primary ${width} rounded-full drop-shadow-lg drop-shadow-indigo-500/50 px-5 py-2`}
      onClick={() => {
        gotoAddContact();
      }}
    >
      Add Contact
    </button>
  );
};

export default AddContactBtn;
