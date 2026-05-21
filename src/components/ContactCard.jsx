import { Phone, Heart, ChevronRight, Trash2 } from 'lucide-react';

const ContactCard = ({
  keyValue,
  name,
  phone,
  imageUrl,
  favourite,
  onDelete,
}) => {
  return (
    <div
      className="w-full  p-3 bg-white border border-slate-300 rounded-2xl flex items-center justify-between cursor-pointer hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50 group transition-colors duration-300"
      key={keyValue}
    >
      <div className="flex gap-2">
        <div className="w-12 h-12 relative flex items-center justify-center">
          <Heart
            className={`w-4 h-4 text-red-500 fill-white rounded-full p-px border-2 border-white m-0.5  bg-red-500 ${favourite ? 'absolute' : 'hidden'} top-0 right-0 z-10`}
          />
          <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center  p-1">
            {typeof imageUrl === 'string' && imageUrl.trim() !== '' ? (
              <img
                src={imageUrl}
                alt="avatar-image"
                className="w-full h-full rounded-full"
              />
            ) : (
              <span className="text-base text-slate-500 font-semibold">
                {name?.trim()?.[0]?.toUpperCase() || '👤'}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center p-1">
          <p className="text-sm text-slate-700 font-bold group-hover:text-indigo-600 transition-colors duration-300">
            {name}
          </p>
          <div className="flex items-center gap-1 p-1">
            <Phone className="text-slate-500" strokeWidth={3} size={10} />
            <p className="text-xs text-slate-500">{phone}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="h-full flex items-center justify-center">
          {favourite ? (
            <Heart className="w-9 h-9 rounded-full text-red-500 fill-red-500 bg-red-50 hover:bg-red-100 transition-colors duration-300 p-2" />
          ) : (
            <Heart className="w-9 h-9 rounded-full  text-slate-300 hover:text-slate-400 hover:bg-slate-50 hover:fill-white p-2 transition-colors duration-300" />
          )}
        </button>
        <button
          className="h-full flex items-center justify-center"
          onClick={() => onDelete(keyValue)}
          aria-label="Close"
        >
          <Trash2 className="w-9 h-9 rounded-full text-red-500 border border-red-200 bg-red-50 hover:bg-red-100 transition-colors duration-300 p-2" />
        </button>
        <div className="h-full flex items-center justify-center">
          <ChevronRight
            className="text-slate-300 hover:text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300"
            strokeWidth={2}
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
