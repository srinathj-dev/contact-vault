const addContactBtn = ({ displayForm }) => {
  return (
    <button
      className="btn-primary"
      onClick={() => {
        displayForm();
      }}
    >
      Add Contact
    </button>
  );
};

export default addContactBtn;
