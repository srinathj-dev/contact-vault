import {Phone, Heart, ChevronRight} from 'lucide-react';

const ContactCard = ({name, phone, url, favourite}) => {
  
  return (
    <div className='w-full  p-3 bg-white border-[1px] border-slate-200 rounded-2xl flex items-center justify-between cursor-pointer hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 group duration-200'>
      <div className='flex gap-2'>
        <div className ='w-12 h-12 rounded-full bg-slate-100 border-4 border-slate-50 flex items-center justify-center hover:border-indigo-100 p-1'>
          {url !== "" ? (
            <img src={url} alt='' className='w-full h-full rounded-full'/>
            ) : (
              <span className="text-md text-slate-500 font-semibold">{name.trim()[0].toUpperCase()}</span>
            ) }
        </div>
        <div className='flex flex-col justify-center p-1'>
          <p className='text-sm text-slate-700 font-bold group-hover:text-indigo-600 duration-200'>{name}</p>
          <div className='flex items-center gap-1 p-1'>
            <Phone className = 'text-slate-500 font-bold' size={10} />
            <p className='text-xs text-slate-500'>{phone}</p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className ='h-full flex items-center justify-center' >
          {favourite ? (<Heart className ='w-full h-full rounded-full text-red-500 fill-red-500 bg-red-50 p-2'  size={20} />):
          ( <Heart className ='w-full h-full rounded-full  text-slate-300 hover:text-slate-400 hover:bg-slate-50 hover:fill-white p-2 duration-200'  size={20} />)}
         
        </div>
        <div className ='h-full flex items-center justify-center'>
          <ChevronRight className ='text-slate-300 font-bold hover:text-indigo-600 group-hover:text-indigo-500 duration-200'  size={24} />
        </div>
      </div>
    </div>
  )
}

export default ContactCard
