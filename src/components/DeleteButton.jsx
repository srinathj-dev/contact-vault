import { Trash2 } from 'lucide-react';
const DeleteButton = ({ onDelete, keyValue }) => {
  return (
    <button
      className="flex items-center justify-center"
      onClick={() => onDelete(keyValue)}
      aria-label="Delete"
    >
      <Trash2 className="w-9 h-9 rounded-full text-red-500 border border-red-200 bg-red-50 hover:bg-red-100 transition-colors duration-300 p-2" />
    </button>
  );
};

export default DeleteButton;
