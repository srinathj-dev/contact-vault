const AddContactBtn = ({ gotoAddContact, icon, addButtonName, fontSize }) => {
  return (
    <button
      className={`btn-primary ${icon} drop-shadow-lg drop-shadow-indigo-500/50 flex items-center justify-center content-center`}
      onClick={() => {
        gotoAddContact();
      }}
    >
      {addButtonName}
    </button>
  );
};

export default AddContactBtn;
