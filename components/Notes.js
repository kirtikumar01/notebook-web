import { useEffect } from "react";
import { useState } from "react"
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase';
import Note from "./Note";

function Notes() {

    const[notes, setNotes] = useState([]);

    useEffect(() => 
    onSnapshot(query(collection(db, 'notes'), orderBy('timestamp', 'desc')), snapshot => {
        setNotes(snapshot.docs);
    })
    ,[db]
    )

    console.log(notes)

  return (
    <div className="p-4 max-w-6xl mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {notes.map((note) => (
          <Note key={note.id} id={note.id} timestamp={note.data().timestamp?.toDate()} title={note.data().title} note={note.data().note} />
      ))}
    </div>
  )
}

export default Notes
