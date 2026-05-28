const AddContactBtn = ({ goToAddContact, width }) => {
  return (
    <button
      className={`btn-primary ${width}`}
      onClick={() => {
        goToAddContact();
      }}
    >
      Add Contact
    </button>
  );
};

export default AddContactBtn;
