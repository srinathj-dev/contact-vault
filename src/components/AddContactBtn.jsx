const AddContactBtn = ({ gotoAddContact, width }) => {
  return (
    <button
      className={`btn-primary ${width}`}
      onClick={() => {
        gotoAddContact();
      }}
    >
      Add Contact
    </button>
  );
};

export default AddContactBtn;
