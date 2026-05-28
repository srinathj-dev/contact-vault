const AddContactBtn = ({ displayForm, width }) => {
  return (
    <button
      className={`btn-primary ${width}`}
      onClick={() => {
        displayForm();
      }}
    >
      Add Contact
    </button>
  );
};

export default AddContactBtn;
