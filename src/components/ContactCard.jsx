import { Phone, Heart, ChevronRight, Pencil } from 'lucide-react';
import DeleteButton from './DeleteButton';
import { memo } from 'react';

const ContactCard = memo(({ contact, onDelete, onEdit, onToggleFavorites }) => {
  return (
    <div className="w-full p-2 bg-white border border-slate-300 rounded-2xl flex items-center justify-between cursor-pointer hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50 group transition-colors duration-300">
      <div className="flex gap-2">
        <div className="w-12 h-12 relative flex items-center justify-center">
          <Heart
            className={`w-4 h-4 text-red-500 fill-white rounded-full p-px border-2 border-white m-0.5  bg-red-500 ${contact.favourite ? 'absolute' : 'hidden'} top-0 right-0 z-10`}
          />
          <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center  p-1">
            {typeof contact.imageUrl === 'string' &&
            contact.imageUrl.trim() !== '' ? (
              <img
                src={contact.imageUrl}
                alt="avatar-image"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-base text-slate-500 font-semibold">
                {contact.name?.trim()?.[0]?.toUpperCase() || '👤'}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center p-1">
          <p className="text-sm text-slate-700 font-bold group-hover:text-indigo-600 transition-colors duration-300">
            {contact.name}
          </p>
          <div className="flex items-center gap-1 p-1">
            <Phone className="text-slate-500" strokeWidth={3} size={10} />
            <p className="text-xs text-slate-500">{contact.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="h-full flex items-center justify-center"
          onClick={() => {
            onToggleFavorites(contact);
          }}
        >
          <Heart
            className={`w-9 h-9 rounded-full ${contact.favourite ? 'text-red-500 fill-red-500 bg-red-50 hover:bg-red-100' : 'text-slate-300 hover:text-slate-400 hover:bg-slate-50 hover:fill-white p-2'} transition-colors duration-300 p-2`}
          />
        </button>
        <button
          className="flex items-center justify-center rounded-full p-3 hover:bg-slate-50 transition-colors duration-300"
          onClick={() => {
            onEdit(contact);
          }}
          aria-label="Edit Contact"
        >
          <Pencil className="text-slate-700 " size={18} />
        </button>
        <DeleteButton onDelete={onDelete} keyValue={contact.id} />
      </div>
    </div>
  );
});

export default ContactCard;
