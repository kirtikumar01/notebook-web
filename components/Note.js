import { deleteDoc, doc } from '@firebase/firestore';
import { TrashIcon } from '@heroicons/react/outline';
import Moment from 'react-moment';
import { db } from '../firebase';

function Note({ id, title, note, timestamp }) {

    const deleteHandler = async() => {
        await deleteDoc(doc(db, 'notes', id))
    }

  return (
    <div className="p-4 m-2 rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer truncate">
        <h1 className="font-bold text-lg">Title - {title}</h1>
        <p className="text-sm"><span className="font-bold">Note</span> - {note}</p>  
        <Moment fromNow className="text-gray-400 text-xs">
            {timestamp}
        </Moment>
        <div onClick={deleteHandler} className="icon group hover:bg-red-600/10">
            <TrashIcon className="h-5 group-hover:text-red-600" />
        </div>
    </div>
  )
}

export default Note
